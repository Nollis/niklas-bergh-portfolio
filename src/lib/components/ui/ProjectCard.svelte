<script lang="ts">
	import type { Project } from '$lib/content/projects';
	import GlassCard from './GlassCard.svelte';
	import Tag from './Tag.svelte';

	interface Props {
		project: Project;
	}

	let { project }: Props = $props();

	// Map category to tag variant
	const categoryVariant: Record<string, 'teal' | 'orange'> = {
		ai: 'teal',
		illustration: 'orange',
		'3d': 'teal',
		web: 'orange',
		tools: 'teal'
	};
</script>

<a href="/projects/{project.id}" class="block group">
<GlassCard hover class="p-8">
	<!-- Image placeholder -->
	<div class="w-full h-48 bg-white/5 rounded-lg mb-4 flex items-center justify-center">
		{#if project.image}
			<img src={project.image} alt={project.title} class="w-full h-full object-cover rounded-lg" />
		{:else}
			<span class="text-white/40">Project Image</span>
		{/if}
	</div>

	<!-- Title -->
	<h3 class="text-xl font-bold text-brand-light-green">{project.title}</h3>

	<!-- Summary -->
	<p class="mt-3 text-white/70 text-sm leading-relaxed">
		{project.summary}
	</p>

	<!-- Tags -->
	<div class="mt-4 flex flex-wrap gap-2">
		{#each project.tech.slice(0, 3) as tech, i}
			<Tag variant={i % 2 === 0 ? categoryVariant[project.category] : 'orange'}>
				{tech}
			</Tag>
		{/each}
	</div>

	<!-- Status indicator -->
	{#if project.status === 'in-progress'}
		<div class="mt-4 flex items-center gap-2 text-xs text-brand-cyan">
			<span class="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
			In Progress
		</div>
	{/if}
</GlassCard>
</a>

