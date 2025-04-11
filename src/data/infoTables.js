const services = [

    {
        serviceId: '0',
        serviceName: 'Intégrateur WEB',
        serviceList: [
            "Conception des pages WEB",
            "Intégration des pages HTML CSS sass et JS",
            "Integration de maquette a partir de figma",
            "optimisation des images pour le WEB",
            "Creation des sites accessibles a partir d'une maquette ",
            "Application des 'good practices' sur le code",
            "Integration de pages adaptées aux differents supports (responsive design) "
        ]
    },
    {
        serviceId: '1',
        serviceName: 'Webmaster Wordpress ',
        serviceList: [
            "Conception de sites WEB wordpress",
            "Réalistation complete de sites web wordpress",
            "Deploiement et hébergement des sites WEB Wordpress",
            "Service apres vente et formation sur le dashboard Wordpress",
            "Conception et otimisation du contenu visuel du site wordpress bannieres et images ",
            "Interventions a la demande  sur les site Wordpress ",
            "Adaptation de template selon le besoin du client"
        ]
    },
    {
        serviceId: '2',
        serviceName: 'Développeur Frontend',
        serviceList: [
            "Intégration des applications React JS à partir des maquettes FIGMA",
            "Création des applications react from cratch (conception , codage et deploiment) ",
            "Récupération des données auprès d'un backend API REST ou base de donnée Mongo DB  ",
            "Utilisation des gestionnaire d'etat redux toolkit et context API",
            "Maintenance et optimisation de performance des applications react Avec des testes sur des outils come lighthouse",
            "Documentation technique des application en Anglais"
        ]
    }

];

//portfolio content
const works = [
    {
        title: "AgentBank - s'authentifier sur une application bancaire  ",
        cover: "/assets/projects/agentbank.png",
        URL: "https://github.com/kenza15a/P13_agentbank_redux-frontend",
        technologies: ["React js", "Redux toolkit", "React router", "javascript", "css", "user authentification ", "jwt-Token", "mongodb", " méthode HTTP (ex. : GET, POST etc.) ", "Modéliser une API avec swagger"]
    },
    {
        title: "HRNET -application RH avec react ",
        cover: "/assets/projects/hrnet.png",
        URL: "https://github.com/kenza15a/P14-direct-hrnet-app",
        technologies: ["sass", "React ", " React router", "context API", "Api REST", "JSON", "web service", "Javascript", "css", "figma", "React hooks", "react npm library"]

    },
    {
        title: "Sportsee -Fitness dashboard ",
        cover: "/assets/projects/sportsee.png",
        URL: "https://github.com/kenza15a/P12_dashboard",
        technologies: ["HTML", "css", "react ", "figma", "svg", " React router", "APi REST", "mode développement et production", "JSON", "web service", "javascript", "css", "react hooks", "jsdoc"]

    },
    {
        title: "Photographers Gallery - pexels API  ",
        cover: "/assets/projects/next js gallery.png",
        URL: "https://github.com/kenza15a/next-js-gallery-from-pexels-api",
        technologies: ["NEXTjs", "css", "tailwindcss ", " nextjs Image component", "API", "Api Rest", "Typescript"]

    },
    {
        title: "La Kasa- application de ",
        cover: "/assets/projects/lakasa.png",
        URL: "https://github.com/kenza15a/p11_lakasa",
        technologies: ["HTML", "css", "react ", " React router", "JSON", "web service", "javascript", "Figma", "React hooks"]

    },
    {
        title: "Les petits plats - Moteur de recherche",
        cover: "/assets/projects/lespetitsplats.png",
        URL: "https://github.com/kenza15a/projet7_les_petits_plats",
        technologies: ["react", "redux", "router", "javascript arrays", "css", "API rest", "JSON", "Algorithmes de recherche"]

    },

    {
        title: "Fisheye - plateforme photographs",
        cover: "/assets/projects/fisheye.png",
        URL: "https://github.com/kenza15a/Front-End-Fisheye",
        technologies: ["webpack", "Accessibilté web", "javascript", "css", "maquette Figma"]

    },
    {
        title: "Oh My Food- Repertoire des restaurants ",
        cover: "/assets/projects/ohmyfood.png",
        URL: "https://github.com/kenza15a/P3_Oh_y_food",
        technologies: ["Maquette figma", "HTML", "SASS", "animations sass", "css", "integration d'une interface UX Responsive "]
    }

]

export { services, works };