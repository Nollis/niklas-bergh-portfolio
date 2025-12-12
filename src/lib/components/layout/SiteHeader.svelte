<script lang="ts">
	import { page } from '$app/stores';
	import { navigation } from '$lib/config/theme';

	// Determine if a link is active based on current route
	function isActive(href: string): boolean {
		const currentPath = $page.url.pathname;
		if (href === '/') {
			return currentPath === '/';
		}
		return currentPath.startsWith(href);
	}
</script>

<header class="flex justify-between items-center text-white/80 py-6">
	<!-- Logo -->
	<div>
		<a href="/" class="text-4xl font-bold tracking-wider text-white hover:text-brand-teal transition-colors">
			N3
		</a>
	</div>

	<!-- Navigation -->
	<nav>
		<ul class="flex items-center space-x-8 text-sm font-medium">
			{#each navigation as { label, href }}
				<li>
					<a
						{href}
						class={isActive(href)
							? 'nav-link-active'
							: 'hover:text-white transition-colors duration-300'}
					>
						{label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

