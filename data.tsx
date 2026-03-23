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


export const dataPortfolio = [
	{
		id: 1,
		title: 'App Todos React',
		image: '/app-todos.png',
		urlGithub: 'https://github.com/Frankman254/app-todos',
		urlDemo: 'https://frankman254.github.io/app-todos/',
		alt: 'App Todos React',
		tags: ['React', 'JavaScript', 'CSS'],
	},
	{
		id: 2,
		title: 'FrankmanDev Playground',
		image: '/playground.png',
		urlGithub: 'https://github.com/Frankman254/frankmandevplayground',
		urlDemo: 'https://frankmandevplayground.netlify.app/',
		alt: 'FrankmanDev Playground — plataforma multi-módulo',
		tags: ['Next.js', 'TypeScript', 'Supabase'],
	},
	{
		id: 3,
		title: 'Landing Page Portfolio',
		image: '/landing-portfolio.png',
		urlGithub: 'https://github.com/Frankman254/Landing-page-frankmandev',
		urlDemo: 'https://landing-page-frankmandev.netlify.app/#home',
		alt: 'Landing Page Portfolio',
		tags: ['Next.js', 'TypeScript', 'Tailwind'],
	},
];

export const dataExperience = [
	{
		id: 1,
		title: 'Frontend Development  💄',
		experience: [
			{
				name: 'HTML',
				subtitle: 'Experimentado',
				value: 95,
			},
			{
				name: 'CSS',
				subtitle: 'Experimentado',
				value: 90,
			},
			{
				name: 'JavaScript',
				subtitle: 'Intermedio',
				value: 80,
			},
			{
				name: 'Tailwind CSS',
				subtitle: 'Basic',
				value: 90,
			},
			{
				name: 'React',
				subtitle: 'Experimentado',
				value: 85,
			},
		],
	},
	{
		id: 2,
		title: 'Backend Development  🥷',
		experience: [
			{
				name: 'Node JS',
				subtitle: 'Intermedio',
				value: 70,
			},
			{
				name: 'Python',
				subtitle: 'Intermedio',
				value: 70,
			},
			{
				name: 'SQL Server',
				subtitle: 'Basic',
				value: 90,
			},
			{
				name: 'Next Js',
				subtitle: 'Experimentado',
				value: 85,
			},
			{
				name: 'Express',
				subtitle: 'Intermedio',
				value: 70,
			},
		],
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
