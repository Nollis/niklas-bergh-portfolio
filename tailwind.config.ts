import type { Config } from 'tailwindcss';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif']
			},
			colors: {
				// Primary brand colors from the static design
				brand: {
					orange: '#EA7A43',
					teal: '#4DB0A2',
					dark: '#18282D',
					'light-green': '#A6C8B5',
					cyan: '#25d0ab',
					green: '#98e594'
				},
				// Background colors
				background: {
					DEFAULT: '#18282D',
					darker: '#0c1a2e',
					card: 'rgba(255, 255, 255, 0.05)'
				},
				// Border colors
				border: {
					DEFAULT: 'rgba(255, 255, 255, 0.1)',
					teal: 'rgba(77, 176, 162, 0.4)'
				}
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-orange': 'linear-gradient(to right, #f59e0b, #fbbf24)',
				'topo-pattern': "url('/bg.png')"
			},
			boxShadow: {
				glow: '0 0 15px rgba(81, 214, 166, 0.3)',
				'glow-orange': '0 0 15px 5px rgba(229, 154, 90, 0.3)',
				'glow-teal': '0 0 20px rgba(77, 176, 162, 0.3)'
			},
			backdropBlur: {
				xs: '2px'
			},
			animation: {
				float: 'float 20s linear infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite'
			},
			keyframes: {
				float: {
					'0%': { transform: 'translate(0, 0) rotate(0deg)' },
					'25%': { transform: 'translate(15px, -15px) rotate(90deg)' },
					'50%': { transform: 'translate(-10px, -30px) rotate(180deg)' },
					'75%': { transform: 'translate(-20px, -15px) rotate(270deg)' },
					'100%': { transform: 'translate(0, 0) rotate(360deg)' }
				},
				'glow-pulse': {
					'0%, 100%': { opacity: '0.5' },
					'50%': { opacity: '1' }
				}
			}
		}
	},
	plugins: []
} satisfies Config;

