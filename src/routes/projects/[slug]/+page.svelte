<script lang="ts">
	import GlassCard from '$lib/components/ui/GlassCard.svelte';
	import BokehParticles from '$lib/components/effects/BokehParticles.svelte';
	import { ArrowLeft, ArrowRight, ExternalLink, Calendar, User, Briefcase, Package, CheckCircle } from 'lucide-svelte';

	let { data } = $props();
	const project = $derived(data.project);
	const prevProject = $derived(data.prevProject);
	const nextProject = $derived(data.nextProject);

	const categoryLabels: Record<string, string> = {
		ai: 'AI & Machine Learning',
		illustration: 'Technical Illustration',
		'3d': '3D & Visualization',
		web: 'Web Development',
		tools: 'Tools & Automation'
	};

	const statusColors: Record<string, string> = {
		completed: 'bg-brand-cyan',
		'in-progress': 'bg-brand-orange',
		planned: 'bg-brand-light-green'
	};

	const problem = $derived(project.problem ?? project.challenge);
	const hasResults = $derived(Array.isArray(project.results) && project.results.length > 0);
</script>

<svelte:head>
	<title>{project.title} - Niklas Bergh</title>
	<meta name="description" content={project.summary} />
	<!-- Custom background for project detail page -->
	<style>
		.layout-bg, .layout-overlay { display: none !important; }
		body {
			background-image: url('/bg2.avif') !important;
			background-size: cover !important;
			background-position: center !important;
			background-repeat: no-repeat !important;
			background-attachment: fixed !important;
		}
	</style>
</svelte:head>

<!-- Page-specific animation -->
<BokehParticles />

<article class="pb-16">
	<!-- Back Link -->
	<a 
		href="/projects" 
		class="inline-flex items-center gap-2 text-slate-400 hover:text-brand-cyan transition-colors mb-8 group"
	>
		<ArrowLeft class="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
		<span>Back to Projects</span>
	</a>

	<!-- Hero Section -->
	<header class="mb-16 space-y-8">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
			<!-- Left: Title & Description -->
			<div class="lg:col-span-7 space-y-6">
				<!-- Category Badge -->
				<div class="flex items-center gap-2">
					<span class={`w-2 h-2 rounded-full ${statusColors[project.status]} animate-pulse`}></span>
					<span class="text-sm font-medium text-brand-cyan uppercase tracking-wider">
						{categoryLabels[project.category]}
					</span>
				</div>

				<!-- Title -->
				<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
					{project.title}
				</h1>

				<!-- Summary -->
				<p class="text-xl text-slate-300 leading-relaxed">
					{project.summary}
				</p>

				<!-- Tech Tags -->
				<div class="flex flex-wrap gap-2 pt-2">
					{#each project.tech as tech}
						<span class="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300 backdrop-blur-sm">
							{tech}
						</span>
					{/each}
				</div>
			</div>

			<!-- Right: Meta Info -->
			<div class="lg:col-span-5 flex flex-col justify-end">
				<GlassCard variant="rounded" class="p-6">
					<div class="grid grid-cols-2 gap-6 text-sm">
						{#if project.role}
							<div class="flex items-start gap-3">
								<User class="w-4 h-4 text-brand-cyan mt-0.5" />
								<div>
									<p class="text-slate-500 uppercase text-[10px] tracking-widest mb-1">Role</p>
									<p class="text-white font-medium">{project.role}</p>
								</div>
							</div>
						{/if}
						{#if project.timeline}
							<div class="flex items-start gap-3">
								<Calendar class="w-4 h-4 text-brand-cyan mt-0.5" />
								<div>
									<p class="text-slate-500 uppercase text-[10px] tracking-widest mb-1">Timeline</p>
									<p class="text-white font-medium">{project.timeline}</p>
								</div>
							</div>
						{/if}
						{#if project.client}
							<div class="flex items-start gap-3">
								<Briefcase class="w-4 h-4 text-brand-cyan mt-0.5" />
								<div>
									<p class="text-slate-500 uppercase text-[10px] tracking-widest mb-1">Client</p>
									<p class="text-white font-medium">{project.client}</p>
								</div>
							</div>
						{/if}
						{#if project.output}
							<div class="flex items-start gap-3">
								<Package class="w-4 h-4 text-brand-cyan mt-0.5" />
								<div>
									<p class="text-slate-500 uppercase text-[10px] tracking-widest mb-1">Output</p>
									<p class="text-white font-medium">{project.output}</p>
								</div>
							</div>
						{/if}
					</div>

					{#if project.link && project.link !== '#'}
						<div class="mt-6 pt-6 border-t border-white/10">
							<a 
								href={project.link} 
								target="_blank" 
								rel="noopener noreferrer"
								class="inline-flex items-center gap-2 text-brand-cyan font-bold hover:gap-3 transition-all"
							>
								<span>Visit Live Project</span>
								<ExternalLink class="w-4 h-4" />
							</a>
						</div>
					{/if}
				</GlassCard>
			</div>
		</div>

		<!-- Hero Image Placeholder -->
		{#if project.heroImage}
			<div class="mt-12 rounded-2xl overflow-hidden aspect-[21/9] w-full border border-white/10 relative group">
				<div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 pointer-events-none"></div>
				<img 
					src={project.heroImage} 
					alt={project.title}
					class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
				/>
			</div>
		{:else}
			<div class="mt-12 rounded-2xl overflow-hidden aspect-[21/9] w-full border border-white/10 bg-gradient-to-br from-brand-dark to-brand-teal/20 flex items-center justify-center">
				<span class="text-2xl text-white/40">Project visual coming soon</span>
			</div>
		{/if}
	</header>

	<!-- Main Content -->
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
		<!-- Sidebar -->
		<aside class="hidden lg:block lg:col-span-3">
			<div class="sticky top-32 space-y-6">
				<!-- Table of Contents -->
				<nav class="space-y-1 border-l border-white/20 ml-2">
					{#if project.overview}
						<a href="#overview" class="block pl-4 py-2 text-sm text-slate-400 hover:text-brand-cyan transition-colors border-l-2 border-transparent hover:border-brand-cyan -ml-[1px]">
							Overview
						</a>
					{/if}
					{#if problem}
						<a href="#problem" class="block pl-4 py-2 text-sm text-slate-400 hover:text-brand-cyan transition-colors border-l-2 border-transparent hover:border-brand-cyan -ml-[1px]">
							Problem
						</a>
					{/if}
					{#if project.solution}
						<a href="#solution" class="block pl-4 py-2 text-sm text-slate-400 hover:text-brand-cyan transition-colors border-l-2 border-transparent hover:border-brand-cyan -ml-[1px]">
							Solution
						</a>
					{/if}
					{#if hasResults}
						<a href="#results" class="block pl-4 py-2 text-sm text-slate-400 hover:text-brand-cyan transition-colors border-l-2 border-transparent hover:border-brand-cyan -ml-[1px]">
							Results
						</a>
					{/if}
					{#if project.description}
						<a href="#details" class="block pl-4 py-2 text-sm text-slate-400 hover:text-brand-cyan transition-colors border-l-2 border-transparent hover:border-brand-cyan -ml-[1px]">
							Project Details
						</a>
					{/if}
					{#if project.galleryCaptions?.length}
						<a href="#gallery" class="block pl-4 py-2 text-sm text-slate-400 hover:text-brand-cyan transition-colors border-l-2 border-transparent hover:border-brand-cyan -ml-[1px]">
							Gallery Notes
						</a>
					{/if}
					<a href="#tech" class="block pl-4 py-2 text-sm text-slate-400 hover:text-brand-cyan transition-colors border-l-2 border-transparent hover:border-brand-cyan -ml-[1px]">
						Technology Stack
					</a>
				</nav>

				<!-- Year Badge -->
				<GlassCard variant="rounded" class="p-4 text-center">
					<p class="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Year</p>
					<p class="text-2xl font-bold text-brand-cyan">{project.year}</p>
				</GlassCard>
			</div>
		</aside>

		<!-- Content Area -->
		<div class="lg:col-span-9 space-y-14">
			{#if project.overview}
				<section id="overview">
					<GlassCard variant="rounded" class="p-8 md:p-10">
						<h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Overview</h2>
						<p class="text-slate-300 leading-relaxed text-lg">{project.overview}</p>
					</GlassCard>
				</section>
			{/if}

			{#if problem}
				<section id="problem">
					<GlassCard variant="rounded" class="p-8 md:p-10 space-y-4">
						<h2 class="text-2xl md:text-3xl font-bold text-white">Problem</h2>
						<p class="text-slate-300 leading-relaxed">{problem}</p>
					</GlassCard>
				</section>
			{/if}

			{#if project.solution}
				<section id="solution">
					<GlassCard variant="rounded" class="p-8 md:p-10 space-y-4">
						<h2 class="text-2xl md:text-3xl font-bold text-white">My Solution</h2>
						<p class="text-slate-300 leading-relaxed">{project.solution}</p>
					</GlassCard>
				</section>
			{/if}

			{#if hasResults}
				<section id="results">
					<GlassCard variant="rounded" class="p-8 md:p-10 space-y-4">
						<h2 class="text-2xl md:text-3xl font-bold text-white">Results</h2>
						<ul class="space-y-2 text-slate-200">
							{#each project.results as result}
								<li class="flex gap-3 items-start">
									<CheckCircle class="w-4 h-4 text-brand-cyan mt-0.5" />
									<span class="leading-relaxed">{result}</span>
								</li>
							{/each}
						</ul>
					</GlassCard>
				</section>
			{/if}

			{#if project.description}
				<section id="details">
					<h3 class="text-2xl font-bold text-white mb-3">Project Details</h3>
					<p class="text-slate-300 leading-relaxed text-lg">
						{project.description}
					</p>
				</section>
			{/if}

			{#if project.galleryCaptions?.length}
				<section id="gallery">
					<h3 class="text-2xl font-bold text-white mb-4">Gallery / Visual Notes</h3>
					<ul class="space-y-3 text-slate-300 text-base leading-relaxed">
						{#each project.galleryCaptions as caption}
							<li class="flex gap-2">
								<span class="text-brand-cyan">*</span>
								<span>{caption}</span>
							</li>
						{/each}
					</ul>
				</section>
			{/if}

			<!-- Technology Stack -->
			<section id="tech">
				<h3 class="text-2xl font-bold text-white mb-6">Technology Stack</h3>
				<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
					{#each project.tech as tech}
						<GlassCard variant="rounded" class="p-4 text-center hover:border-brand-cyan/40 transition-colors group">
							<div class="w-10 h-10 rounded-lg bg-brand-cyan/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-cyan/20 transition-colors">
								<span class="text-brand-cyan text-lg">*</span>
							</div>
							<p class="text-white font-medium text-sm">{tech}</p>
						</GlassCard>
					{/each}
				</div>
			</section>

			<!-- Project Navigation -->
			<nav class="grid md:grid-cols-2 gap-6 pt-12 border-t border-white/10">
				{#if prevProject}
					<a 
						href="/projects/{prevProject.id}"
						class="group p-6 rounded-xl border border-white/10 bg-white/5 hover:border-brand-cyan/30 transition-all"
					>
						<p class="text-xs uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-2">
							<ArrowLeft class="w-3 h-3" />
							Previous Project
						</p>
						<h4 class="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">
							{prevProject.title}
						</h4>
					</a>
				{:else}
					<div></div>
				{/if}

				{#if nextProject}
					<a 
						href="/projects/{nextProject.id}"
						class="group p-6 rounded-xl border border-white/10 bg-white/5 hover:border-brand-cyan/30 transition-all text-right"
					>
						<p class="text-xs uppercase tracking-wider text-slate-500 mb-2 flex items-center justify-end gap-2">
							Next Project
							<ArrowRight class="w-3 h-3" />
						</p>
						<h4 class="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">
							{nextProject.title}
						</h4>
					</a>
				{/if}
			</nav>
		</div>
	</div>
</article>


