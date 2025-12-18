<script lang="ts">
	import FeatureCard from '$lib/components/ui/FeatureCard.svelte';

	const features = [
		{
			label: 'Hybrid Maker',
			title: 'Technical Creator',
			tagline: 'Visual clarity that speeds decisions.',
			description: 'Bring complex ideas to life with illustration plus engineering so teams align faster.'
		},
		{
			label: 'Systems Thinker',
			title: 'Fullstack + Workflow Engineer',
			tagline: 'Systems users trust, end to end.',
			description: 'Build scalable flows from data models and real-time layers to production-grade UX.'
		},
		{
			label: 'Experiment-Forward',
			title: 'Rapid Prototyper',
			tagline: 'Test early, ship with confidence.',
			description: 'Deliver shippable prototypes that validate direction before big investments.'
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
