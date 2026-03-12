export type Language = 'es' | 'en';

export const translations = {
	es: {
		// Introduction
		introduction: {
			greeting: 'Hola, soy Francisco Rodriguez Salazar',
			name: 'Frankman Dev',
			role: 'Desarrollador de Software Full-Stack',
			summary:
				'Desarrollo herramientas internas, automatizacion de procesos y aplicaciones web listas para produccion en entornos privados y gubernamentales.',
			brandCard:
				'Software, automatizacion e infraestructura para operaciones reales.',
			backdropKicker: 'Software, procesos e infraestructura',
			backdropHeadline: 'Soluciones que optimizan operaciones reales.',
			email: 'frankman254@gmail.com',
			phone: '+507 6075-8976',
			contactButton: 'Hablemos de tu proyecto',
			downloadCV: 'Descargar CV',
		},
		// About Me
		aboutMe: {
			title: 'Perfil',
			subtitle: 'Como trabajo',
			description: "Desarrollador de Software Full-Stack con 2 años de experiencia construyendo, manteniendo y mejorando sistemas utilizados en organizaciones privadas y entidades gubernamentales. Diseno herramientas internas, automatizo procesos y despliego aplicaciones web conectando frontend, backend, bases de datos e infraestructura. Mi enfoque es practico: soluciones claras, mantenibles y listas para produccion.",
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
			subtitle: 'Soluciones que ofrezco',
		},
		// Experience
		experience: {
			title: 'Experiencia',
			subtitle: 'Experiencia en produccion',
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
			subtitle: 'Conversemos sobre tu sistema, automatizacion o sitio web.',
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
			copyright: '© 2026 | Frankman Dev by Francisco Rodriguez Salazar',
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
						'Experiencia en sistemas reales usados por equipos internos en entornos privados y gubernamentales.',
				},
				{
					name: 'Frontend',
					description:
						'Interfaces modernas con React y Next.js enfocadas en claridad, velocidad y mantenimiento.',
				},
				{
					name: 'Backend & Datos',
					description:
						'APIs, logica de negocio y SQL Server para procesos internos, validacion y trazabilidad.',
				},
				{
					name: 'Infraestructura',
					description:
						'Despliegues en Linux y Windows Server, IIS, Nginx, SSL y soporte en produccion.',
				},
				{
					name: 'Aprendizaje',
					description:
						'Actualizacion continua en arquitectura, automatizacion y buenas practicas para construir soluciones robustas.',
				},
				{
					name: 'Valores',
					description:
						'Comunicacion clara, responsabilidad tecnica y foco en resultados utiles para el negocio.',
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
						'APIs REST',
						'Arquitectura por controladores',
						'Integracion de sistemas',
					],
				},
				{
					title: 'Infraestructura / Producción',
					items: [
						'Linux (servidores)',
						'Windows Server',
						'IIS / Nginx',
						'SSL / DNS / reverse proxy',
						'Despliegues y soporte en produccion',
					],
				},
				{
					title: 'Buenas Prácticas',
					items: [
						'MVP funcional',
						'Arquitectura modular',
						'Automatizacion de procesos',
						'Documentacion y resolucion de incidencias',
					],
				},
			],
			services: [
				{
					title: 'Herramientas internas y automatizacion',
					features: [
						'Paneles y sistemas administrativos',
						'Automatizacion de tareas y flujos repetitivos',
						'Formularios, dashboards y reportes',
						'Integracion con bases de datos y procesos existentes',
						'Migracion de herramientas de escritorio a web',
						'Mejora de procesos operativos',
						'Soporte evolutivo y mantenimiento',
					],
				},
				{
					title: 'Aplicaciones web a medida',
					features: [
						'Sitios y aplicaciones web para empresas y profesionales',
						'Frontend con React y Next.js',
						'Backend con APIs y logica de negocio',
						'Arquitectura modular y escalable',
						'Optimizacion de rendimiento y mantenibilidad',
						'Integracion con servicios y sistemas existentes',
					],
				},
				{
					title: 'Infraestructura y despliegue',
					features: [
						'Configuracion de Linux y Windows Server',
						'IIS, Nginx, SSL, DNS y proxies inversos',
						'Publicacion de aplicaciones Node.js',
						'Resolucion de incidencias 403 / 502 y conectividad',
						'Monitoreo basico, logs y soporte operativo',
						'Mantenimiento de entornos productivos',
					],
				},
			],
			experience: [
				{
					title: 'Experience',
					descriptions: [
						'2 años de experiencia en entornos privados y gubernamentales.',
						'Desarrollo y mantenimiento de sistemas web usados en operaciones reales.',
						'Diseno de herramientas internas para reducir tareas manuales y mejorar procesos.',
						'Trabajo con SQL Server, APIs, frontend moderno e integracion de sistemas.',
						'Despliegue y soporte sobre Linux, Windows Server, IIS, Nginx, SSL y proxies inversos.',
						'Resolucion de incidencias tecnicas en produccion con enfoque en continuidad operativa.',
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
			greeting: 'Hello, I am Francisco Rodriguez Salazar',
			name: 'Frankman Dev',
			role: 'Full-Stack Software Developer',
			summary:
				'I build internal tools, process automation, and production-ready web applications for private and government environments.',
			brandCard:
				'Software, automation, and infrastructure for real operational workflows.',
			backdropKicker: 'Software, processes, and infrastructure',
			backdropHeadline: 'Solutions that improve real operations.',
			email: 'frankman254@gmail.com',
			phone: '+507 6075-8976',
			contactButton: 'Let’s talk about your project',
			downloadCV: 'Download CV',
		},
		// About Me
		aboutMe: {
			title: 'Profile',
			subtitle: 'How I work',
			description: "Full-Stack Software Developer with 2 years of experience building, maintaining, and improving systems used in private organizations and government environments. I design internal tools, automate processes, and deploy web applications by connecting frontend, backend, databases, and infrastructure. My approach is practical: clear, maintainable, production-ready solutions.",
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
			subtitle: 'Solutions I offer',
		},
		// Experience
		experience: {
			title: 'Experience',
			subtitle: 'Production experience',
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
			subtitle: 'Let’s talk about your system, automation, or website.',
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
			copyright: '© 2026 | Frankman Dev by Francisco Rodriguez Salazar',
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
						'Experience working on real systems used by internal teams in private and government environments.',
				},
				{
					name: 'Frontend',
					description:
						'Modern React and Next.js interfaces focused on clarity, speed, and maintainability.',
				},
				{
					name: 'Backend & Data',
					description:
						'APIs, business logic, and SQL Server for internal processes, validation, and traceability.',
				},
				{
					name: 'Infrastructure',
					description:
						'Deployments on Linux and Windows Server, IIS, Nginx, SSL, and production support.',
				},
				{
					name: 'Learning',
					description:
						'Continuous growth in architecture, automation, and best practices to build stronger solutions.',
				},
				{
					name: 'Values',
					description:
						'Clear communication, technical responsibility, and focus on useful business outcomes.',
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
						'REST APIs',
						'Controller-based architecture',
						'Systems integration',
					],
				},
				{
					title: 'Infrastructure / Production',
					items: [
						'Linux (servers)',
						'Windows Server',
						'IIS / Nginx',
						'SSL / DNS / reverse proxy',
						'Production deployments and support',
					],
				},
				{
					title: 'Best Practices',
					items: [
						'Functional MVP mindset',
						'Modular architecture',
						'Process automation',
						'Documentation and incident resolution',
					],
				},
			],
			services: [
				{
					title: 'Internal tools and automation',
					features: [
						'Administrative panels and internal systems',
						'Automation of repetitive tasks and workflows',
						'Forms, dashboards, and reporting tools',
						'Integration with databases and existing processes',
						'Migration of desktop tools to web applications',
						'Operational workflow improvement',
						'Ongoing support and maintenance',
					],
				},
				{
					title: 'Custom web applications',
					features: [
						'Websites and web applications for companies and professionals',
						'Frontend with React and Next.js',
						'Backend with APIs and business logic',
						'Modular and scalable architecture',
						'Performance and maintainability optimization',
						'Integration with existing services and systems',
					],
				},
				{
					title: 'Infrastructure and deployment',
					features: [
						'Linux and Windows Server setup',
						'IIS, Nginx, SSL, DNS, and reverse proxies',
						'Node.js application publishing',
						'403 / 502 incident and connectivity troubleshooting',
						'Basic monitoring, logs, and operational support',
						'Maintenance of production environments',
					],
				},
			],
			experience: [
				{
					title: 'Experience',
					descriptions: [
						'2 years of experience across private and government environments.',
						'Development and maintenance of web systems used in real operations.',
						'Design of internal tools to reduce manual work and improve processes.',
						'Hands-on work with SQL Server, APIs, modern frontend, and systems integration.',
						'Deployment and support across Linux, Windows Server, IIS, Nginx, SSL, and reverse proxies.',
						'Production incident resolution with focus on operational continuity.',
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
