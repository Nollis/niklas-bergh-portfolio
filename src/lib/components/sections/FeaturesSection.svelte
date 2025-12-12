<script lang="ts">
	import FeatureCard from '$lib/components/ui/FeatureCard.svelte';

	const features = [
		{
			label: 'Hybrid Maker',
			title: 'Technical Creator',
			tagline: 'Bridging deep technical illustration, modern web development, and AI tooling.',
			description: 'I blend hands-on craftsmanship with next-gen digital workflows to turn complex ideas into intuitive visuals, apps, and systems.'
		},
		{
			label: 'Systems Thinker',
			title: 'Fullstack + Workflow Engineer',
			tagline: 'I design end-to-end systems that actually work together.',
			description: 'From 3D pipelines and AI pose estimation to custom apps and WordPress rebuilds, I connect the dots and build solutions that hold up in the real world.'
		},
		{
			label: 'Experiment-Forward',
			title: 'Rapid Prototyper',
			tagline: 'I move fast, test early, and iterate relentlessly.',
			description: 'Exploring new tech—AI models, 3D rigs, data pipelines, UX patterns—is part of the creative process. Everything is an experiment until it becomes a tool.'
		}
	];
</script>

<section class="mt-32 lg:mt-48 pb-16" id="features">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each features as feature}
			<FeatureCard 
				label={feature.label} 
				title={feature.title} 
				tagline={feature.tagline}
				description={feature.description} 
			/>
		{/each}
	</div>
</section>

