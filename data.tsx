import { BellPlus, BookText, Briefcase, MessageSquareMore, Brush, Code2, CodeSquare, Home, Inbox, Heart, Mail, SquareDashedBottomCode, PanelsTopLeft,Rocket, Phone, UserRound, Wrench } from "lucide-react";

export const dataAboutMe = [
    {
        id: 1,
        name: "Experiencia",
        icon: <Briefcase />,
        description: "+1 año de experiencia",
    },
    {
        id: 2,
        name: "Proyectos Personales",
        icon: <Wrench />,
        description: "+3 apps personales desarrolladas",
    },
    {
        id: 3,
        name: "Metas",
        icon: <Rocket />,
        description: "Crear soluciones innovadoras y aprender IA",
    },
    {
        id: 4,
        name: "Habilidades",
        icon: <SquareDashedBottomCode />,
        description: "JavaScript, React, Python, Git, HTML/CSS",
    },
    {
        id: 5,
        name: "Testimonios",
        icon: <MessageSquareMore />,
        description: "‘Francisco es proactivo y siempre busca soluciones’. - @Rolilink",
    },
    {
        id: 6,
        name: "Valores",
        icon: <Heart />,
        description: "Innovación, aprendizaje y colaboración",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={20} />,
        link: "#services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={20} />,
        link: "#portfolio",
    },
    {
        id: 5,
        title: "Contact",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];

export const dataSlider = [
    {
        id: 1,
        url: "/slider-1.jpg",
    },
    {
        id: 2,
        url: "/slider-2.jpg",
    },
    {
        id: 3,
        url: "/slider-3.jpg",
    },
    {
        id: 4,
        url: "/slider-4.jpg",
    },
    {
        id: 5,
        url: "/slider-5.jpg",
    },
    {
        id: 6,
        url: "/slider-6.jpg",
    },
    {
        id: 7,
        url: "/slider-7.jpg",
    },
    {
        id: 8,
        url: "/slider-8.jpg",
    },
    {
        id: 9,
        url: "/slider-9.jpg",
    },
    {
        id: 10,
        url: "/slider-10.jpg",
    },
    {
        id: 11,
        url: "/slider-11.jpg",
    },
    {
        id: 12,
        url: "/slider-12.jpg",
    },
    {
        id: 13,
        url: "/slider-13.jpg",
    },
    {
        id: 14,
        url: "/slider-14.jpg",
    },
    {
        id: 15,
        url: "/slider-15.jpg",
    },
    {
        id: 16,
        url: "/slider-16.jpg",
    },
]

export const dataPortfolio = [
    {
        id: 1,
        title: "App Todos React",
        image: "/app-todos.png",
        urlGithub: "https://github.com/Frankman254/app-todos",
        urlDemo: "https://frankman254.github.io/app-todos/",
        alt: "App Todos React",
    },
    {
        id: 2,
        title: "App Black Jack Vite",
        image: "/app-black-jack.png",
        urlGithub: "https://github.com/Frankman254/black-jack-app",
        urlDemo: "https://frankmandev-blackjack.netlify.app/",
        alt: "App Black Jack Vite",
    },
    {
        id: 3,
        title: "Landing Page Portfolio",
        image: "/landing-portfolio.png",
        urlGithub: "https://github.com/Frankman254/Landing-page-frankmandev",
        urlDemo: "https://landing-page-frankmandev.netlify.app/#home",
        alt: "Landing Page Portfolio",
    },
];


export const dataExperience = [
    {
        id: 1,
        title: "Frontend Development  💄",
        experience: [
            {
                name: "HTML",
                subtitle: "Experimentado",
                value: 90,
            },
            {
                name: "CSS",
                subtitle: "Experimentado",
                value: 80,
            },
            {
                name: "JavaScript",
                subtitle: "Intermedio",
                value: 70,
            },
            {
                name: "Tailwind CSS",
                subtitle: "Basic",
                value: 50,
            },
            {
                name: "React",
                subtitle: "Experimentado",
                value: 80,
            },
        ],
    },
    {
        id: 2,
        title: "Backend Development  🥷",
        experience: [
            {
                name: "Node JS",
                subtitle: "Intermedio",
                value: 70,
            },
            {
                name: "Python",
                subtitle: "Intermedio",
                value: 70,
            },
            {
                name: "MySQL",
                subtitle: "Basic",
                value: 40,
            },
            {
                name: "PHP",
                subtitle: "Basico",
                value: 40,
            },
            {
                name: "Next Js",
                subtitle: "Intermedio",
                value: 70,
            },
        ],
    },
];


export const dataServices = [
    {
        id: 1,
        title: "Desarrollo Web",
        icon: <PanelsTopLeft />,
        features: [
            {
                name: "Desarrollo de sitios web personalizados",
            },
            {
                name: "Diseño y desarrollo responsive",
            },
            {
                name: "Optimización SEO",
            },
            {
                name: "Desarrollo de aplicaciones web",
            },
            {
                name: "Gestión de contenido",
            },
            {
                name: "Comercio electrónico",
            },
            {
                name: "Mantenimiento y soporte continuo",
            },
        ],
    },
    {
        id: 2,
        title: "Servicios Técnicos",
        icon: <BellPlus />,
        features: [
            {
                name: "Reparacion de Computadoras",
            },
            {
                name: "Instalacion de Sistemas de Seguridad",
            },
            {
                name: "Instalacion de Sistemas Operativos",
            },
            {
                name: "Reparacion de Celulares / Consolas de Video juegos",
            },
            {
                name: "Mantenimiento de Computadoras, Consolas, Celulares",
            },
            
        ],
    },
    {
        id: 3,
        title: "UI/UX Design",
        icon: <Brush />,
        features: [
            {
                name: "Diseño intuitivo para una experiencia de usuario fluida",
            },
            {
                name: "Prototipado interactivo para visualizar la interfaz",
            },
            {
                name: "Investigación de usuarios para comprender necesidades y expectativas",
            },
            {
                name: "Optimización de la usabilidad para mejorar la accesibilidad",
            },
            {
                name: "Pruebas de usabilidad para evaluar la experiencia",
            },
            {
                name: "Diseño responsive para adaptarse a diferentes dispositivos",
            },
        ],
    },
];


export const dataContact = [
    {
        id: 1,
        title: "Teléfono",
        subtitle: "+507 6075-8976",
        link: "tel:+50760758976",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "github.com/Frankman254",
        link: "https://github.com/Frankman254",
        icon: <Code2 />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "frankman254@gmail.com",
        link: "mailto:frankman254@gmail.com",
        icon: <Inbox />,
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile-1.jpeg",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile-3.jpeg",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile-2.jpeg",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile-3.jpeg",
    },
];