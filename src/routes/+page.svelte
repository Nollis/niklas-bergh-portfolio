<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import FeaturesSection from '$lib/components/sections/FeaturesSection.svelte';
	import ProjectsSection from '$lib/components/sections/ProjectsSection.svelte';
	import WavyLines from '$lib/components/effects/WavyLines.svelte';
</script>

<svelte:head>
	<title>Niklas Bergh | Full Stack Developer, Technical Illustrator, AI/3D Portfolio</title>
	<meta name="description" content="Portfolio of Niklas Bergh - full stack developer and technical illustrator blending code, design, and AI/3D to communicate complex systems and launch polished products." />
</svelte:head>

<!-- Page-specific animation -->
<WavyLines />

<Hero />
<FeaturesSection />
<ProjectsSection title="Featured Projects" />
