<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import GlassCard from '$lib/components/ui/GlassCard.svelte';
</script>

<section class="flex flex-col lg:flex-row justify-between items-center gap-16">
	<!-- Hero text content -->
	<div>
		<h1 class="text-5xl md:text-7xl font-bold text-white leading-tight">
			Ship products people grasp on day one.
		</h1>
		<p class="mt-4 text-xl md:text-2xl text-white/80 tracking-wide font-light max-w-3xl">
			Technical illustrator, full-stack developer, and AI/3D creator who translates hard tech into clear visuals and reliable builds teams can trust.
		</p>

		<!-- Action buttons -->
		<div class="mt-12 flex items-center space-x-4">
			<Button href="/projects" variant="primary" size="lg">
				Explore Featured Work
			</Button>
			<Button href="#projects" variant="outline" size="lg">
				Watch Product Demos
			</Button>
		</div>
	</div>

	<!-- Hero visualization/chart area -->
	<GlassCard class="flex justify-center items-center w-full max-w-[500px] h-[300px]">
		<span class="text-white/40">Chart Area</span>
	</GlassCard>
</section>
