import {
	BellPlus,
	BookText,
	Briefcase,
	MessageSquareMore,
	Brush,
	Code2,
	CodeSquare,
	Home,
	Inbox,
	Heart,
	Mail,
	SquareDashedBottomCode,
	PanelsTopLeft,
	Rocket,
	Phone,
	UserRound,
	Wrench,
	Server,
	Monitor,
	Database,
	Settings,
	GraduationCap,
	Linkedin,
} from 'lucide-react';

export type LocalizedCopy = {
	es: string;
	en: string;
};

export type PortfolioProject = {
	id: number;
	title: string;
	image: string;
	urlGithub: string;
	urlDemo?: string;
	alt: LocalizedCopy;
	summary: LocalizedCopy;
	status: LocalizedCopy;
	audience: LocalizedCopy;
	highlights: LocalizedCopy[];
	tags: string[];
};

export const dataAboutMe = [
	{
		id: 1,
		name: 'Producción',
		icon: <Server />,
		description:
			'Experiencia trabajando con sistemas web reales en entornos institucionales de producción.',
	},
	{
		id: 2,
		name: 'Frontend',
		icon: <Monitor />,
		description:
			'React, Next.js y desarrollo de interfaces modernas enfocadas en experiencia de usuario.',
	},
	{
		id: 3,
		name: 'Backend & Datos',
		icon: <Database />,
		description:
			'Node.js, Express y SQL Server con trabajo directo sobre bases de datos.',
	},
	{
		id: 4,
		name: 'Infraestructura',
		icon: <Settings />,
		description:
			'Despliegues, gestión de logs y soporte en servidores Linux.',
	},
	{
		id: 5,
		name: 'Aprendizaje',
		icon: <GraduationCap />,
		description:
			'Mejora continua, estudio de nuevas tecnologías y buenas prácticas.',
	},
	{
		id: 6,
		name: 'Valores',
		icon: <Heart />,
		description:
			'Compromiso, responsabilidad y enfoque en soluciones sostenibles.',
	},
];

export const itemsNavbar = [
	{
		id: 1,
		title: 'Home',
		icon: <Home size={20} />,
		link: '#home',
	},
	{
		id: 2,
		title: 'User',
		icon: <UserRound size={20} />,
		link: '#about-me',
	},
	{
		id: 3,
		title: 'Book',
		icon: <BookText size={20} />,
		link: '#services',
	},
	{
		id: 4,
		title: 'Target',
		icon: <CodeSquare size={20} />,
		link: '#portfolio',
	},
	{
		id: 5,
		title: 'Contact',
		icon: <Mail size={20} />,
		link: '#contact',
	},
];


export const dataPortfolio: PortfolioProject[] = [
	{
		id: 1,
		title: 'LiveWallpaper Anime Glitch',
		image: '/live-wallpaper-anime-glitch.svg',
		urlGithub: 'https://github.com/Frankman254/LiveWallpaperAnimeGlitch',
		alt: {
			es: 'Editor visual audio-reactivo para live wallpapers y branding animado',
			en: 'Audio-reactive visual editor for live wallpapers and animated branding',
		},
		summary: {
			es: 'Editor de live wallpapers y visualizador musical con controles en tiempo real, branding reactivo y vista previa dedicada.',
			en: 'Live wallpaper and music visualizer editor with real-time controls, reactive branding, and a dedicated preview mode.',
		},
		status: {
			es: 'Producto interactivo',
			en: 'Interactive product',
		},
		audience: {
			es: 'Visuales y branding',
			en: 'Visuals and branding',
		},
		highlights: [
			{
				es: 'Editor en tiempo real con rutas separadas para modo editor y modo preview.',
				en: 'Real-time editor with separate routes for editor mode and preview mode.',
			},
			{
				es: 'Captura de audio, espectro visual, overlays reactivos y efectos como glitch, lluvia y scanlines.',
				en: 'Audio capture, spectrum rendering, reactive overlays, and effects such as glitch, rain, and scanlines.',
			},
			{
				es: 'Persistencia con localStorage e IndexedDB para guardar estado, presets y assets recargables.',
				en: 'Persistence with localStorage and IndexedDB for saving state, presets, and reloadable assets.',
			},
		],
		tags: ['React 19', 'TypeScript', 'Zustand', 'Three.js', 'Tailwind CSS'],
	},
	{
		id: 2,
		title: 'FrankmanDev Playground',
		image: '/playground.png',
		urlGithub: 'https://github.com/Frankman254/frankmandevplayground',
		urlDemo: 'https://frankmandevplayground.netlify.app/',
		alt: {
			es: 'FrankmanDev Playground, laboratorio modular de producto',
			en: 'FrankmanDev Playground, modular product lab',
		},
		summary: {
			es: 'Sandbox modular para validar interfaces, flujos y experimentos de producto antes de llevarlos a un entorno final.',
			en: 'Modular sandbox for validating interfaces, flows, and product experiments before shipping them further.',
		},
		status: {
			es: 'Laboratorio de producto',
			en: 'Product lab',
		},
		audience: {
			es: 'Prototipado rapido',
			en: 'Rapid prototyping',
		},
		highlights: [
			{
				es: 'Estructura multipagina para explorar modulos y patrones de interfaz.',
				en: 'Multi-page structure for exploring modules and interface patterns.',
			},
			{
				es: 'Base util para validar ideas antes de comprometer arquitectura final.',
				en: 'Useful base for validating ideas before committing to the final architecture.',
			},
			{
				es: 'Enfoque en iteracion rapida, claridad visual y pruebas de conceptos.',
				en: 'Focused on rapid iteration, visual clarity, and proof-of-concept work.',
			},
		],
		tags: ['Next.js', 'TypeScript', 'Supabase'],
	},
	{
		id: 3,
		title: 'Landing Page Portfolio',
		image: '/landing-portfolio.png',
		urlGithub: 'https://github.com/Frankman254/Landing-page-frankmandev',
		urlDemo: 'https://landing-page-frankmandev.netlify.app/#home',
		alt: {
			es: 'Landing page profesional bilingue para Frankman Dev',
			en: 'Bilingual professional landing page for Frankman Dev',
		},
		summary: {
			es: 'Sitio bilingue enfocado en credibilidad, narrativa profesional y una presentacion clara para clientes potenciales.',
			en: 'Bilingual website focused on credibility, professional storytelling, and clear presentation for potential clients.',
		},
		status: {
			es: 'Sitio de presentacion',
			en: 'Presentation site',
		},
		audience: {
			es: 'Marca personal',
			en: 'Personal brand',
		},
		highlights: [
			{
				es: 'Experiencia responsive con tema claro/oscuro y alternancia de idioma.',
				en: 'Responsive experience with light/dark mode and language switching.',
			},
			{
				es: 'Copy orientado a posicionamiento profesional y servicios reales.',
				en: 'Copy tailored to professional positioning and real service offerings.',
			},
			{
				es: 'Stack moderno con Next.js, TypeScript y Tailwind CSS.',
				en: 'Modern stack powered by Next.js, TypeScript, and Tailwind CSS.',
			},
		},
		tags: ['Next.js', 'TypeScript', 'Tailwind'],
	},
	{
		id: 4,
		title: 'App Todos React',
		image: '/app-todos.png',
		urlGithub: 'https://github.com/Frankman254/app-todos',
		urlDemo: 'https://frankman254.github.io/app-todos/',
		alt: {
			es: 'Aplicacion de tareas con flujo CRUD en React',
			en: 'Task management app with CRUD flow in React',
		},
		summary: {
			es: 'Aplicacion de productividad para demostrar fundamentos de producto, estructura CRUD y claridad de interfaz.',
			en: 'Productivity app that demonstrates product fundamentals, CRUD structure, and interface clarity.',
		},
		status: {
			es: 'Producto base',
			en: 'Core product demo',
		},
		audience: {
			es: 'Productividad',
			en: 'Productivity',
		},
		highlights: [
			{
				es: 'CRUD simple y entendible para tareas diarias.',
				en: 'Simple, easy-to-understand CRUD workflow for daily tasks.',
			},
			{
				es: 'Interfaz limpia con foco en usabilidad basica.',
				en: 'Clean interface with focus on baseline usability.',
			},
			{
				es: 'Proyecto util como muestra de fundamentos frontend.',
				en: 'Useful project for showcasing core frontend fundamentals.',
			},
		],
		tags: ['React', 'JavaScript', 'CSS'],
	},
];

export const dataServices = [
	{
		id: 1,
		title: 'Desarrollo Web',
		icon: <PanelsTopLeft />,
		features: [
			{
				name: 'Desarrollo de sitios web personalizados',
			},
			{
				name: 'Diseño y desarrollo responsive',
			},
			{
				name: 'Optimización SEO',
			},
			{
				name: 'Desarrollo de aplicaciones web',
			},
			{
				name: 'Gestión de contenido',
			},
			{
				name: 'Comercio electrónico',
			},
			{
				name: 'Mantenimiento y soporte continuo',
			},
		],
	},
	{
		id: 2,
		title: 'Servicios Técnicos',
		icon: <BellPlus />,
		features: [
			{
				name: 'Reparacion de Computadoras',
			},
			{
				name: 'Instalacion de Sistemas de Seguridad',
			},
			{
				name: 'Instalacion de Sistemas Operativos',
			},
			{
				name: 'Reparacion de Celulares / Consolas de Video juegos',
			},
			{
				name: 'Mantenimiento de Computadoras, Consolas, Celulares',
			},
		],
	},
	{
		id: 3,
		title: 'UI/UX Design',
		icon: <Brush />,
		features: [
			{
				name: 'Diseño intuitivo para una experiencia de usuario fluida',
			},
			{
				name: 'Prototipado interactivo para visualizar la interfaz',
			},
			{
				name: 'Investigación de usuarios para comprender necesidades y expectativas',
			},
			{
				name: 'Optimización de la usabilidad para mejorar la accesibilidad',
			},
			{
				name: 'Pruebas de usabilidad para evaluar la experiencia',
			},
			{
				name: 'Diseño responsive para adaptarse a diferentes dispositivos',
			},
		],
	},
];

export const dataContact = [
	{
		id: 1,
		title: 'LinkedIn',
		subtitle: 'linkedin.com/in/frankman256',
		link: 'https://www.linkedin.com/in/frankman256',
		icon: <Linkedin />,
	},
	{
		id: 2,
		title: 'Github',
		subtitle: 'github.com/Frankman254',
		link: 'https://github.com/Frankman254',
		icon: <Code2 />,
	},
	{
		id: 3,
		title: 'Email',
		subtitle: 'frankman254@gmail.com',
		link: 'mailto:frankman254@gmail.com',
		icon: <Inbox />,
	},
	{
		id: 4,
		title: 'Teléfono',
		subtitle: '+507 6075-8976',
		link: 'tel:+50760758976',
		icon: <Phone />,
	},
];
