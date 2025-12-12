export interface Project {
	id: string;
	title: string;
	category: 'ai' | 'illustration' | '3d' | 'web' | 'tools';
	summary: string;
	description?: string;
	challenge?: string;
	solution?: string;
	tech: string[];
	status: 'completed' | 'in-progress' | 'planned';
	highlighted: boolean;
	year: number;
	link?: string;
	image?: string;
	heroImage?: string;
	galleryImages?: string[];
	role?: string;
	timeline?: string;
	client?: string;
	output?: string;
}

export const projects: Project[] = [
	{
		id: 'ai-data-viz',
		title: 'AI-Driven Data Viz',
		category: 'ai',
		summary: 'Visualizing complex datasets with neural networks and interactive exploration tools.',
		description: 'A comprehensive data visualization platform that leverages neural networks to transform complex datasets into intuitive, interactive visual experiences. The system automatically identifies patterns and relationships in data, presenting them through organic, nature-inspired visualizations.',
		challenge: 'Understanding complex data structures is notoriously difficult for non-technical audiences. Traditional charts and graphs often fail to convey the intricate relationships between data points, making it hard to derive meaningful insights.',
		solution: 'By combining machine learning pattern recognition with WebGL-powered visualizations, we created a system that represents data as living, breathing ecosystems. Each data point becomes a node in an organic network, with relationships visualized as flowing connections.',
		tech: ['Python', 'TensorFlow', 'D3.js', 'WebGL'],
		status: 'completed',
		highlighted: true,
		year: 2024,
		role: 'Lead Developer & Designer',
		timeline: 'Sep 2024 - Nov 2024',
		output: 'Web Application',
		link: '#'
	},
	{
		id: 'interactive-illustration',
		title: 'Interactive Illustration',
		category: 'illustration',
		summary: 'A web-based tool for creating dynamic technical graphics with real-time collaboration.',
		description: 'A powerful browser-based illustration tool designed specifically for technical documentation. Features real-time collaboration, vector editing, and automatic diagram generation from structured data.',
		challenge: 'Technical illustrators often work in isolation with desktop software, making collaboration difficult. Exporting and sharing work across teams creates version control nightmares.',
		solution: 'Built a cloud-native illustration platform with real-time sync, allowing multiple artists to work on the same document simultaneously while maintaining precision and quality.',
		tech: ['Svelte', 'Canvas API', 'WebSocket'],
		status: 'completed',
		highlighted: true,
		year: 2024,
		role: 'Full-Stack Developer',
		timeline: 'Jun 2024 - Aug 2024',
		output: 'SaaS Platform',
		link: '#'
	},
	{
		id: 'generative-3d-world',
		title: 'Generative 3D World',
		category: '3d',
		summary: 'Procedurally generated landscapes using AI and 3D modeling techniques.',
		description: 'An experimental project exploring the intersection of procedural generation and machine learning to create infinite, unique 3D landscapes that evolve based on viewer interaction.',
		challenge: 'Creating believable 3D environments traditionally requires extensive manual modeling. Procedural approaches often feel repetitive or artificial.',
		solution: 'Trained custom ML models on natural landscape data to guide procedural generation, resulting in environments that feel organic and varied while being infinitely generatable.',
		tech: ['Three.js', 'Blender', 'Python', 'ML'],
		status: 'completed',
		highlighted: true,
		year: 2023,
		role: 'Creative Technologist',
		timeline: 'Oct 2023 - Dec 2023',
		output: 'Interactive Experience',
		link: '#'
	},
	{
		id: 'technical-engine',
		title: 'Technical Engine',
		category: 'tools',
		summary: 'A rendering engine for technical documentation with automated diagram generation.',
		tech: ['Rust', 'WebAssembly', 'SVG'],
		status: 'in-progress',
		highlighted: false,
		year: 2024,
		link: '#'
	},
	{
		id: 'xvl-viewer',
		title: 'XVL 3D Viewer',
		category: '3d',
		summary: 'Pure Svelte 3D viewer for XVL binary/JSON data with Three.js rendering.',
		tech: ['Svelte', 'Three.js', 'TypeScript'],
		status: 'completed',
		highlighted: true,
		year: 2024,
		link: '#'
	},
	{
		id: 'golf-ai-analytics',
		title: 'Golf AI Analytics',
		category: 'ai',
		summary: 'AI-powered golf swing analysis with real-time metrics and improvement suggestions.',
		tech: ['Python', 'TensorFlow', 'React', 'D3.js'],
		status: 'in-progress',
		highlighted: false,
		year: 2024,
		link: '#'
	},
	{
		id: 'nature-tech-portfolio',
		title: 'Nature-Tech Portfolio',
		category: 'web',
		summary: 'This portfolio website featuring nature-inspired design with AI-driven effects.',
		tech: ['SvelteKit', 'Tailwind', 'Canvas API'],
		status: 'completed',
		highlighted: false,
		year: 2024,
		link: '#'
	},
	{
		id: 'certificate-generator',
		title: 'Certificate Generator',
		category: 'tools',
		summary: 'Automated CE certificate generation system with PDF export and data management.',
		tech: ['FastAPI', 'Python', 'Playwright', 'PDF'],
		status: 'completed',
		highlighted: false,
		year: 2024,
		link: '#'
	},
	{
		id: 'generative-art-engine',
		title: 'Generative Art Engine',
		category: 'ai',
		summary: 'Create unique digital art pieces using machine learning and procedural algorithms.',
		tech: ['Python', 'GANs', 'Processing', 'p5.js'],
		status: 'planned',
		highlighted: false,
		year: 2025,
		link: '#'
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

