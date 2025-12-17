<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	let canvas: HTMLCanvasElement;
	let animationId: number;

	onMount(() => {
		if (!browser || !canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		const context = ctx; // keep non-null reference for nested functions

		function resize() {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		}
		resize();
		window.addEventListener('resize', resize);

		// Noise function for organic movement
		const noiseScale = 0.003;
		const noiseOctaves = [
			{ freq: 1, amp: 1 },
			{ freq: 2.1, amp: 0.5 },
			{ freq: 4.3, amp: 0.25 },
			{ freq: 8.7, amp: 0.125 }
		];

		function noise(x: number, y: number, seed = 0) {
			let val = 0;
			noiseOctaves.forEach((oct) => {
				val += Math.sin(x * noiseScale * oct.freq + seed * 17.3 + y * 0.01) * oct.amp;
				val += Math.cos(y * noiseScale * oct.freq * 1.3 + seed * 23.7 + x * 0.008) * oct.amp * 0.7;
			});
			return val / 2.5;
		}

		// Ribbon configurations
		const ribbons = [
			{ baseY: 0.38, amplitude: 70, frequency: 0.0025, twistFreq: 0.004, speed: 0.28, ribbonWidth: 42, lines: 10, seed: 100, chaos: 0.9 },
			{ baseY: 0.58, amplitude: 80, frequency: 0.002, twistFreq: 0.0035, speed: 0.22, ribbonWidth: 45, lines: 11, seed: 200, chaos: 1.0 }
		];

		// Particles
		const particles: Array<{
			x: number;
			ribbonIndex: number;
			linePos: number;
			speed: number;
			size: number;
			brightness: number;
			phase: number;
			wobble: number;
		}> = [];

		for (let i = 0; i < 35; i++) {
			particles.push({
				x: Math.random() * 2500 - 700,
				ribbonIndex: Math.floor(Math.random() * ribbons.length),
				linePos: Math.random(),
				speed: 0.2 + Math.random() * 0.8,
				size: 0.8 + Math.random() * 2.5,
				brightness: 0.4 + Math.random() * 0.6,
				phase: Math.random() * Math.PI * 2,
				wobble: Math.random() * 0.5
			});
		}

		let time = 0;

		function getRibbonPoint(x: number, ribbon: typeof ribbons[0], t: number, lineIndex: number, totalLines: number) {
			const lineNorm = lineIndex / (totalLines - 1);
			const lineSeed = lineIndex * 73.7;

			const noiseX = noise(x + t * 80, lineIndex * 50 + t * 30, ribbon.seed) * 40 * ribbon.chaos;
			const noiseY = noise(x + t * 60 + 500, lineIndex * 40, ribbon.seed + 50) * 35 * ribbon.chaos;

			const phase1 = ribbon.seed * 0.1;
			const phase2 = lineIndex * 0.3;
			const waveY =
				Math.sin(x * ribbon.frequency + t * ribbon.speed + phase1) * ribbon.amplitude +
				Math.sin(x * ribbon.frequency * 1.7 + t * ribbon.speed * 0.7 + phase2 + 1.5) * (ribbon.amplitude * 0.4) +
				Math.sin(x * ribbon.frequency * 0.5 + t * ribbon.speed * 1.4 + lineSeed * 0.01) * (ribbon.amplitude * 0.3) +
				Math.cos(x * ribbon.frequency * 2.3 + t * ribbon.speed * 0.5 + phase1) * (ribbon.amplitude * 0.2) +
				noiseY;

			const twistNoise = noise(x * 0.5, t * 100, ribbon.seed + 150) * 0.8;
			const twist = Math.sin(x * ribbon.twistFreq + t * ribbon.speed * 0.6 + twistNoise) * Math.PI * (0.8 + twistNoise * 0.4);

			const spreadVar = 1 + noise(x, lineIndex * 100, ribbon.seed + 200) * 0.3 * ribbon.chaos;
			const normalizedPos = (lineNorm * 2 - 1) * spreadVar;

			const widthVar = ribbon.ribbonWidth * (0.7 + Math.sin(x * 0.002 + t * 0.2) * 0.3 + noise(x, t * 50, ribbon.seed + 77) * 0.2);
			const twistOffset = normalizedPos * widthVar * Math.cos(twist);

			const depth = Math.sin(twist);
			const depthForLine = normalizedPos * depth;

			return {
				y: canvas.height * ribbon.baseY + waveY + twistOffset + noiseX * 0.3,
				depth: depthForLine,
				twist: twist,
				noiseVal: noiseX
			};
		}

		function drawRibbon(ribbon: typeof ribbons[0], t: number, ribbonIndex: number) {
			const totalLines = ribbon.lines;

			const lineData: Array<{ index: number; depth: number }> = [];
			for (let i = 0; i < totalLines; i++) {
				const sampleX = canvas.width * 0.4 + ribbonIndex * 50;
				const point = getRibbonPoint(sampleX, ribbon, t, i, totalLines);
				lineData.push({ index: i, depth: point.depth });
			}
			lineData.sort((a, b) => a.depth - b.depth);

			lineData.forEach(({ index: lineIndex, depth }) => {
				const baseAlpha = 0.25 + (depth + 1) * 0.35;
				const lineWidth = 0.6 + (depth + 1) * 1.0;

				context.beginPath();
				context.lineWidth = lineWidth;
				context.lineCap = 'round';

				const hueShift = ribbonIndex * 15;
				const g1 = Math.floor(170 + depth * 35 + hueShift);
				const g2 = Math.floor(200 + depth * 25 + hueShift);
				const b1 = Math.floor(90 + ribbonIndex * 10);
				const b2 = Math.floor(120 + ribbonIndex * 8);

				const gradient = context.createLinearGradient(0, 0, canvas.width, 0);
				const fadeStart = 0.05 + Math.sin(t * 0.3 + ribbonIndex) * 0.05;
				const fadeEnd = 0.95 - Math.sin(t * 0.25 + ribbonIndex * 2) * 0.05;
				gradient.addColorStop(0, `rgba(40, ${g1}, ${b1}, 0)`);
				gradient.addColorStop(fadeStart, `rgba(55, ${g1}, ${b1}, ${baseAlpha * 0.4})`);
				gradient.addColorStop(0.25 + Math.sin(t * 0.2) * 0.05, `rgba(65, ${g2}, ${b2}, ${baseAlpha * 0.7})`);
				gradient.addColorStop(0.5, `rgba(75, ${g2}, ${b2 + 15}, ${baseAlpha * 0.95})`);
				gradient.addColorStop(0.75 - Math.sin(t * 0.15) * 0.05, `rgba(65, ${g2}, ${b2}, ${baseAlpha * 0.7})`);
				gradient.addColorStop(fadeEnd, `rgba(55, ${g1}, ${b1}, ${baseAlpha * 0.4})`);
				gradient.addColorStop(1, `rgba(40, ${g1}, ${b1}, 0)`);
				context.strokeStyle = gradient;

				let started = false;
				for (let x = -80; x < canvas.width + 80; x += 5) {
					const point = getRibbonPoint(x, ribbon, t, lineIndex, totalLines);
					const jitter = noise(x * 2, t * 200 + lineIndex * 33, ribbon.seed + lineIndex) * 2 * ribbon.chaos;
					const y = point.y + jitter;

					if (!started) {
						context.moveTo(x, y);
						started = true;
					} else {
						context.lineTo(x, y);
					}
				}

				context.shadowColor = `rgba(90, 215, 145, 0.5)`;
				context.shadowBlur = 8;
				context.stroke();
			});

			context.shadowBlur = 0;
		}

		function drawParticles(t: number) {
			particles.forEach((p) => {
				const speedVar = p.speed * (1 + Math.sin(t * 2 + p.phase) * 0.2);
				p.x += speedVar;

				if (p.x > canvas.width + 150) {
					p.x = -150 - Math.random() * 200;
					p.ribbonIndex = Math.floor(Math.random() * ribbons.length);
					p.linePos = Math.random();
				}

				const ribbon = ribbons[p.ribbonIndex];
				const lineIndex = Math.floor(p.linePos * ribbon.lines);
				const point = getRibbonPoint(p.x, ribbon, t, lineIndex, ribbon.lines);

				const wobbleY = Math.sin(t * 5 + p.phase) * p.wobble * 8;
				const y = point.y + wobbleY;

				const pulse = 0.6 + Math.sin(t * 3.5 + p.phase) * 0.4;
				const alpha = p.brightness * pulse * (0.4 + (point.depth + 1) * 0.3);

				context.beginPath();
				context.arc(p.x, y, p.size, 0, Math.PI * 2);
				context.fillStyle = `rgba(150, 240, 190, ${alpha})`;
				context.shadowColor = 'rgba(80, 210, 140, 0.6)';
				context.shadowBlur = 6;
				context.fill();
			});
			context.shadowBlur = 0;
		}

		function animate() {
			context.clearRect(0, 0, canvas.width, canvas.height);

			ribbons.forEach((ribbon, i) => drawRibbon(ribbon, time, i));
			drawParticles(time);

			time += 0.01;
			animationId = requestAnimationFrame(animate);
		}

		animate();

		return () => {
			window.removeEventListener('resize', resize);
		};
	});

	onDestroy(() => {
		if (animationId) {
			cancelAnimationFrame(animationId);
		}
	});
</script>

<canvas bind:this={canvas} class="wavy-canvas" id="wavy-canvas" aria-hidden="true"></canvas>

<style>
	.wavy-canvas {
		position: fixed;
		top: 50%;
		left: 50%;
		width: 140%;
		height: 140%;
		pointer-events: none;
		z-index: -2; /* sit behind page content */
		opacity: 0.6;
		transform: translate(-50%, -50%) rotate(-20deg);
		transform-origin: center center;
	}
</style>
