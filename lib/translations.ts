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
				'Construyo, despliego y mantengo sistemas en producción de extremo a extremo: desde el código de la aplicación y las APIs REST hasta SQL Server, los servidores y la infraestructura.',
			brandCard:
				'Responsabilidad end-to-end sobre sistemas en producción: software, datos e infraestructura.',
			backdropKicker: 'Software · Datos · Infraestructura',
			backdropHeadline: 'Sistemas en producción, de extremo a extremo.',
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
			subtitle: 'En qué trabajo, de extremo a extremo',
			domains: [
				{
					name: 'Software Engineering',
					description:
						'Aplicaciones web y sistemas institucionales construidos desde cero y mantenidos en operación real, con APIs REST y lógica de negocio.',
					items: [
						'Next.js',
						'React',
						'Node.js',
						'Express',
						'REST APIs',
						'JavaScript',
						'Python',
					],
				},
				{
					name: 'Data & SQL Server',
					description:
						'Trabajo directo con Microsoft SQL Server en producción: optimización de consultas y stored procedures, validación y limpieza de datos, y análisis de rendimiento.',
					items: [
						'Microsoft SQL Server',
						'Query Optimization',
						'Stored Procedures',
						'Data Validation',
						'Data Cleanup',
						'Performance Analysis',
						'Backup / Restore',
					],
				},
				{
					name: 'Infrastructure & Production',
					description:
						'Publicación y operación de aplicaciones desde el código hasta HTTPS público: servidores, IIS, reverse proxy y certificados.',
					items: [
						'Linux Server',
						'Windows Server',
						'IIS',
						'Reverse Proxy',
						'SSL / HTTPS',
						'Production Deployments',
						'Monitoring',
					],
				},
				{
					name: 'Systems & Troubleshooting',
					description:
						'Diagnóstico de problemas de producción a través de toda la pila, desde la capa de aplicación hasta la base de datos y el servidor.',
					items: [
						'Production Support',
						'Performance Diagnosis',
						'Application Monitoring',
						'Incident Analysis',
						'End-to-End Troubleshooting',
					],
				},
			],
		},
		// End-to-End System Ownership
		ownership: {
			title: 'System Ownership',
			subtitle: 'Un sistema, todas las capas',
			intro:
				'No me detengo en la capa de aplicación. Puedo intervenir en toda la cadena técnica de un sistema y, cuando algo falla o va lento, rastrear el problema hasta la capa donde realmente vive.',
			steps: [
				{ name: 'Frontend', detail: 'React / Next.js' },
				{ name: 'Backend / API', detail: 'Node.js · Express · REST' },
				{ name: 'SQL Server', detail: 'Queries · Stored Procedures' },
				{ name: 'Infraestructura', detail: 'IIS · Reverse Proxy · SSL' },
				{ name: 'Producción', detail: 'Despliegue · Monitoreo' },
			],
			closing:
				'Si una aplicación se vuelve lenta, puedo investigar si el cuello de botella está en React, la API, la lógica de negocio, una consulta SQL, un stored procedure, los índices, la concurrencia o la configuración del servidor, y trabajar sobre la capa correcta.',
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
						'Responsabilidad end-to-end sobre aplicaciones web institucionales: desde el código y las APIs hasta SQL Server, los servidores y la producción.',
					responsibilities: [
						'Desarrollo y mantenimiento de aplicaciones web institucionales usadas en operaciones reales.',
						'Desarrollo backend e integración de APIs REST.',
						'Integración con SQL Server y gestión de datos de sistemas internos.',
						'Optimización de consultas y stored procedures.',
						'Validación, limpieza y corrección de registros inconsistentes.',
						'Despliegues en producción desde el código hasta HTTPS público.',
						'Administración de servidores Linux y Windows Server, y configuración de IIS.',
						'Configuración de reverse proxy y certificados SSL.',
						'Monitoreo de aplicaciones, revisión de logs y troubleshooting en producción.',
						'Documentación técnica y responsabilidad end-to-end de las aplicaciones.',
					],
				},
			],
		},
		// Production Case Study
		caseStudy: {
			title: 'Case Study',
			subtitle: 'SQL Server Performance Investigation',
			badge: 'Producción · Anonimizado',
			contextTitle: 'Contexto',
			context:
				'Un sistema institucional en producción presentaba tiempos de respuesta degradados bajo carga concurrente. El objetivo era localizar el origen real de la lentitud en lugar de tratar los síntomas.',
			investigationTitle: 'Investigación',
			investigation: [
				'Identificación y análisis de consultas SQL costosas.',
				'Revisión de tiempo de ejecución y logical reads.',
				'Análisis de sesiones activas y solicitudes concurrentes.',
				'Investigación de blocking y wait types.',
				'Evaluación del uso de CPU y memoria.',
				'Revisión de la carga general de la base de datos.',
				'Evaluación de la configuración de paralelismo (MAXDOP).',
				'Identificación de oportunidades de optimización de consultas e índices.',
				'Determinación de si el cuello de botella se originaba en el código de la aplicación, los servicios backend o la capa de base de datos.',
			],
			approachTitle: 'Enfoque',
			approach:
				'El trabajo se centró en un diagnóstico metódico y basado en evidencia a través de toda la pila: medir antes de cambiar y aislar la capa responsable antes de optimizarla.',
			techTitle: 'Tecnologías',
			tech: [
				'Microsoft SQL Server',
				'SQL',
				'Node.js',
				'Windows Server',
				'Production Systems',
			],
			disclaimer:
				'Caso anonimizado. No se muestran nombres de servidores, credenciales, nombres de bases de datos o tablas internas, consultas privadas ni datos institucionales: el objetivo es mostrar la metodología, no la infraestructura.',
		},
		// Technical Stack
		techStack: {
			title: 'Technical Stack',
			subtitle: 'Herramientas agrupadas por dominio',
			groups: [
				{
					title: 'Software',
					items: [
						'Next.js',
						'React',
						'Node.js',
						'Express',
						'JavaScript',
						'Python',
					],
				},
				{
					title: 'Data',
					items: ['Microsoft SQL Server', 'SQL', 'Stored Procedures'],
				},
				{
					title: 'Infraestructura',
					items: [
						'Linux',
						'Windows Server',
						'IIS',
						'Reverse Proxy',
						'SSL / HTTPS',
					],
				},
				{
					title: 'Engineering',
					items: [
						'Git',
						'GitHub',
						'REST APIs',
						'Monitoring',
						'Technical Documentation',
					],
				},
			],
		},
		// Portfolio
		portfolio: {
			title: 'Proyectos',
			subtitle: 'Proyectos de ingeniería seleccionados',
			github: 'Github',
			liveDemo: 'Live Demo',
			featured: 'Proyecto destacado',
			impactLabel: 'Enfoque técnico',
		},
		// About Me
		aboutMe: {
			title: 'About',
			subtitle: 'Cómo entiendo los sistemas',
			description:
				'Soy Ingeniero en Sistemas y disfruto entender los sistemas más allá de la capa de aplicación. Mi trabajo abarca desarrollo de software, bases de datos, infraestructura y producción, y me gusta poder seguir un problema hasta donde realmente vive, a través de toda la pila. Soy analítico, autodidacta y orientado a resolver problemas, con foco en construir sistemas mantenibles que sigan funcionando en producción.',
			stats: [
				'Años en producción',
				'Dominios de ingeniería',
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
				'Conversemos sobre un sistema, una base de datos o una oportunidad.',
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
			successMessage: '¡Formulario enviado con éxito!',
			errorMessage:
				'Hubo un error al enviar. Intenta de nuevo o escríbeme directamente a frankman254@gmail.com',
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
		// Navbar
		navbar: {
			home: 'Home',
			expertise: 'Expertise',
			experience: 'Experience',
			portfolio: 'Portfolio',
			contact: 'Contact',
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
				'I build, deploy and maintain production systems end-to-end — from application code and REST APIs to SQL Server, servers and infrastructure.',
			brandCard:
				'End-to-end ownership of production systems — software, data and infrastructure.',
			backdropKicker: 'Software · Data · Infrastructure',
			backdropHeadline: 'Production systems, owned end to end.',
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
			subtitle: 'What I work with, end to end',
			domains: [
				{
					name: 'Software Engineering',
					description:
						'Web applications and institutional systems built from scratch and maintained in real operation, with REST APIs and business logic.',
					items: [
						'Next.js',
						'React',
						'Node.js',
						'Express',
						'REST APIs',
						'JavaScript',
						'Python',
					],
				},
				{
					name: 'Data & SQL Server',
					description:
						'Hands-on work with Microsoft SQL Server in production: query and stored procedure optimization, data validation and cleanup, and performance analysis.',
					items: [
						'Microsoft SQL Server',
						'Query Optimization',
						'Stored Procedures',
						'Data Validation',
						'Data Cleanup',
						'Performance Analysis',
						'Backup / Restore',
					],
				},
				{
					name: 'Infrastructure & Production',
					description:
						'Publishing and running applications from code to public HTTPS: servers, IIS, reverse proxies and certificates.',
					items: [
						'Linux Server',
						'Windows Server',
						'IIS',
						'Reverse Proxy',
						'SSL / HTTPS',
						'Production Deployments',
						'Monitoring',
					],
				},
				{
					name: 'Systems & Troubleshooting',
					description:
						'Diagnosing production issues across the whole stack, from the application layer down to the database and the server.',
					items: [
						'Production Support',
						'Performance Diagnosis',
						'Application Monitoring',
						'Incident Analysis',
						'End-to-End Troubleshooting',
					],
				},
			],
		},
		// End-to-End System Ownership
		ownership: {
			title: 'System Ownership',
			subtitle: 'One system, every layer',
			intro:
				"I don't stop at the application layer. I can work across the full technical chain of a system and, when something breaks or slows down, trace the problem to the layer where it actually lives.",
			steps: [
				{ name: 'Frontend', detail: 'React / Next.js' },
				{ name: 'Backend / API', detail: 'Node.js · Express · REST' },
				{ name: 'SQL Server', detail: 'Queries · Stored Procedures' },
				{ name: 'Infrastructure', detail: 'IIS · Reverse Proxy · SSL' },
				{ name: 'Production', detail: 'Deployment · Monitoring' },
			],
			closing:
				'If an application slows down, I can investigate whether the bottleneck is in React, the API, the business logic, a SQL query, a stored procedure, indexing, concurrency or the server configuration — and fix the right layer.',
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
						'End-to-end ownership of institutional web applications — from code and APIs to SQL Server, servers and production.',
					responsibilities: [
						'Development and maintenance of institutional web applications used in real operations.',
						'Backend development and REST API design and integration.',
						'SQL Server integration and data management for internal systems.',
						'Query and stored procedure optimization.',
						'Data validation, cleanup and correction of inconsistent records.',
						'Production deployments from application code to public HTTPS.',
						'Linux and Windows Server administration and IIS configuration.',
						'Reverse proxy and SSL certificate configuration.',
						'Application monitoring, log review and production troubleshooting.',
						'Technical documentation and end-to-end ownership of applications.',
					],
				},
			],
		},
		// Production Case Study
		caseStudy: {
			title: 'Case Study',
			subtitle: 'SQL Server Performance Investigation',
			badge: 'Production · Anonymized',
			contextTitle: 'Context',
			context:
				'An institutional production system showed degraded response times under concurrent workloads. The goal was to locate the real source of the slowdown rather than treat the symptoms.',
			investigationTitle: 'Investigation',
			investigation: [
				'Identified and analyzed expensive SQL queries.',
				'Reviewed execution duration and logical reads.',
				'Examined active sessions and concurrent requests.',
				'Investigated blocking and wait types.',
				'Evaluated CPU and memory utilization.',
				'Reviewed overall database workload.',
				'Evaluated SQL Server parallelism configuration (MAXDOP).',
				'Identified query and indexing optimization opportunities.',
				'Determined whether the bottleneck originated in application code, backend services or the database layer.',
			],
			approachTitle: 'Approach',
			approach:
				'The work focused on methodical, evidence-based diagnosis across the stack — measuring before changing, and isolating the responsible layer before optimizing it.',
			techTitle: 'Technologies',
			tech: [
				'Microsoft SQL Server',
				'SQL',
				'Node.js',
				'Windows Server',
				'Production Systems',
			],
			disclaimer:
				'Anonymized case study. No server names, credentials, internal database or table names, private queries or institutional data are shown — the intent is to demonstrate methodology, not infrastructure.',
		},
		// Technical Stack
		techStack: {
			title: 'Technical Stack',
			subtitle: 'Tools grouped by domain',
			groups: [
				{
					title: 'Software',
					items: [
						'Next.js',
						'React',
						'Node.js',
						'Express',
						'JavaScript',
						'Python',
					],
				},
				{
					title: 'Data',
					items: ['Microsoft SQL Server', 'SQL', 'Stored Procedures'],
				},
				{
					title: 'Infrastructure',
					items: [
						'Linux',
						'Windows Server',
						'IIS',
						'Reverse Proxy',
						'SSL / HTTPS',
					],
				},
				{
					title: 'Engineering',
					items: [
						'Git',
						'GitHub',
						'REST APIs',
						'Monitoring',
						'Technical Documentation',
					],
				},
			],
		},
		// Portfolio
		portfolio: {
			title: 'Projects',
			subtitle: 'Selected engineering projects',
			github: 'Github',
			liveDemo: 'Live Demo',
			featured: 'Featured project',
			impactLabel: 'Technical focus',
		},
		// About Me
		aboutMe: {
			title: 'About',
			subtitle: 'How I think about systems',
			description:
				'I am a Systems Engineer who enjoys understanding systems beyond the application layer. My work spans software development, databases, infrastructure and production, and I like being able to follow a problem to wherever it actually lives, across the whole stack. I am analytical, self-taught and problem-driven, focused on building maintainable systems that keep running in production.',
			stats: [
				'Years in Production',
				'Engineering Domains',
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
			subtitle:
				'Let’s talk about a system, a database, or an opportunity.',
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
			successMessage: '✅ Form submitted successfully!',
			errorMessage:
				'Something went wrong. Please try again or email me directly at frankman254@gmail.com',
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
		// Navbar
		navbar: {
			home: 'Home',
			expertise: 'Expertise',
			experience: 'Experience',
			portfolio: 'Portfolio',
			contact: 'Contact',
		},
	},
};
