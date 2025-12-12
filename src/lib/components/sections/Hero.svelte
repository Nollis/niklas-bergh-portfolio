<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import GlassCard from '$lib/components/ui/GlassCard.svelte';
</script>

<section class="flex flex-col lg:flex-row justify-between items-center gap-16">
	<!-- Hero text content -->
	<div>
		<h1 class="text-6xl md:text-8xl font-bold text-white leading-tight">
			Niklas Bergh
		</h1>
		<p class="mt-4 text-2xl text-white/80 tracking-wide font-light">
			Technical Illustrator • Full-Stack Developer • AI & 3D Creator
		</p>

		<!-- Action buttons -->
		<div class="mt-12 flex items-center space-x-4">
			<Button href="/projects" variant="primary" size="lg">
				View projects
			</Button>
			<Button href="/contact" variant="outline" size="lg">
				Get in touch
			</Button>
		</div>
	</div>

	<!-- Hero visualization/chart area -->
	<GlassCard class="flex justify-center items-center w-full max-w-[500px] h-[300px]">
		<span class="text-white/40">Chart Area</span>
	</GlassCard>
</section>

