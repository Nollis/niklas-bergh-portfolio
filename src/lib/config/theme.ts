/**
 * Theme configuration for the Niklas Bergh Portfolio
 * Nature + AI hybrid aesthetic with forest/teal/orange colors
 */

export const colors = {
	brand: {
		orange: '#EA7A43',
		teal: '#4DB0A2',
		dark: '#18282D',
		lightGreen: '#A6C8B5',
		cyan: '#25d0ab',
		green: '#98e594'
	},
	background: {
		primary: '#18282D',
		darker: '#0c1a2e',
		card: 'rgba(255, 255, 255, 0.05)'
	}
} as const;

export const gradients = {
	// Orange gradient for buttons
	orange: 'linear-gradient(to right, #f59e0b, #fbbf24)',
	// Teal/green gradient for accents
	teal: 'linear-gradient(135deg, #4DB0A2, #A6C8B5)',
	// Background radial gradients
	backgroundTeal: 'radial-gradient(circle at 10% 20%, rgba(37, 208, 171, 0.1) 0%, transparent 40%)',
	backgroundBlue: 'radial-gradient(circle at 90% 80%, rgba(20, 83, 126, 0.15) 0%, transparent 50%)'
} as const;

export const shadows = {
	glow: '0 0 15px rgba(81, 214, 166, 0.3)',
	glowOrange: '0 0 15px 5px rgba(229, 154, 90, 0.3)',
	glowTeal: '0 0 20px rgba(77, 176, 162, 0.3)',
	card: '0 8px 32px 0 rgba(0, 0, 0, 0.2)'
} as const;

export const navigation = [
	{ label: 'Home', href: '/' },
	{ label: 'Projects', href: '/projects' },
	{ label: 'About', href: '/about' },
	{ label: 'Contact', href: '/contact' }
] as const;

export const socialLinks = [
	{ label: 'Email', href: 'mailto:hello@n3.com', icon: 'mail' },
	{ label: 'Instagram', href: 'https://instagram.com/hellon3', icon: 'instagram' },
	{ label: 'YouTube', href: 'https://youtube.com/@hellon3', icon: 'youtube' }
] as const;

