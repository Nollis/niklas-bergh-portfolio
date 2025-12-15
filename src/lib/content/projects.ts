export interface Project {
	id: string;
	title: string;
	category: 'ai' | 'illustration' | '3d' | 'web' | 'tools';
	summary: string;
	overview?: string;
	description?: string;
	challenge?: string;
	problem?: string;
	solution?: string;
	results?: string[];
	tech: string[];
	status: 'completed' | 'in-progress' | 'planned';
	highlighted: boolean;
	year: number;
	link?: string;
	image?: string;
	heroImage?: string;
	galleryImages?: string[];
	galleryCaptions?: string[];
	role?: string;
	timeline?: string;
	client?: string;
	output?: string;
	shortForm?: string;
	longForm?: string;
}

export const projects: Project[] = [
	{
		id: 'ai-illustration-automation',
		title: 'AI-Powered Illustration Automation',
		category: 'ai',
		summary: 'Manual illustration requests were bottlenecking launches; I built an AI-driven pipeline that turns specs into vector-ready assets with validation and handoff.',
		overview: 'Built an AI-driven pipeline that turns product specs into brand-accurate, vector-ready illustrations in hours instead of days.',
		problem: 'Product launches stalled because illustration requests queued for days and style drifted across teams.',
		solution: 'Mapped the illustration taxonomy and style rules into prompt templates and guardrails. Built a service that ingests specs, generates drafts via OpenAI, converts to clean SVG assets, and enforces palettes and line weights with schema checks. Added a review UI so designers can approve or override and auto-publish to the design system/CDN.',
		results: [
			'Cut illustration delivery time from about 3 days to under 4 hours.',
			'Fewer than 5% of assets needed manual fixes after rollout.',
			'Design lead: "We finally ship visuals at the speed of product."'
		],
		tech: ['TypeScript', 'Node.js', 'Python', 'OpenAI API', 'SVG/Canvas', 'React'],
		status: 'completed',
		highlighted: true,
		year: 2024,
		role: 'Lead Developer & Technical Illustrator',
		timeline: '8 weeks',
		client: 'Product Launch Team',
		output: 'AI-assisted illustration pipeline',
		galleryCaptions: [
			'Spec ingest to SVG flow with prompt guardrails and validation gates.',
			'Before/after comparisons showing enforced palette and line weights.',
			'Diff overlay screen used in human-in-the-loop review.'
		],
		shortForm: 'AI pipeline that converts specs to brand-safe SVGs, reducing turnaround from days to hours and tightening consistency.',
		longForm: 'Problem -> Solution -> Result: stalled illustration requests, AI/guardrails pipeline, and measurable speed and quality gains.'
	},
	{
		id: 'interactive-data-dashboard',
		title: 'Interactive Data Dashboard (Real-Time)',
		category: 'web',
		summary: 'Ops leads needed live visibility into metrics; I built a streaming dashboard with resilient event ingestion and latency-aware charts.',
		overview: 'Live dashboard delivering sub-second updates with resilient event ingestion and WebSocket streaming.',
		problem: 'Ops and exec teams relied on stale exports and could not trust metrics during incidents.',
		solution: 'Owned the data model, ingestion layer, and WebSocket delivery. Designed latency-aware D3 charts, fallbacks, and alerting. Added role-based views and annotations for weekly reviews.',
		results: [
			'Delivered sub-second updates under load-tested conditions.',
			'Dashboard adopted in weekly ops reviews and exec standups.',
			'Created a reusable event schema and chart component library for future products.'
		],
		tech: ['SvelteKit', 'TypeScript', 'WebSockets', 'D3.js', 'Tailwind CSS', 'PostgreSQL'],
		status: 'completed',
		highlighted: true,
		year: 2024,
		role: 'Full-Stack Developer',
		timeline: '6 weeks',
		client: 'Operations Team',
		output: 'Real-time dashboard',
		galleryCaptions: [
			'Live metrics view with streaming charts and event annotations.',
			'WebSocket inspector showing sub-second delivery during load tests.',
			'Themed chart library aligned to shared design tokens for reuse.'
		]
	},
	{
		id: 'decision-app-weighted',
		title: 'Decision-Making App with Weighted Criteria',
		category: 'tools',
		summary: 'Teams were making inconsistent calls; I created a weighted scoring app that standardizes inputs and surfaces bias with explainability.',
		overview: 'Weighted scoring app that standardizes decisions and surfaces bias with transparent logic.',
		problem: 'Teams used ad hoc spreadsheets that hid assumptions, delayed approvals, and made bias invisible.',
		solution: 'Defined scoring logic and bias checks, built a UI with explainability tooltips and scenario comparison, and added audit trails plus notifications for approvals.',
		results: [
			'Improved alignment and reduced approval cycles with shared criteria.',
			'Traceable decisions with logged inputs, weights, and rationales.',
			'Stakeholders can simulate scenarios to resolve debates faster.'
		],
		tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Zustand', 'Playwright'],
		status: 'completed',
		highlighted: true,
		year: 2024,
		role: 'Product Engineer',
		timeline: '5 weeks',
		client: 'Strategy Team',
		output: 'Web application',
		galleryCaptions: [
			'Weighted criteria matrix with explainability tooltips.',
			'Scenario comparison view highlighting score changes by input.',
			'Audit log showing decision history, approvals, and rationale.'
		]
	},
	{
		id: 'nature-tech-portfolio',
		title: 'Nature-Tech Portfolio',
		category: 'web',
		summary: 'This portfolio website with nature-inspired design, glassmorphism, and AI-driven effects.',
		description: 'The home for my technical illustration and engineering work, blending natural gradients with crisp, data-inspired UI components.',
		tech: ['SvelteKit', 'Tailwind CSS', 'Canvas API'],
		status: 'completed',
		highlighted: false,
		year: 2024,
		role: 'Designer & Developer',
		output: 'Portfolio site'
	}
];

export function getHighlightedProjects(): Project[] {
	return projects.filter((p) => p.highlighted);
}

export function getProjectsByCategory(category: Project['category']): Project[] {
	return projects.filter((p) => p.category === category);
}

export function getProjectById(id: string): Project | undefined {
	return projects.find((p) => p.id === id);
}
