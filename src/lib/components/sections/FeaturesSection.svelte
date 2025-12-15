<script lang="ts">
	import FeatureCard from '$lib/components/ui/FeatureCard.svelte';

	const features = [
		{
			label: 'Hybrid Maker',
			title: 'Technical Creator',
			tagline: 'Bridging design, code, and AI for clarity.',
			description: 'I blend hands-on illustration with engineering and AI tooling to turn complex ideas into intuitive visuals, apps, and systems.'
		},
		{
			label: 'Systems Thinker',
			title: 'Fullstack + Workflow Engineer',
			tagline: 'Designing end-to-end systems that connect teams.',
			description: 'From data models and real-time layers to production-ready UI, I build flows that hold up under real constraints.'
		},
		{
			label: 'Experiment-Forward',
			title: 'Rapid Prototyper',
			tagline: 'Test early and ship with confidence.',
			description: 'New tech, 3D rigs, data pipelines, and UX patterns are prototyped fast, validated with metrics, and hardened for launch.'
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
