<script lang="ts">
	import GlassCard from '$lib/components/ui/GlassCard.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import CircuitBackground from '$lib/components/effects/CircuitBackground.svelte';

	const skills = [
		{ name: 'Technical Illustration', icon: '🎨' },
		{ name: 'Full-Stack Development', icon: '💻' },
		{ name: 'AI & Machine Learning', icon: '🤖' },
		{ name: '3D Modeling & Rendering', icon: '🎮' },
		{ name: 'UI/UX Design', icon: '✨' },
		{ name: 'Data Visualization', icon: '📊' },
		{ name: 'Creative Coding', icon: '🎯' },
		{ name: 'Generative Art', icon: '🌿' }
	];
</script>

<svelte:head>
	<title>About - Niklas Bergh</title>
	<meta name="description" content="Learn more about Niklas Bergh - Technical Illustrator, Full-Stack Developer, AI & 3D Creator." />
	<!-- Custom background for about page -->
	<style>
		.layout-bg, .layout-overlay { display: none !important; }
		body {
			background-image: url('/bg4.png') !important;
			background-size: cover !important;
			background-position: center !important;
			background-repeat: no-repeat !important;
			background-attachment: fixed !important;
		}
	</style>
</svelte:head>

<!-- Animated circuit effect on top of bg4.png -->
<CircuitBackground />

<!-- About Me Header Card -->
<div class="flex justify-center mb-12">
	<GlassCard variant="rounded" class="flex flex-col items-center p-8 max-w-sm text-center">
		<!-- Profile Picture Placeholder -->
		<div class="relative mb-6">
			<div class="w-32 h-32 rounded-full bg-gradient-to-br from-brand-teal to-brand-light-green flex items-center justify-center text-4xl">
				👤
			</div>
			<div class="absolute inset-0 rounded-full border-2 border-brand-cyan/50 animate-pulse"></div>
		</div>
		<h1 class="text-3xl font-bold text-white cyan-underline">About Me</h1>
	</GlassCard>
</div>

<!-- Main Content Grid -->
<div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
	<!-- Who I Am Section -->
	<GlassCard variant="rounded" class="lg:col-span-3 p-8 md:p-10">
		<h2 class="text-3xl font-bold text-white mb-6">Who I Am</h2>
		<div class="space-y-5 text-slate-300 text-base leading-relaxed">
			<p>
				I'm a technical creator who lives where engineering, illustration, and AI meet. For the past two decades I've moved between worlds—3D modeling, technical drawing, full-stack development, generative AI, data pipelines—and shaped them into tools, visuals, and products that make complex things easy to understand.
			</p>
			<p>
				My background in technical illustration taught me precision and clarity. My work in software and AI taught me speed, experimentation, and systems thinking. I combine both: hands-on craft with modern computation.
			</p>
			<p>
				I'm constantly exploring new ways to use AI, 3D, and real-time graphics to solve practical problems—whether that's extracting golf swing biomechanics, redesigning legacy systems, building interactive illustration tools, or prototyping new product ideas just to see where they go.
			</p>
			<p>
				Nature is a big part of how I reset and think. Scandinavian forests, patterns, light, textures—those inspire the softness and calmness I try to bring into otherwise highly technical projects. The result is a design style that's clean, natural, and quietly futuristic.
			</p>
			<p>
				At heart, I'm a builder. Give me a challenge, a messy dataset, a broken workflow, or a rough idea—and I'll turn it into something structured, visual, and usable.
			</p>
		</div>
	</GlassCard>

	<!-- Skills & Expertise Section -->
	<GlassCard variant="rounded" class="lg:col-span-2 p-8 md:p-10">
		<h2 class="text-3xl font-bold text-brand-cyan mb-8 text-center cyan-underline">Skills & Expertise</h2>
		
		<!-- Skills Grid -->
		<div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-6 text-center text-sm">
			{#each skills as skill}
				<div class="flex flex-col items-center space-y-2">
					<span class="text-4xl">{skill.icon}</span>
					<span class="text-slate-300">{skill.name}</span>
				</div>
			{/each}
		</div>

		<!-- View Portfolio Button -->
		<div class="mt-10 text-center">
			<Button href="/projects" variant="gradient">
				View Portfolio
			</Button>
		</div>
	</GlassCard>
</div>

