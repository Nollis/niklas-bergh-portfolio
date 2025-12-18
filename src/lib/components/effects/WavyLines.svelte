<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	let canvas: HTMLCanvasElement;
	let animationId: number;

	onMount(() => {
		if (!browser || !canvas) return;

		const ctx = canvas.getContext('2d', { alpha: true });
		if (!ctx) return;
		const context = ctx;

		// Throttle to ~30fps for better performance
		let lastFrameTime = 0;
		const targetFPS = 30;
		const frameInterval = 1000 / targetFPS;

		function resize() {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		}
		resize();
		window.addEventListener('resize', resize);

		// Simplified noise - fewer octaves
		const noiseScale = 0.003;
		function noise(x: number, y: number, seed = 0) {
			return (
				Math.sin(x * noiseScale + seed * 17.3 + y * 0.01) +
				Math.cos(y * noiseScale * 1.3 + seed * 23.7 + x * 0.008) * 0.7
			) / 2;
		}

		// Reduced ribbon config - fewer lines
		const ribbons = [
			{ baseY: 0.38, amplitude: 70, frequency: 0.0025, twistFreq: 0.004, speed: 0.28, ribbonWidth: 42, lines: 6, seed: 100, chaos: 0.9 },
			{ baseY: 0.58, amplitude: 80, frequency: 0.002, twistFreq: 0.0035, speed: 0.22, ribbonWidth: 45, lines: 7, seed: 200, chaos: 1.0 }
		];

		// Fewer particles
		const particles: Array<{
			x: number;
			ribbonIndex: number;
			linePos: number;
			speed: number;
			size: number;
			brightness: number;
			phase: number;
		}> = [];

		for (let i = 0; i < 20; i++) {
			particles.push({
				x: Math.random() * 2500 - 700,
				ribbonIndex: Math.floor(Math.random() * ribbons.length),
				linePos: Math.random(),
				speed: 0.3 + Math.random() * 0.6,
				size: 1 + Math.random() * 2,
				brightness: 0.5 + Math.random() * 0.5,
				phase: Math.random() * Math.PI * 2
			});
		}

		let time = 0;

		function getRibbonPoint(x: number, ribbon: typeof ribbons[0], t: number, lineIndex: number, totalLines: number) {
			const lineNorm = lineIndex / (totalLines - 1);
			const noiseY = noise(x + t * 60, lineIndex * 40, ribbon.seed) * 30 * ribbon.chaos;

			const waveY =
				Math.sin(x * ribbon.frequency + t * ribbon.speed + ribbon.seed * 0.1) * ribbon.amplitude +
				Math.sin(x * ribbon.frequency * 1.7 + t * ribbon.speed * 0.7 + lineIndex * 0.3) * (ribbon.amplitude * 0.35) +
				noiseY;

			const twist = Math.sin(x * ribbon.twistFreq + t * ribbon.speed * 0.6) * Math.PI * 0.8;
			const normalizedPos = (lineNorm * 2 - 1);
			const twistOffset = normalizedPos * ribbon.ribbonWidth * Math.cos(twist);

			return {
				y: canvas.height * ribbon.baseY + waveY + twistOffset,
				depth: normalizedPos * Math.sin(twist)
			};
		}

		// Pre-create gradient templates (cache colors, not full gradients)
		const colorCache = ribbons.map((_, ribbonIndex) => ({
			hueShift: ribbonIndex * 15,
			b1: 90 + ribbonIndex * 10,
			b2: 120 + ribbonIndex * 8
		}));

		function drawRibbon(ribbon: typeof ribbons[0], t: number, ribbonIndex: number) {
			const totalLines = ribbon.lines;
			const colors = colorCache[ribbonIndex];

			for (let lineIndex = 0; lineIndex < totalLines; lineIndex++) {
				const samplePoint = getRibbonPoint(canvas.width * 0.5, ribbon, t, lineIndex, totalLines);
				const depth = samplePoint.depth;

				const baseAlpha = 0.25 + (depth + 1) * 0.35;
				const lineWidth = 0.6 + (depth + 1) * 1.0;

				context.beginPath();
				context.lineWidth = lineWidth;
				context.lineCap = 'round';

				const g1 = Math.floor(170 + depth * 35 + colors.hueShift);
				const g2 = Math.floor(200 + depth * 25 + colors.hueShift);

				// Simpler gradient with fewer stops
				const gradient = context.createLinearGradient(0, 0, canvas.width, 0);
				gradient.addColorStop(0, `rgba(40, ${g1}, ${colors.b1}, 0)`);
				gradient.addColorStop(0.15, `rgba(60, ${g2}, ${colors.b2}, ${baseAlpha * 0.6})`);
				gradient.addColorStop(0.5, `rgba(75, ${g2}, ${colors.b2 + 15}, ${baseAlpha})`);
				gradient.addColorStop(0.85, `rgba(60, ${g2}, ${colors.b2}, ${baseAlpha * 0.6})`);
				gradient.addColorStop(1, `rgba(40, ${g1}, ${colors.b1}, 0)`);
				context.strokeStyle = gradient;

				// Larger step = fewer points (12px instead of 5px)
				let started = false;
				for (let x = -50; x < canvas.width + 50; x += 12) {
					const point = getRibbonPoint(x, ribbon, t, lineIndex, totalLines);
					if (!started) {
						context.moveTo(x, point.y);
						started = true;
					} else {
						context.lineTo(x, point.y);
					}
				}

				context.stroke();
			}
		}

		function drawParticles(t: number) {
			particles.forEach((p) => {
				p.x += p.speed;

				if (p.x > canvas.width + 150) {
					p.x = -150 - Math.random() * 200;
					p.ribbonIndex = Math.floor(Math.random() * ribbons.length);
					p.linePos = Math.random();
				}

				const ribbon = ribbons[p.ribbonIndex];
				const lineIndex = Math.floor(p.linePos * ribbon.lines);
				const point = getRibbonPoint(p.x, ribbon, t, lineIndex, ribbon.lines);

				const pulse = 0.7 + Math.sin(t * 3 + p.phase) * 0.3;
				const alpha = p.brightness * pulse * 0.6;

				context.beginPath();
				context.arc(p.x, point.y, p.size, 0, Math.PI * 2);
				context.fillStyle = `rgba(150, 240, 190, ${alpha})`;
				context.fill();
			});
		}

		function animate(currentTime: number) {
			animationId = requestAnimationFrame(animate);

			// Throttle frame rate
			const elapsed = currentTime - lastFrameTime;
			if (elapsed < frameInterval) return;
			lastFrameTime = currentTime - (elapsed % frameInterval);

			context.clearRect(0, 0, canvas.width, canvas.height);

			ribbons.forEach((ribbon, i) => drawRibbon(ribbon, time, i));
			drawParticles(time);

			time += 0.015;
		}

		// Pause when tab not visible
		function handleVisibility() {
			if (document.hidden) {
				cancelAnimationFrame(animationId);
			} else {
				lastFrameTime = performance.now();
				animationId = requestAnimationFrame(animate);
			}
		}
		document.addEventListener('visibilitychange', handleVisibility);

		animationId = requestAnimationFrame(animate);

		return () => {
			window.removeEventListener('resize', resize);
			document.removeEventListener('visibilitychange', handleVisibility);
		};
	});

	onDestroy(() => {
		if (animationId) {
			cancelAnimationFrame(animationId);
		}
	});
</script>

<canvas bind:this={canvas} class="wavy-canvas" aria-hidden="true"></canvas>

<style>
	.wavy-canvas {
		position: fixed;
		top: 50%;
		left: 50%;
		width: 140%;
		height: 140%;
		pointer-events: none;
		z-index: -2;
		opacity: 0.6;
		transform: translate(-50%, -50%) rotate(-20deg);
		transform-origin: center center;
		will-change: contents;
	}
</style>
