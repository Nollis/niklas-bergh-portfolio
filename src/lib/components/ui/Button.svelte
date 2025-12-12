<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		variant?: 'primary' | 'outline' | 'gradient';
		size?: 'default' | 'lg';
		href?: string;
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
		children: Snippet;
	}

	let {
		class: className,
		variant = 'primary',
		size = 'default',
		href,
		type = 'button',
		disabled = false,
		children
	}: Props = $props();

	const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md';

	const variantClasses = {
		primary: 'bg-brand-orange text-white hover:opacity-90',
		outline: 'border-2 border-brand-teal text-brand-light-green hover:bg-brand-teal hover:text-white',
		gradient: 'bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 rounded-full hover:-translate-y-0.5 shadow-lg hover:shadow-glow-orange'
	};

	const sizeClasses = {
		default: 'py-3 px-6',
		lg: 'py-4 px-10'
	};
</script>

{#if href}
	<a
		{href}
		class={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
	>
		{@render children()}
	</a>
{:else}
	<button
		{type}
		{disabled}
		class={cn(baseClasses, variantClasses[variant], sizeClasses[size], disabled && 'opacity-50 cursor-not-allowed', className)}
	>
		{@render children()}
	</button>
{/if}

