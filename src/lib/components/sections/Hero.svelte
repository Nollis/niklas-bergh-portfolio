<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import GlassCard from '$lib/components/ui/GlassCard.svelte';
</script>

<section class="flex flex-col lg:flex-row justify-between items-center gap-16">
	<!-- Hero text content -->
	<div>
		<h1 class="text-5xl md:text-7xl font-bold text-white leading-tight">
			Designing, coding, and visualizing complex systems with AI precision.
		</h1>
		<p class="mt-4 text-xl md:text-2xl text-white/80 tracking-wide font-light max-w-3xl">
			I'm Niklas Bergh — technical illustrator, full-stack developer, and 3D/AI creator — helping teams explain intricate products with clear visuals and robust builds.
		</p>

		<!-- Action buttons -->
		<div class="mt-12 flex items-center space-x-4">
			<Button href="/projects" variant="primary" size="lg">
				View Projects
			</Button>
			<Button href="#projects" variant="outline" size="lg">
				See Demos
			</Button>
		</div>
	</div>

	<!-- Hero visualization/chart area -->
	<GlassCard class="flex justify-center items-center w-full max-w-[500px] h-[300px]">
		<span class="text-white/40">Chart Area</span>
	</GlassCard>
</section>
