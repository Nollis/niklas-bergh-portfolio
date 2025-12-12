<script lang="ts">
	import GlassCard from './GlassCard.svelte';

	interface Props {
		label: string;
		title: string;
		tagline: string;
		description: string;
	}

	let { label, title, tagline, description }: Props = $props();
</script>

<GlassCard class="p-8 h-full flex flex-col">
	<div class="mb-3">
		<span class="text-sm font-medium text-brand-light-green uppercase tracking-wider">{label}</span>
		<h3 class="text-2xl font-bold text-white mt-1">{title}</h3>
	</div>
	<p class="text-brand-cyan font-medium text-sm mb-3">
		{tagline}
	</p>
	<p class="text-white/70 text-sm leading-relaxed flex-grow">
		{description}
	</p>
</GlassCard>

