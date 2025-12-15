<script lang="ts">
	import GlassCard from '$lib/components/ui/GlassCard.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import CircuitBackground from '$lib/components/effects/CircuitBackground.svelte';

	const highlights = [
		'AI-powered illustration pipeline that cut delivery from days to under four hours while keeping brand consistency.',
		'Real-time ops dashboard with sub-second updates adopted in weekly reviews and exec standups.',
		'Decision app with weighted criteria that improved alignment and shortened approval cycles.'
	];

	const skills = [
		{ title: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS'] },
		{ title: 'Frameworks & Tools', items: ['SvelteKit', 'React/Next.js', 'Node.js', 'Prisma', 'Playwright', 'Jest/Vitest'] },
		{ title: 'Design & Visualization', items: ['Figma', 'SVG/Canvas', 'D3.js', 'Blender', 'Motion prototypes', 'Design systems'] },
		{ title: 'AI / Machine Learning', items: ['OpenAI API', 'Prompt and guardrail design', 'Embeddings', 'Vector search', 'Model evaluation', 'LangChain-style pipelines'] },
		{ title: 'Other relevant', items: ['WebSockets/real-time', 'REST/GraphQL', 'CI/CD', 'CDN asset pipelines', 'Technical documentation', 'Stakeholder workshops'] }
	];

	const workflow = [
		{ title: 'Discovery', detail: 'Clarify the audience, constraints, and success metrics before any build.' },
		{ title: 'System map', detail: 'Diagram data, flows, and failure points to remove ambiguity early.' },
		{ title: 'Prototype', detail: 'Sketch visuals and interactions, then validate with quick experiments.' },
		{ title: 'Build', detail: 'Ship in tested increments with checkpoints, docs, and visual proofs.' },
		{ title: 'Validate and scale', detail: 'Measure outcomes, tighten performance, and automate the boring parts.' }
	];

	const testimonials = [
		{ quote: 'We finally ship visuals at the speed of product.', attribution: 'Design Lead, AI illustration pipeline' },
		{ quote: 'The dashboard became our single source of truth within a week.', attribution: 'Ops Manager, real-time metrics' }
	];

	const galleryCaptions = [
		'AI illustration pipeline: spec-to-SVG flow with automated styling checks and human review.',
		'Real-time dashboard: streaming charts that stay sub-second under load with WebSockets and D3.',
		'Decision app: weighted criteria matrix with explainability tooltips for transparent scoring.',
		'3D/AI concept render: prompt, node graph, and final render showing iterative control.'
	];
</script>

<svelte:head>
	<title>About Niklas Bergh | Technical Illustrator & Full Stack Developer</title>
	<meta name="description" content="Meet Niklas Bergh, a technical illustrator and full stack developer using AI/3D, design, and code to help teams explain intricate products with clarity." />
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

<section class="space-y-10 pb-16">
	<GlassCard variant="rounded" class="p-8 md:p-10">
		<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
			<div class="space-y-3 max-w-3xl">
				<p class="text-sm uppercase tracking-[0.2em] text-brand-cyan">About Niklas Bergh</p>
				<h1 class="text-4xl md:text-5xl font-bold text-white leading-tight">
					I design, code, and illustrate to make complex systems easy to see, trust, and ship.
				</h1>
				<p class="text-slate-300 leading-relaxed text-lg">
					Clear visuals and reliable systems remove friction between ideas and impact. I blend technical illustration, full-stack engineering, and AI/3D so teams can communicate faster and ship with confidence.
				</p>
			</div>
			<Button href="/contact" variant="gradient" size="lg">Work together</Button>
		</div>
	</GlassCard>

	<div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
		<GlassCard variant="rounded" class="lg:col-span-3 p-8 md:p-10 space-y-6">
			<h2 class="text-2xl md:text-3xl font-bold text-white">Why I do this</h2>
			<p class="text-slate-300 leading-relaxed">
				I like turning complex technology into something people can see and act on. My illustration background brings precision and storytelling; my engineering work brings speed, experimentation, and systems thinking. Together they become tools, visuals, and products that keep teams aligned.
			</p>
			<p class="text-slate-300 leading-relaxed">
				I start with the audience and constraints, map the system, sketch flows, validate with data, and then build iteratively with clear checkpoints. Design, data, and code sit at the same table.
			</p>

			<div class="grid md:grid-cols-2 gap-6">
				<div>
					<h3 class="text-xl font-semibold text-white mb-2">Core skills</h3>
					<ul class="space-y-2 text-slate-300">
						<li>Technical illustration and visual storytelling</li>
						<li>Full-stack development for web and tools</li>
						<li>AI and 3D prototyping for faster iteration</li>
					</ul>
				</div>
				<div>
					<h3 class="text-xl font-semibold text-white mb-2">Highlights</h3>
					<ul class="space-y-2 text-slate-300">
						{#each highlights as item}
							<li>• {item}</li>
						{/each}
					</ul>
				</div>
			</div>
		</GlassCard>

		<GlassCard variant="rounded" class="lg:col-span-2 p-8 md:p-10 space-y-6">
			<h2 class="text-2xl md:text-3xl font-bold text-white text-center">Skills / Tools I Use</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
				{#each skills as group}
					<div class="rounded-xl bg-white/5 border border-white/10 p-4 h-full">
						<p class="text-brand-cyan text-xs font-semibold uppercase tracking-wide mb-3">{group.title}</p>
						<ul class="space-y-1 text-slate-200">
							{#each group.items as item}
								<li>{item}</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</GlassCard>
	</div>

	<GlassCard variant="rounded" class="p-8 md:p-10 space-y-6">
		<h2 class="text-2xl md:text-3xl font-bold text-white">How I work</h2>
		<div class="grid md:grid-cols-3 gap-4">
			{#each workflow as step}
				<div class="rounded-xl bg-white/5 border border-white/10 p-4">
					<p class="text-brand-cyan text-sm font-semibold mb-1">{step.title}</p>
					<p class="text-slate-300 text-sm leading-relaxed">{step.detail}</p>
				</div>
			{/each}
		</div>
	</GlassCard>

	<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
		<GlassCard variant="rounded" class="p-8 md:p-10 space-y-4">
			<h2 class="text-2xl font-bold text-white">Testimonials</h2>
			<div class="space-y-4">
				{#each testimonials as testimonial}
					<blockquote class="border-l-4 border-brand-cyan/40 pl-4 text-slate-200 italic leading-relaxed">
						{testimonial.quote}
						<div class="text-sm text-slate-400 mt-2">{testimonial.attribution}</div>
					</blockquote>
				{/each}
			</div>
		</GlassCard>

		<GlassCard variant="rounded" class="p-8 md:p-10 space-y-4">
			<h2 class="text-2xl font-bold text-white">Gallery / Visual Showcase</h2>
			<ul class="space-y-3 text-slate-300 text-sm leading-relaxed">
				{#each galleryCaptions as caption}
					<li class="flex gap-2">
						<span class="text-brand-cyan">•</span>
						<span>{caption}</span>
					</li>
				{/each}
			</ul>
		</GlassCard>
	</div>

	<GlassCard variant="rounded" class="p-8 md:p-10 space-y-4">
		<h2 class="text-2xl md:text-3xl font-bold text-white">Personal note</h2>
		<p class="text-slate-300 leading-relaxed">
			I'm curious about how people learn. I value clarity, momentum, and thoughtful defaults. Outside work you will find me sketching forms, experimenting with 3D tools, or trail running to clear my head.
		</p>
		<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
			<p class="text-slate-200 font-semibold">Ready to collaborate on your next build?</p>
			<Button href="/contact" variant="primary">Let's talk</Button>
		</div>
	</GlassCard>
</section>
