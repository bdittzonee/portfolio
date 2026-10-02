// =====================================================
// PUSAT KONTEN WEBSITE — semua edit di sini
// =====================================================

export const profile = {
    firstName: "Raditya",
    lastName: "Hafisabyanka",
    role: "Information Systems Student",
    tagline: "Turning ideas into meaningful digital experiences.",
    email: "radityahafisabyanka@gmail.com",
    location: "Indonesia",
};

export const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export const marqueeSkills = [
    "HTML", "CSS", "JavaScript", "React", "Python", "C++",
    "Java", "MySQL", "MongoDB", "Figma", "UI/UX",
];

export const socials = [
    { label: "GitHub", href: "https://github.com/bdittzonee" },
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Email", href: "mailto:radityahafisabyanka@gmail.com" },
];

export const about = {
    intro:
        "I'm an Information Systems student exploring technology, design, and digital experiences.",
    description:
        "I enjoy learning how technology can be used to solve problems and create useful experiences. This portfolio is a place where I showcase my journey, projects, and things I'm learning.",
    details: [
        { label: "Based in", value: "Indonesia" },
        { label: "Focus", value: "Technology & Design" },
        { label: "Currently", value: "Learning & Building" },
    ],
    photo: "/images/profile.jpg",
};

export const skills = [
    {
        category: "Web Development",
        items: [
            { name: "HTML", level: 85 },
            { name: "CSS", level: 80 },
            { name: "JavaScript", level: 65 },
        ],
    },
    {
        category: "Programming",
        items: [
            { name: "Python", level: 70 },
            { name: "C++", level: 75 },
            { name: "Java", level: 60 },
        ],
    },
    {
        category: "Database",
        items: [
            { name: "MySQL", level: 75 },
            { name: "MongoDB", level: 60 },
        ],
    },
    {
        category: "Design",
        items: [
            { name: "Figma", level: 75 },
            { name: "Canva", level: 80 },
            { name: "UI / UX", level: 70 },
        ],
    },
];

export const projects = [
    {
        id: "personal-portfolio",
        number: "01",
        category: "Web Development",
        title: "Personal Portfolio",
        description:
            "An interactive personal portfolio website designed with an animated starfield experience, smooth transitions, and modern visual effects.",
        tags: ["HTML", "CSS", "JavaScript"],
        image: "/images/project/portfolio.png",
        github: "https://github.com/bdittzonee/portfolio",
        live: "https://portfolio-sigma-five-tw2iqf7t3w.vercel.app",
    },
    {
        id: "barbershop",
        number: "02",
        category: "Desktop Application",
        title: "Barbershop Management System",
        description:
            "A desktop application for managing customers, transactions, stock, and barber shop revenue.",
        tags: ["C++", "GUI", "Linked List"],
        image: "/images/project/barbershop.png",
        github: null,
        live: null,
    },
    {
        id: "minesweeper",
        number: "03",
        category: "Java Game",
        title: "Minesweeper",
        description:
            "A 20×20 Minesweeper game developed using Java and Greenfoot with interactive gameplay and restart functionality.",
        tags: ["Java", "Greenfoot", "Game"],
        image: "/images/project/minesweeper.png",
        github: null,
        live: null,
    },
];

export const timeline = [
    {
        year: "2025",
        title: "Started the Journey",
        description:
            "Began studying Information Systems — learning programming fundamentals, databases, and web development basics.",
    },
    {
        year: "2025",
        title: "Building Real Projects",
        description:
            "Created desktop applications with C++, a Java game, and started building modern web experiences.",
    },
    {
        year: "2026",
        title: "Current Journey",
        description:
            "Deepening React, UI/UX, and building this portfolio. Always learning, always building.",
        isNow: true,
    },
];

export const contact = {
    heading1: "Let's build",
    heading2: "something together",
    message:
        "Feel free to reach out if you want to collaborate, discuss a project, or just say hello.",
    formspree: "https://formspree.io/f/mzezqoza",
};