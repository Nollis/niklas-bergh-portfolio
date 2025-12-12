<script lang="ts">
	import { navigation, socialLinks } from '$lib/config/theme';
	import { Mail, Instagram, Youtube } from 'lucide-svelte';

	const iconMap: Record<string, typeof Mail> = {
		mail: Mail,
		instagram: Instagram,
		youtube: Youtube
	};
</script>

<footer class="w-full py-8 mt-16 border-t border-white/10">
	<div class="flex flex-col sm:flex-row justify-between items-center gap-6 text-slate-400">
		<!-- Logo -->
		<a href="/" class="text-2xl font-bold text-white hover:text-brand-teal transition-colors">
			N3
		</a>

		<!-- Navigation Links -->
		<nav>
			<ul class="flex items-center space-x-6">
				{#each navigation as { label, href }}
					<li>
						<a
							{href}
							class="hover:text-brand-cyan transition-colors duration-300 text-sm"
						>
							{label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<!-- Social Links -->
		<div class="flex items-center space-x-4">
			{#each socialLinks as { label, href, icon }}
				{@const IconComponent = iconMap[icon]}
				<a
					{href}
					aria-label={label}
					class="hover:text-white transition-colors duration-300"
					target="_blank"
					rel="noopener noreferrer"
				>
					{#if IconComponent}
						<IconComponent class="w-5 h-5" />
					{/if}
				</a>
			{/each}
		</div>
	</div>

	<!-- Copyright -->
	<p class="text-center text-slate-500 text-xs mt-6">
		© {new Date().getFullYear()} Niklas Bergh. All rights reserved.
	</p>
</footer>

