<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		variant?: 'teal' | 'orange';
		children: Snippet;
	}

	let { class: className, variant = 'teal', children }: Props = $props();

	const variantClasses = {
		teal: 'bg-brand-teal/20 text-brand-teal',
		orange: 'bg-brand-orange/20 text-brand-orange'
	};
</script>

<span class={cn('px-3 py-1 text-xs rounded-full', variantClasses[variant], className)}>
	{@render children()}
</span>

