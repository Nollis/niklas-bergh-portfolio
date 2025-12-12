<script lang="ts">
	import '../app.css';
	import SiteHeader from '$lib/components/layout/SiteHeader.svelte';
	import SiteFooter from '$lib/components/layout/SiteFooter.svelte';

	let { children } = $props();
</script>

<!-- Background layers (animations are per-page for better performance) -->
<div class="layout-bg fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat" style="background-image: url('/bg.png');"></div>
<div class="layout-overlay fixed inset-0 -z-10 bg-brand-dark/70"></div>

<!-- Main content container -->
<div class="container mx-auto px-8 lg:px-24 py-8 relative z-10 min-h-screen flex flex-col">
	<SiteHeader />
	
	<main class="flex-grow mt-20 lg:mt-24">
		{@render children()}
	</main>
	
	<SiteFooter />
</div>

