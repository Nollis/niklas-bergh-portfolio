<script lang="ts">
	import { enhance } from '$app/forms';
	import GlassCard from '$lib/components/ui/GlassCard.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import MoleculeBackground from '$lib/components/effects/MoleculeBackground.svelte';
	import { Mail, Instagram, Youtube, Send } from 'lucide-svelte';

	let formStatus = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');

	const inquiries = [
		'Product demos or technical storytelling',
		'Prototyping and design/development audits',
		'AI or automation ideas for illustration and data workflows',
		'Collaboration on visuals, docs, or real-time dashboards'
	];

	const socialContacts = [
		{ icon: Mail, label: 'Email', value: 'hello@niklasbergh.com', href: 'mailto:hello@niklasbergh.com' },
		{ icon: Instagram, label: 'Instagram', value: '@hellon3', href: 'https://instagram.com/hellon3' },
		{ icon: Youtube, label: 'YouTube', value: '@hellon3', href: 'https://youtube.com/@hellon3' }
	];
</script>

<svelte:head>
	<title>Contact Niklas Bergh | Full Stack Developer & Technical Illustrator</title>
	<meta name="description" content="Get in touch with Niklas Bergh—full stack developer, technical illustrator, and AI/3D creator—to discuss projects, collaborations, or technical storytelling needs." />
	<!-- Custom background for contact page -->
	<style>
		.layout-bg, .layout-overlay { display: none !important; }
		body {
			background-image: url('/bg3.png') !important;
			background-size: cover !important;
			background-position: center !important;
			background-repeat: no-repeat !important;
			background-attachment: fixed !important;
		}
	</style>
</svelte:head>

<!-- Molecule Background on top of body bg3.png -->
<MoleculeBackground />

<div class="flex flex-col lg:flex-row lg:items-start lg:justify-center gap-8">
	<!-- Contact Form Section -->
	<section class="w-full max-w-3xl space-y-4">
		<h1 class="text-5xl sm:text-6xl font-bold text-white">Contact</h1>
		<p class="text-slate-300 text-lg max-w-2xl">
			Let's talk about your next build, visual story, or product challenge. Share a bit of context and I will reply within one to two business days.
		</p>

		<GlassCard variant="rounded" class="p-8 space-y-8">
			<div class="grid md:grid-cols-2 gap-6">
				<div>
					<h2 class="text-xl font-semibold text-white mb-2">Inquiries welcome</h2>
					<ul class="space-y-2 text-slate-300 text-sm">
						{#each inquiries as inquiry}
							<li class="flex gap-2">
								<span class="text-brand-cyan">•</span>
								<span>{inquiry}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<h2 class="text-xl font-semibold text-white mb-2">What to include</h2>
					<ul class="space-y-2 text-slate-300 text-sm">
						<li class="flex gap-2"><span class="text-brand-cyan">•</span><span>Goals and timeline</span></li>
						<li class="flex gap-2"><span class="text-brand-cyan">•</span><span>Links to briefs, repos, or references</span></li>
						<li class="flex gap-2"><span class="text-brand-cyan">•</span><span>Decision makers and stakeholders</span></li>
						<li class="flex gap-2"><span class="text-brand-cyan">•</span><span>Success criteria and constraints</span></li>
					</ul>
				</div>
			</div>

			<form
				method="POST"
				use:enhance={() => {
					formStatus = 'submitting';
					return async ({ result }) => {
						if (result.type === 'success') {
							formStatus = 'success';
						} else {
							formStatus = 'error';
						}
					};
				}}
			>
				<div class="space-y-6">
					<!-- Name and Email -->
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
						<div>
							<label for="name" class="sr-only">Name</label>
							<input
								type="text"
								id="name"
								name="name"
								placeholder="Name"
								required
								class="w-full glass-input"
							/>
						</div>
						<div>
							<label for="email" class="sr-only">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Email"
								required
								class="w-full glass-input"
							/>
						</div>
					</div>

					<!-- Subject -->
					<div>
						<label for="subject" class="sr-only">Subject</label>
						<input
							type="text"
							id="subject"
							name="subject"
							placeholder="Project or inquiry"
							class="w-full glass-input"
						/>
					</div>

					<!-- Message -->
					<div>
						<label for="message" class="sr-only">Message</label>
						<textarea
							id="message"
							name="message"
							placeholder="Share context, goals, timeline, and any links"
							rows="5"
							required
							class="w-full glass-input resize-none"
						></textarea>
					</div>

					<!-- Status Messages -->
					{#if formStatus === 'success'}
						<p class="text-brand-cyan text-sm">Thank you! Your message has been sent.</p>
					{:else if formStatus === 'error'}
						<p class="text-red-400 text-sm">Something went wrong. Please try again.</p>
					{/if}

					<!-- Buttons -->
					<div class="flex flex-col sm:flex-row items-center gap-4 pt-2">
						<Button type="submit" variant="gradient" class="w-full sm:w-auto" disabled={formStatus === 'submitting'}>
							{#if formStatus === 'submitting'}
								Sending...
							{:else}
								<Send class="w-4 h-4 mr-2" />
								Send message
							{/if}
						</Button>
						<p class="text-slate-400 text-sm">Prefer email? Reach out directly via the links on the right.</p>
					</div>
				</div>
			</form>

			<p class="text-slate-200 font-medium">Let's build something together.</p>
		</GlassCard>
	</section>

	<!-- Social Info Section -->
	<aside class="w-full lg:w-auto lg:pl-8 flex justify-center lg:justify-start lg:pt-24">
		<GlassCard variant="rounded" class="p-6 w-full max-w-xs space-y-4">
			<h2 class="text-lg font-semibold text-white">Alternative contact</h2>
			<ul class="space-y-3 text-sm">
				{#each socialContacts as contact}
					<li>
						<a
							href={contact.href}
							class="flex items-center gap-3 text-white hover:text-brand-cyan transition-colors"
							target="_blank"
							rel="noopener noreferrer"
						>
							<contact.icon class="w-4 h-4 text-brand-light-green" />
							<span>{contact.value}</span>
						</a>
					</li>
				{/each}
			</ul>
		</GlassCard>
	</aside>
</div>
