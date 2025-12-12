<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let container: HTMLDivElement;

	// Green color palette matching the site theme
	const colors = [
		'#25d0ab', // brand-cyan
		'#98e594', // brand-green
		'#a6c8b5', // brand-light-green
		'#4db0a2', // brand-teal
	];

	onMount(() => {
		if (!browser || !container) return;

		const particleCount = 45;

		// Create particles
		for (let i = 0; i < particleCount; i++) {
			const particle = document.createElement('div');
			particle.className = 'bokeh-particle';

			// Random size between 4px and 12px (smaller)
			const size = Math.random() * 8 + 4;
			particle.style.width = size + 'px';
			particle.style.height = size + 'px';

			// Random starting position
			particle.style.left = Math.random() * 100 + '%';
			particle.style.top = Math.random() * 100 + '%';

			// Random animation duration (15-30 seconds)
			const duration = Math.random() * 15 + 15;
			particle.style.animationDuration = duration + 's';

			// Random delay
			particle.style.animationDelay = Math.random() * 8 + 's';

			// Random opacity (0.4 - 0.8) - more visible
			particle.style.opacity = (Math.random() * 0.4 + 0.4).toString();

			// Random green color
			const color = colors[Math.floor(Math.random() * colors.length)];
			particle.style.setProperty('--particle-color', color);

			container.appendChild(particle);
		}

		// Mouse interaction
		const handleMouseMove = (e: MouseEvent) => {
			const mouseX = e.clientX / window.innerWidth;
			const mouseY = e.clientY / window.innerHeight;

			const particles = container.querySelectorAll('.bokeh-particle');
			particles.forEach((particle) => {
				const el = particle as HTMLElement;
				const rect = el.getBoundingClientRect();
				const particleX = rect.left / window.innerWidth;
				const particleY = rect.top / window.innerHeight;

				const dx = mouseX - particleX;
				const dy = mouseY - particleY;
				const distance = Math.sqrt(dx * dx + dy * dy);

				if (distance < 0.3) {
					const force = (0.3 - distance) / 0.3;
					const moveX = dx * force * 10;
					const moveY = dy * force * 10;

					el.style.transform = `translate(${moveX}px, ${moveY}px)`;
					el.style.transition = 'transform 0.3s ease-out';
				} else {
					el.style.transition = 'transform 0.5s ease-out';
					el.style.transform = '';
				}
			});
		};

		document.addEventListener('mousemove', handleMouseMove);

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	});
</script>

<div bind:this={container} class="bokeh-container" aria-hidden="true"></div>

<style>
	.bokeh-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: -9;
		overflow: hidden;
	}

	:global(.bokeh-particle) {
		position: absolute;
		border-radius: 50%;
		background: radial-gradient(
			circle,
			var(--particle-color, #25d0ab) 0%,
			color-mix(in srgb, var(--particle-color, #25d0ab) 60%, transparent) 50%,
			transparent 100%
		);
		filter: blur(1px);
		box-shadow:
			0 0 6px var(--particle-color, #25d0ab),
			0 0 12px color-mix(in srgb, var(--particle-color, #25d0ab) 50%, transparent);
		animation: float linear infinite;
	}

	@keyframes float {
		0% {
			transform: translate(0, 0) rotate(0deg);
		}
		25% {
			transform: translate(15px, -15px) rotate(90deg);
		}
		50% {
			transform: translate(-10px, -30px) rotate(180deg);
		}
		75% {
			transform: translate(-20px, -15px) rotate(270deg);
		}
		100% {
			transform: translate(0, 0) rotate(360deg);
		}
	}
</style>

