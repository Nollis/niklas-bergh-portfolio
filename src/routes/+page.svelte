<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import FeaturesSection from '$lib/components/sections/FeaturesSection.svelte';
	import ProjectsSection from '$lib/components/sections/ProjectsSection.svelte';
	import WavyLines from '$lib/components/effects/WavyLines.svelte';
</script>

<svelte:head>
	<title>Niklas Bergh - Portfolio</title>
	<meta name="description" content="Technical Illustrator, Full-Stack Developer, AI & 3D Creator" />
</svelte:head>

<!-- Page-specific animation -->
<WavyLines />

<Hero />
<FeaturesSection />
<ProjectsSection title="Featured Projects" />

