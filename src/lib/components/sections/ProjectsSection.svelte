<script lang="ts">
	import ProjectCard from '$lib/components/ui/ProjectCard.svelte';
	import { projects as allProjects, getHighlightedProjects } from '$lib/content/projects';

	interface Props {
		showAll?: boolean;
		title?: string;
	}

	let { showAll = false, title = 'Projects' }: Props = $props();
	let projects = $derived(showAll ? allProjects : getHighlightedProjects());
</script>

<section class="mt-32 lg:mt-48 pb-16" id="projects">
	<h2 class="text-5xl font-bold text-white mb-12">{title}</h2>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
