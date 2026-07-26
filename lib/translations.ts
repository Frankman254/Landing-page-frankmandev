export type Language = 'es' | 'en';

export const translations = {
	es: {
		// Introduction / Hero
		introduction: {
			greeting: 'Francisco Rodriguez Salazar',
			name: 'Frankman Dev',
			role: 'Ingeniero en Sistemas',
			specialization: 'Software · Datos · Infraestructura',
			summary:
				'Construyo y mantengo software en toda la pila: desde la aplicación que usa la gente hasta los servidores donde funciona. Me gusta hacerme responsable de lo que construyo y entender cómo se conecta cada parte.',
			brandCard: 'Software que se publica, funciona y sigue funcionando.',
			backdropKicker: 'Software · Datos · Infraestructura',
			backdropTag: 'Ingeniería de sistemas',
			backdropHeadline: 'Construyo sistemas que funcionan de principio a fin.',
			email: 'frankman254@gmail.com',
			phone: '+507 6075-8976',
			primaryCta: 'Ver experiencia',
			contactButton: 'Contáctame',
			downloadCV: 'Descargar CV',
			githubLabel: 'GitHub',
			linkedinLabel: 'LinkedIn',
		},
		// Core Expertise
		expertise: {
			title: 'Core Expertise',
			subtitle: 'Áreas en las que trabajo',
			domains: [
				{
					name: 'Ingeniería de Software',
					description:
						'Construcción de aplicaciones web y sistemas internos: desde la interfaz que usa la gente hasta la lógica de negocio y las APIs que hay detrás.',
				},
				{
					name: 'Datos & SQL Server',
					description:
						'Trabajo con datos relacionales en sistemas reales: escribir y optimizar consultas y stored procedures, diagnosticar rendimiento y gestionar accesos con permisos específicos.',
				},
				{
					name: 'Infraestructura & Producción',
					description:
						'Poner aplicaciones en línea y mantenerlas ahí: servidores Windows y Linux, IIS y Nginx, certificados, despliegues y administración de usuarios en Linux.',
				},
				{
					name: 'Sistemas & Diagnóstico',
					description:
						'Ver el sistema como un todo y diagnosticar problemas donde aparezcan, no solo en el código.',
				},
			],
		},
		// End-to-End System Ownership
		ownership: {
			title: 'System Ownership',
			subtitle: 'Un sistema, todas las capas',
			description:
				'Desarrollo y mantengo aplicaciones desde el código hasta producción. Cuando aparece un problema, puedo moverme entre frontend, backend, SQL Server e infraestructura para identificar su causa y trabajar sobre la capa que corresponde.',
			steps: [
				{ name: 'Frontend', detail: 'React · Next.js' },
				{ name: 'Backend & APIs', detail: 'Node.js · Express · REST' },
				{ name: 'Data', detail: 'SQL Server · Stored Procedures' },
				{ name: 'Infraestructura', detail: 'Windows/Linux · IIS · Reverse Proxy' },
				{ name: 'Producción', detail: 'Despliegue · Monitoreo' },
			],
			closing:
				'Mi enfoque no es limitarme a una sola capa, sino entender cómo se conecta el sistema completo.',
		},
		// Professional Experience
		experience: {
			title: 'Experiencia',
			subtitle: 'Experiencia profesional',
			present: 'Actualidad',
			roles: [
				{
					role: 'Desarrollador Web Full-Stack / Analista de Sistemas',
					company: 'INADEH',
					period: 'Feb 2025 – Actualidad',
					location: 'Panamá',
					summary:
						'Me hago responsable de aplicaciones web institucionales de principio a fin: desde el desarrollo hasta el despliegue y el soporte continuo.',
					responsibilities: [
						'Desarrollo y mantenimiento de aplicaciones web institucionales de principio a fin, con frontend, backend y APIs REST.',
						'Trabajo directo con SQL Server: consultas, stored procedures, optimización y diagnóstico de rendimiento.',
						'Backup y restore entre producción y desarrollo, y validación de la integridad de los datos.',
						'Creación de logins y usuarios de SQL Server con permisos específicos para aplicaciones y necesidades operativas.',
						'Creación de usuarios Linux y configuración de privilegios administrativos (sudo) mediante scripts.',
						'Despliegue y operación sobre servidores Windows y Linux: IIS, reverse proxy, HTTPS y certificados SSL.',
						'Monitoreo, análisis de logs, atención de incidentes en producción y documentación técnica.',
					],
				},
				{
					role: 'Desarrollador Jr. Odoo',
					company: 'Compulab S.A.',
					period: 'Jul 2023 – Nov 2023',
					location: 'Panamá',
					summary:
						'Primera experiencia profesional en desarrollo, trabajando con Python, JavaScript y PostgreSQL para construir módulos y flujos de negocio sobre una plataforma ERP.',
					responsibilities: [
						'Desarrollo y personalización de módulos ERP utilizando Python y JavaScript.',
						'Creación de formularios web, vistas, campos y flujos de negocio.',
						'Trabajo con datos de aplicación respaldados por PostgreSQL.',
					],
				},
			],
		},
		// Case Study
		caseStudy: {
			title: 'Case Study',
			subtitle: 'Diagnóstico de rendimiento en producción',
			badge: 'Producción · Anonimizado',
			contextTitle: 'Contexto',
			context:
				'Un sistema institucional en producción respondía con lentitud bajo uso concurrente. El objetivo era encontrar el origen real de la lentitud en lugar de tratar los síntomas.',
			investigationTitle: 'Investigación',
			investigation: [
				'Reproducción del problema y medición de tiempos de respuesta bajo carga.',
				'Revisión de la aplicación y el backend en busca de solicitudes lentas y cuellos de botella.',
				'Análisis de SQL Server: consultas costosas, tiempo de ejecución y bloqueos.',
				'Revisión de los recursos del servidor: CPU, memoria y carga general.',
				'Aislamiento de si la causa estaba en la aplicación, la capa de datos o la infraestructura.',
				'Aplicación de mejoras puntuales sobre la capa realmente responsable.',
			],
			approachTitle: 'Enfoque',
			approach:
				'Un proceso metódico y basado en evidencia a través de toda la pila: medir primero, aislar la capa responsable y luego optimizarla.',
			techTitle: 'Tecnologías',
			tech: ['Node.js', 'SQL Server', 'Windows Server', 'IIS'],
			disclaimer:
				'Caso anonimizado. No se muestran nombres de servidores, credenciales, nombres de bases de datos o tablas internas, consultas privadas ni datos institucionales: el objetivo es mostrar la metodología, no la infraestructura.',
		},
		// Technical Stack
		techStack: {
			title: 'Technical Stack',
			subtitle: 'Herramientas agrupadas por dominio',
			legendTitle: 'Cómo leer esta sección',
			legend: [
				{
					level: 'professional',
					label: 'Profesional',
					description: 'Usado como parte de mi trabajo profesional.',
				},
				{
					level: 'hands-on',
					label: 'Hands-on',
					description:
						'Usado en proyectos, laboratorios y entornos de desarrollo.',
				},
			],
			groups: [
				{
					title: 'Software Engineering',
					level: 'professional',
					items: [
						'React',
						'Next.js',
						'JavaScript',
						'TypeScript',
						'Node.js',
						'Express',
						'REST APIs',
						'Python',
					],
				},
				{
					title: 'Data & SQL Server',
					level: 'professional',
					items: [
						'Microsoft SQL Server',
						'T-SQL',
						'Stored Procedures',
						'Query Optimization',
						'Performance Analysis',
						'Backup / Restore',
						'Data Validation',
						'Users & Permissions',
						'PostgreSQL',
					],
				},
				{
					title: 'Infrastructure & Production',
					level: 'professional',
					items: [
						'Linux',
						'Windows Server',
						'IIS',
						'Nginx',
						'Reverse Proxy',
						'SSL / TLS',
						'SSH',
						'Monitoring & Logs',
						'Production Deployments',
						'Linux User Administration',
					],
				},
				{
					title: 'Engineering & Practices',
					level: 'professional',
					items: [
						'Git',
						'GitHub',
						'Technical Documentation',
						'Incident Analysis',
						'Production Support',
					],
				},
				{
					title: 'Containers & DevOps',
					level: 'hands-on',
					items: ['Docker', 'Docker Compose'],
				},
				{
					title: 'Deployment Platforms',
					level: 'hands-on',
					items: ['Vercel', 'Netlify', 'Railway'],
				},
			],
		},
		// Portfolio
		portfolio: {
			title: 'Proyectos',
			subtitle: 'Proyectos seleccionados',
			github: 'Github',
			liveDemo: 'Live Demo',
			featured: 'Proyecto destacado',
			impactLabel: 'Enfoque técnico',
		},
		// About Me
		aboutMe: {
			title: 'About',
			subtitle: 'Cómo pienso como ingeniero',
			description:
				'Me gusta entender cómo funcionan realmente las cosas, no solo lograr que funcionen. Me muevo con comodidad entre escribir código, trabajar con datos y ocuparme del entorno donde vive una aplicación, y me importa construir cosas que sigan siendo mantenibles con el tiempo. Soy analítico, en buena parte autodidacta, y me motiva entender por qué algo se comporta como se comporta. Uso herramientas de IA como apoyo para investigar, depurar y documentar más rápido, pero soy yo quien entiende el problema, evalúa las propuestas y valida cada resultado.',
			stats: [
				'Años de experiencia',
				'Dominios principales',
				'Proyectos seleccionados',
			],
		},
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
						'El aprendizaje constante es parte de mi rutina como ingeniero.',
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
		// Contact
		contact: {
			title: 'Contacta conmigo',
			subtitle:
				'Conversemos sobre un sistema, un proyecto o una oportunidad.',
			sendMessage: 'Abrir',
			items: [
				{ title: 'LinkedIn' },
				{ title: 'Github' },
				{ title: 'Email' },
				{ title: 'Teléfono' },
			],
		},
		// Contact Form
		contactForm: {
			namePlaceholder: 'Tu Nombre',
			emailPlaceholder: 'Tu Email',
			messagePlaceholder: 'Tu Mensaje',
			submitButton: 'Enviar',
			sendingButton: 'Enviando',
			successMessage: '¡Formulario enviado con éxito!',
			errorMessage:
				'Hubo un error al enviar. Intenta de nuevo o escríbeme directamente a frankman254@gmail.com',
			validation: {
				nameMin: 'Mínimo 2 caracteres',
				emailInvalid: 'Email inválido',
				messageMin: 'Mínimo 10 caracteres',
			},
		},
		// Footer
		footer: {
			expertise: 'Expertise',
			experience: 'Experiencia',
			portfolio: 'Proyectos',
			about: 'About',
			contact: 'Contacto',
			copyright: '© 2026 | Frankman Dev by Francisco Rodriguez Salazar',
		},
		// Navbar (used for accessible labels)
		navbar: {
			home: 'Inicio',
			expertise: 'Expertise',
			experience: 'Experiencia',
			portfolio: 'Proyectos',
			contact: 'Contacto',
		},
		// Brand mark descriptive text
		brand: {
			personalBrand: 'Marca Personal',
			tagline: 'Ingeniero en Sistemas',
		},
		// Accessibility / control labels
		a11y: {
			previousSlide: 'Anterior',
			nextSlide: 'Siguiente',
			switchToLight: 'Cambiar a modo claro',
			switchToDark: 'Cambiar a modo oscuro',
			lightMode: 'Modo claro',
			darkMode: 'Modo oscuro',
		},
	},
	en: {
		// Introduction / Hero
		introduction: {
			greeting: 'Francisco Rodriguez Salazar',
			name: 'Frankman Dev',
			role: 'Systems Engineer',
			specialization: 'Software · Data · Infrastructure',
			summary:
				'I build and maintain software across the full stack — from the application people use to the servers it runs on. I like owning what I build and understanding how every part connects.',
			brandCard: 'Software that ships, runs and keeps working.',
			backdropKicker: 'Software · Data · Infrastructure',
			backdropTag: 'Systems engineering',
			backdropHeadline: 'Building systems that work end to end.',
			email: 'frankman254@gmail.com',
			phone: '+507 6075-8976',
			primaryCta: 'View Experience',
			contactButton: 'Contact Me',
			downloadCV: 'Download CV',
			githubLabel: 'GitHub',
			linkedinLabel: 'LinkedIn',
		},
		// Core Expertise
		expertise: {
			title: 'Core Expertise',
			subtitle: 'Areas I work across',
			domains: [
				{
					name: 'Software Engineering',
					description:
						'Building web applications and internal systems — from the interface people use to the business logic and APIs behind it.',
				},
				{
					name: 'Data & SQL Server',
					description:
						'Working with relational data in real systems: writing and optimizing queries and stored procedures, diagnosing performance, and managing access with scoped permissions.',
				},
				{
					name: 'Infrastructure & Production',
					description:
						'Getting applications online and keeping them there — Windows and Linux servers, IIS and Nginx, certificates, deployments, and Linux user administration.',
				},
				{
					name: 'Systems & Troubleshooting',
					description:
						'Seeing a system as a whole and diagnosing issues wherever they show up, not just in the code.',
				},
			],
		},
		// End-to-End System Ownership
		ownership: {
			title: 'System Ownership',
			subtitle: 'End-to-end system ownership',
			description:
				'I build and maintain applications from code to production. When a problem shows up, I can move across frontend, backend, SQL Server and infrastructure to find its cause and work on the layer that needs it.',
			steps: [
				{ name: 'Frontend', detail: 'React · Next.js' },
				{ name: 'Backend & APIs', detail: 'Node.js · Express · REST' },
				{ name: 'Data', detail: 'SQL Server · Stored Procedures' },
				{ name: 'Infrastructure', detail: 'Windows/Linux · IIS · Reverse Proxy' },
				{ name: 'Production', detail: 'Deployment · Monitoring' },
			],
			closing:
				"My goal isn't to stay inside a single layer, but to understand how the whole system fits together.",
		},
		// Professional Experience
		experience: {
			title: 'Experience',
			subtitle: 'Professional Experience',
			present: 'Present',
			roles: [
				{
					role: 'Full-Stack Web Developer / Systems Analyst',
					company: 'INADEH',
					period: 'Feb 2025 – Present',
					location: 'Panama',
					summary:
						'I own institutional web applications end to end — from development to deployment and ongoing support.',
					responsibilities: [
						'Build and maintain institutional web applications end to end — frontend, backend and REST APIs.',
						'Work directly with SQL Server: queries, stored procedures, optimization and performance diagnosis.',
						'Back up and restore data between production and development, and validate data integrity.',
						'Create SQL Server logins and users with permissions scoped to specific applications and operational needs.',
						'Create Linux users and configure administrative (sudo) privileges through scripted procedures.',
						'Deploy and operate on Windows and Linux servers: IIS, reverse proxy, HTTPS and SSL certificates.',
						'Monitor systems, analyze logs, handle production incidents and write technical documentation.',
					],
				},
				{
					role: 'Junior Odoo Developer',
					company: 'Compulab S.A.',
					period: 'Jul 2023 – Nov 2023',
					location: 'Panama',
					summary:
						'First professional development role, working with Python, JavaScript and PostgreSQL to build modules and business workflows on an ERP platform.',
					responsibilities: [
						'Developed and customized ERP modules using Python and JavaScript.',
						'Built web forms, views, fields and business workflows.',
						'Worked with PostgreSQL-backed application data.',
					],
				},
			],
		},
		// Case Study
		caseStudy: {
			title: 'Case Study',
			subtitle: 'Production Performance Troubleshooting',
			badge: 'Production · Anonymized',
			contextTitle: 'Context',
			context:
				'An institutional system in production was responding slowly under concurrent use. The goal was to find the real source of the slowdown instead of treating the symptoms.',
			investigationTitle: 'Investigation',
			investigation: [
				'Reproduced the issue and measured response times under load.',
				'Reviewed the application and backend for slow requests and bottlenecks.',
				'Analyzed SQL Server: expensive queries, execution time and blocking.',
				'Checked server resources — CPU, memory and overall workload.',
				'Isolated whether the cause was in the application, the data layer or the infrastructure.',
				'Applied targeted improvements to the layer actually responsible.',
			],
			approachTitle: 'Approach',
			approach:
				'A methodical, evidence-based process across the stack — measure first, isolate the responsible layer, then optimize it.',
			techTitle: 'Technologies',
			tech: ['Node.js', 'SQL Server', 'Windows Server', 'IIS'],
			disclaimer:
				'Anonymized case study. No server names, credentials, internal database or table names, private queries or institutional data are shown — the intent is to demonstrate methodology, not infrastructure.',
		},
		// Technical Stack
		techStack: {
			title: 'Technical Stack',
			subtitle: 'Tools grouped by domain',
			legendTitle: 'How to read this section',
			legend: [
				{
					level: 'professional',
					label: 'Professional',
					description: 'Used as part of my professional work.',
				},
				{
					level: 'hands-on',
					label: 'Hands-on',
					description:
						'Used in projects, labs and development environments.',
				},
			],
			groups: [
				{
					title: 'Software Engineering',
					level: 'professional',
					items: [
						'React',
						'Next.js',
						'JavaScript',
						'TypeScript',
						'Node.js',
						'Express',
						'REST APIs',
						'Python',
					],
				},
				{
					title: 'Data & SQL Server',
					level: 'professional',
					items: [
						'Microsoft SQL Server',
						'T-SQL',
						'Stored Procedures',
						'Query Optimization',
						'Performance Analysis',
						'Backup / Restore',
						'Data Validation',
						'Users & Permissions',
						'PostgreSQL',
					],
				},
				{
					title: 'Infrastructure & Production',
					level: 'professional',
					items: [
						'Linux',
						'Windows Server',
						'IIS',
						'Nginx',
						'Reverse Proxy',
						'SSL / TLS',
						'SSH',
						'Monitoring & Logs',
						'Production Deployments',
						'Linux User Administration',
					],
				},
				{
					title: 'Engineering & Practices',
					level: 'professional',
					items: [
						'Git',
						'GitHub',
						'Technical Documentation',
						'Incident Analysis',
						'Production Support',
					],
				},
				{
					title: 'Containers & DevOps',
					level: 'hands-on',
					items: ['Docker', 'Docker Compose'],
				},
				{
					title: 'Deployment Platforms',
					level: 'hands-on',
					items: ['Vercel', 'Netlify', 'Railway'],
				},
			],
		},
		// Portfolio
		portfolio: {
			title: 'Projects',
			subtitle: 'Selected projects',
			github: 'Github',
			liveDemo: 'Live Demo',
			featured: 'Featured project',
			impactLabel: 'Technical focus',
		},
		// About Me
		aboutMe: {
			title: 'About',
			subtitle: 'How I think as an engineer',
			description:
				"I like understanding how things actually work, not just getting them to run. I move comfortably between writing code, working with data, and dealing with the environment where an application lives — and I care about building things that stay maintainable over time. I'm analytical, largely self-taught, and driven by figuring out why something behaves the way it does. I use AI tools to research, debug, and document faster — but I'm the one who understands the problem, evaluates the options, and validates every result.",
			stats: [
				'Years of Experience',
				'Core Domains',
				'Selected Projects',
			],
		},
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
						'Constant learning is part of my routine as an engineer.',
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
		// Contact
		contact: {
			title: 'Contact me',
			subtitle: 'Let’s talk about a system, a project, or an opportunity.',
			sendMessage: 'Open',
			items: [
				{ title: 'LinkedIn' },
				{ title: 'Github' },
				{ title: 'Email' },
				{ title: 'Phone' },
			],
		},
		// Contact Form
		contactForm: {
			namePlaceholder: 'Your Name',
			emailPlaceholder: 'Your Email',
			messagePlaceholder: 'Your Message',
			submitButton: 'Send',
			sendingButton: 'Sending',
			successMessage: '✅ Form submitted successfully!',
			errorMessage:
				'Something went wrong. Please try again or email me directly at frankman254@gmail.com',
			validation: {
				nameMin: 'At least 2 characters',
				emailInvalid: 'Invalid email',
				messageMin: 'At least 10 characters',
			},
		},
		// Footer
		footer: {
			expertise: 'Expertise',
			experience: 'Experience',
			portfolio: 'Projects',
			about: 'About',
			contact: 'Contact',
			copyright: '© 2026 | Frankman Dev by Francisco Rodriguez Salazar',
		},
		// Navbar (used for accessible labels)
		navbar: {
			home: 'Home',
			expertise: 'Expertise',
			experience: 'Experience',
			portfolio: 'Projects',
			contact: 'Contact',
		},
		// Brand mark descriptive text
		brand: {
			personalBrand: 'Personal Brand',
			tagline: 'Systems Engineer',
		},
		// Accessibility / control labels
		a11y: {
			previousSlide: 'Previous slide',
			nextSlide: 'Next slide',
			switchToLight: 'Switch to light mode',
			switchToDark: 'Switch to dark mode',
			lightMode: 'Light mode',
			darkMode: 'Dark mode',
		},
	},
};
