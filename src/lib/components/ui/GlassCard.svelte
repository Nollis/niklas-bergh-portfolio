<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		variant?: 'default' | 'rounded';
		hover?: boolean;
		children: Snippet;
	}

	let { class: className, variant = 'default', hover = false, children }: Props = $props();
</script>

<div
	class={cn(
		'bg-white/5 backdrop-blur-[10px] border-2 border-brand-teal/40',
		variant === 'default' && 'rounded-lg',
		variant === 'rounded' && 'rounded-3xl border',
		hover && 'hover:scale-105 transition-transform duration-300',
		className
	)}
>
	{@render children()}
</div>

