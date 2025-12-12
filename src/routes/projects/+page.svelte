<script lang="ts">
	import ProjectCard from '$lib/components/ui/ProjectCard.svelte';
	import BokehParticles from '$lib/components/effects/BokehParticles.svelte';
	import { projects } from '$lib/content/projects';
</script>

<svelte:head>
	<title>Projects - Niklas Bergh</title>
	<meta name="description" content="Explore my portfolio of technical illustration, full-stack development, AI, and 3D creation projects." />
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

