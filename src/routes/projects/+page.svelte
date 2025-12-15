<script lang="ts">
	import ProjectCard from '$lib/components/ui/ProjectCard.svelte';
	import BokehParticles from '$lib/components/effects/BokehParticles.svelte';
	import { projects } from '$lib/content/projects';
</script>

<svelte:head>
	<title>Projects | Niklas Bergh - Full Stack Developer & AI/3D Technical Illustrator</title>
	<meta name="description" content="Explore case studies from Niklas Bergh’s portfolio: AI-driven illustration automation, real-time dashboards, and decision apps built with modern full stack engineering." />
	<!-- Custom background for projects page -->
	<style>
		.layout-bg, .layout-overlay { display: none !important; }
		body {
			background-image: url('/bg2.png') !important;
			background-size: cover !important;
			background-position: center !important;
			background-repeat: no-repeat !important;
			background-attachment: fixed !important;
		}
	</style>
</svelte:head>

<!-- Page-specific animation -->
<BokehParticles />

<section class="pb-16">
	<h1 class="text-5xl font-bold text-white mb-12">Projects</h1>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
