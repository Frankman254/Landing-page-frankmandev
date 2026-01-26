export type Language = 'es' | 'en';

export const translations = {
	es: {
		// Introduction
		introduction: {
			greeting: 'Hola, soy Francisco Rodriguez',
			name: 'Frankman Dev',
			role: 'Ingeniero en Sistemas y Desarrollador Web',
			email: 'frankman254@gmail.com',
			phone: '+507 6075-8976',
			contactButton: 'Contacta conmigo',
			downloadCV: 'Descargar CV',
		},
		// About Me
		aboutMe: {
			title: 'Sobre Mi',
			subtitle: 'Conóceme',
			description: "Desarrollador Web e Ingeniero en Sistemas con experiencia en el desarrollo, mantenimiento y mejora de sistemas en entornos institucionales de producción. Trabajo tanto en aplicaciones frontend modernas como en sistemas backend existentes, realizando adecuaciones en bases de datos, optimización de procesos y despliegues en servidores Linux. Enfocado en la estabilidad, el rendimiento y la mejora continua de los sistemas.",
			contactButton: 'Contáctame',
		},
		// Skills
		skills: {
			title: 'Habilidades',
			subtitle: 'Habilidades que tengo',
		},
		// Services
		services: {
			title: 'Servicios',
			subtitle: 'Que ofrezco',
		},
		// Experience
		experience: {
			title: 'Experiencia',
			subtitle: 'Experiencia que tengo',
		},
		// Personal
		personal: {
			title: 'Personal',
			subtitle: 'Más allá del código',
		},
		// Portfolio
		portfolio: {
			title: 'Portfolio',
			subtitle: 'Trabajos recientes',
			github: 'Github',
			liveDemo: 'Live Demo',
		},
		// Contact
		contact: {
			title: 'Contacta conmigo',
			subtitle: 'Ponte en contacto conmigo 👋🏻',
			sendMessage: 'Enviar Mensaje',
		},
		// Contact Form
		contactForm: {
			namePlaceholder: 'Tu Nombre',
			emailPlaceholder: 'Tu Email',
			messagePlaceholder: 'Tu Mensaje',
			submitButton: 'Enviar',
			successMessage: '¡Formulario enviado con éxito!',
		},
		// Footer
		footer: {
			aboutMe: 'Sobre mi',
			skills: 'Skills',
			services: 'Servicios',
			portfolio: 'Portfolio',
			contact: 'Contacto',
			copyright: '© 2024 | Landing Page by FrankmanDev',
		},
		// Navbar
		navbar: {
			home: 'Home',
			user: 'User',
			book: 'Book',
			target: 'Target',
			contact: 'Contact',
		},
		// Data
		data: {
			aboutMe: [
				{
					name: 'Producción',
					description:
						'Experiencia trabajando con sistemas web reales en entornos institucionales de producción.',
				},
				{
					name: 'Frontend',
					description:
						'React, Next.js y desarrollo de interfaces modernas enfocadas en experiencia de usuario.',
				},
				{
					name: 'Backend & Datos',
					description:
						'Node.js, Express y SQL Server con trabajo directo sobre bases de datos.',
				},
				{
					name: 'Infraestructura',
					description:
						'Despliegues, gestión de logs y soporte en servidores Linux.',
				},
				{
					name: 'Aprendizaje',
					description:
						'Mejora continua, estudio de nuevas tecnologías y buenas prácticas.',
				},
				{
					name: 'Valores',
					description:
						'Compromiso, responsabilidad y enfoque en soluciones sostenibles.',
				},
			],
			skills: [
				{
					title: 'Frontend',
					items: [
						'JavaScript / TypeScript',
						'React',
						'Next.js',
						'Tailwind CSS',
						'shadcn/ui',
						'HTML5 / CSS3',
					],
				},
				{
					title: 'Backend',
					items: [
						'Node.js',
						'Express.js',
						'SQL Server',
						'Autenticación por sesiones',
						'APIs REST',
					],
				},
				{
					title: 'Infraestructura / Producción',
					items: [
						'Linux (servidores)',
						'Despliegues manuales',
						'Gestión de logs',
						'Variables de entorno',
						'NVM / Node versions',
					],
				},
				{
					title: 'Buenas Prácticas',
					items: [
						'Código mantenible',
						'Mejora de sistemas legacy',
						'Trabajo con datos reales',
						'Resolución de incidencias',
					],
				},
			],
			services: [
				{
					title: 'Desarrollo Web',
					features: [
						'Desarrollo de sitios web personalizados',
						'Diseño y desarrollo responsive',
						'Optimización SEO',
						'Desarrollo de aplicaciones web',
						'Gestión de contenido',
						'Comercio electrónico',
						'Mantenimiento y soporte continuo',
					],
				},
				{
					title: 'Servicios Técnicos',
					features: [
						'Reparacion de Computadoras',
						'Instalacion de Sistemas de Seguridad',
						'Instalacion de Sistemas Operativos',
						'Reparacion de Celulares / Consolas de Video juegos',
						'Mantenimiento de Computadoras, Consolas, Celulares',
					],
				},
				{
					title: 'UI/UX Design',
					features: [
						'Diseño intuitivo para una experiencia de usuario fluida',
						'Prototipado interactivo para visualizar la interfaz',
						'Investigación de usuarios para comprender necesidades y expectativas',
						'Optimización de la usabilidad para mejorar la accesibilidad',
						'Pruebas de usabilidad para evaluar la experiencia',
						'Diseño responsive para adaptarse a diferentes dispositivos',
					],
				},
			],
			experience: [
				{
					title: 'Experience',
					descriptions: [
						'+2 años de experiencia',
						'Desarrollo y mejora de sistemas web utilizados en entornos institucionales de producción.',
						'Adecuación de tablas, edición de registros y validación de datos en SQL Server.',
						'Puesta en marcha de código en producción y soporte operativo en servidores Linux.',
						'Gestión y limpieza de logs, monitoreo básico y soporte post-despliegue.',
						'Mejora continua de sistemas orientada a estabilidad, rendimiento y mantenibilidad.',
					],
				},
			],
			// Personal
			personal: {
				title: 'Personal',
				subtitle: 'Más allá del código',
				images: [
					{
						url: '/slider-1.jpg',
						alt: 'Tecnología en contexto real',
						caption:
							'Trabajo diario con sistemas reales y entornos de producción.',
					},
					{
						url: '/slider-2.jpg',
						alt: 'Eventos y comunidad tecnológica',
						caption:
							'Aprender y compartir conocimiento es parte de mi crecimiento profesional.',
					},
					{
						url: '/slider-3.jpg',
						alt: 'Aprendizaje y disciplina',
						caption:
							'El aprendizaje constante es parte de mi rutina como desarrollador.',
					},
					{
						url: '/slider-4.jpg',
						alt: 'Equilibrio mente-cuerpo',
						caption:
							'Mantener equilibrio físico y mental me permite rendir mejor profesionalmente.',
					},
					{
						url: '/slider-5.jpg',
						alt: 'Profesionalidad y presencia',
						caption:
							'Profesionalismo y responsabilidad en cada proyecto que asumo.',
					},
					{
						url: '/slider-6.jpg',
						alt: 'Proyectos y logros',
						caption:
							'Enfocado en construir y mejorar soluciones que impactan entornos reales.',
					},
					{
						url: '/slider-7.jpg',
						alt: 'Identidad personal',
						caption:
							'Más allá del código, disfruto aprender y crecer como persona.',
					},
					{
						url: '/slider-8.jpg',
						alt: 'Tecnología y creatividad',
						caption:
							'Disfruto analizar, planificar y transformar ideas en soluciones técnicas.',
					},
				],
			},
			contact: [
				{ title: 'Teléfono' },
				{ title: 'Github' },
				{ title: 'Email' },
			],
		},
	},
	en: {
		// Introduction
		introduction: {
			greeting: 'Hello, I am Francisco Rodriguez',
			name: 'Frankman Dev',
			role: 'Systems Engineer and Web Developer',
			email: 'frankman254@gmail.com',
			phone: '+507 6075-8976',
			contactButton: 'Contact me',
			downloadCV: 'Download CV',
		},
		// About Me
		aboutMe: {
			title: 'About Me',
			subtitle: 'Get to know me',
			description: "Web Developer and Systems Engineer with experience building, maintaining, and improving production systems in institutional environments. I work on modern frontend applications as well as existing backend systems, performing database adjustments, process optimization, and production deployments on Linux servers. Focused on system stability, performance, and continuous improvement.",
			contactButton: 'Contact me',
		},
		// Experience
		skills: {
			title: 'Skills',
			subtitle: 'Skills I have',
		},
		// Services
		services: {
			title: 'Services',
			subtitle: 'What I offer',
		},
		// Experience
		experience: {
			title: 'Experience',
			subtitle: 'Experience I have',
		},
		// Personal
		personal: {
			title: 'Personal',
			subtitle: 'Beyond the code',
		},
		// Portfolio
		portfolio: {
			title: 'Portfolio',
			subtitle: 'Recent work',
			github: 'Github',
			liveDemo: 'Live Demo',
		},
		// Contact
		contact: {
			title: 'Contact me',
			subtitle: 'Get in touch with me 👋🏻',
			sendMessage: 'Send Message',
		},
		// Contact Form
		contactForm: {
			namePlaceholder: 'Your Name',
			emailPlaceholder: 'Your Email',
			messagePlaceholder: 'Your Message',
			submitButton: 'Send',
			successMessage: '✅ Form submitted successfully!',
		},
		// Footer
		footer: {
			aboutMe: 'About me',
			skills: 'Skills',
			services: 'Services',
			portfolio: 'Portfolio',
			contact: 'Contact',
			copyright: '© 2024 | Landing Page by FrankmanDev',
		},
		// Navbar
		navbar: {
			home: 'Home',
			user: 'User',
			book: 'Book',
			target: 'Target',
			contact: 'Contact',
		},
		// Data
		data: {
			aboutMe: [
				{
					name: 'Production',
					description:
						'Experience working with real-world web systems in institutional production environments.',
				},
				{
					name: 'Frontend',
					description:
						'React, Next.js, and modern interface development focused on user experience.',
				},
				{
					name: 'Backend & Data',
					description:
						'Node.js, Express, and SQL Server with hands-on database work.',
				},
				{
					name: 'Infrastructure',
					description:
						'Deployments, log management, and Linux server support.',
				},
				{
					name: 'Learning',
					description:
						'Continuous improvement, learning new technologies, and applying best practices.',
				},
				{
					name: 'Values',
					description:
						'Commitment, responsibility, and focus on sustainable solutions.',
				},
			],
			skills: [
				{
					title: 'Frontend',
					items: [
						'JavaScript / TypeScript',
						'React',
						'Next.js',
						'Tailwind CSS',
						'shadcn/ui',
						'HTML5 / CSS3',
					],
				},
				{
					title: 'Backend',
					items: [
						'Node.js',
						'Express.js',
						'SQL Server',
						'Session Authentication',
						'REST APIs',
					],
				},
				{
					title: 'Infrastructure / Production',
					items: [
						'Linux (servers)',
						'Manual deployments',
						'Log management',
						'Environment variables',
						'NVM / Node versions',
					],
				},
				{
					title: 'Best Practices',
					items: [
						'Maintainable code',
						'Legacy system improvement',
						'Working with real data',
						'Issue resolution',
					],
				},
			],
			services: [
				{
					title: 'Web Development',
					features: [
						'Custom website development',
						'Responsive design and development',
						'SEO optimization',
						'Web application development',
						'Content management',
						'E-commerce',
						'Ongoing maintenance and support',
					],
				},
				{
					title: 'Technical Services',
					features: [
						'Computer Repair',
						'Security System Installation',
						'Operating System Installation',
						'Phone / Video Game Console Repair',
						'Computer, Console, Phone Maintenance',
					],
				},
				{
					title: 'UI/UX Design',
					features: [
						'Intuitive design for a smooth user experience',
						'Interactive prototyping to visualize the interface',
						'User research to understand needs and expectations',
						'Usability optimization to improve accessibility',
						'Usability testing to evaluate the experience',
						'Responsive design to adapt to different devices',
					],
				},
			],
			experience: [
				{
					title: 'Experience',
					descriptions: [
						'+2 years of experience',
						'Development and improvement of web systems used in institutional production environments.',
						'Database adjustments, data editing and validation in SQL Server.',
						'Deployment of code in production and operational support on Linux servers.',
						'Log management, basic monitoring and post-deployment support.',
						'Continuous system improvement focused on stability, performance and maintainability.',
					],
				},
			],
			// Personal
			personal: {
				title: 'Personal',
				subtitle: 'Beyond the code',
				images: [
					{
						url: '/slider-1.jpg',
						alt: 'Technology in real context',
						caption:
							'Daily work with real systems and production environments.',
					},
					{
						url: '/slider-2.jpg',
						alt: 'Events and tech community',
						caption:
							'Learning and sharing knowledge is part of my professional growth.',
					},
					{
						url: '/slider-3.jpg',
						alt: 'Learning and discipline',
						caption:
							'Constant learning is part of my routine as a developer.',
					},
					{
						url: '/slider-4.jpg',
						alt: 'Mind-body balance',
						caption:
							'Maintaining physical and mental balance allows me to perform better professionally.',
					},
					{
						url: '/slider-5.jpg',
						alt: 'Professionalism and presence',
						caption:
							'Professionalism and responsibility in every project I undertake.',
					},
					{
						url: '/slider-6.jpg',
						alt: 'Projects and achievements',
						caption:
							'Focused on building and improving solutions that impact real environments.',
					},
					{
						url: '/slider-7.jpg',
						alt: 'Personal identity',
						caption:
							'Beyond code, I enjoy learning and growing as a person.',
					},
					{
						url: '/slider-8.jpg',
						alt: 'Technology and creativity',
						caption:
							'I enjoy analyzing, planning, and transforming ideas into technical solutions.',
					},
				],
			},
			contact: [
				{ title: 'Phone' },
				{ title: 'Github' },
				{ title: 'Email' },
			],
		},
	},
};
