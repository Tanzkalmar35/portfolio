export const navItems = [
    {name: "About", link: "#about"},
    {name: "Projects", link: "#projects"},
    {name: "Contact", link: "#contact"},
];

export const gridItems = [
    {
        id: 1,
        title: "I enjoy building applications that make life easier",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "Working with people from all around the world",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "Constantly trying to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building an automated desktop calendar app",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "Mine",
        des: "A desktop app that helps you keep track of your projects and tasks.",
        img: "/mock_mine.png",
        style: "",
        iconLists: ["/rs.svg", "/tail.svg", "/html.svg", "/ts.svg", "/tauri.svg", "/firebase.svg"],
        link: "https://github.com/Tanzkalmar35/mine",
    },
    {
        id: 2,
        title: "Korte Garten- und Landschaftsbau",
        des: "A website for a landscaping company in my area, built with Svelte and Tailwindcss",
        img: "/kglb.png",
        style: "",
        iconLists: ["/tail.svg", "/ts.svg", "/svelte.svg", "/netlify.svg", "/gsap.svg"],
        link: "https://korte-gartenbau.com/",
    },
    {
        id: 3,
        title: "Bürgerverein Büttel und Umgebung",
        des: "A website for the community association of the village I live in and the ones around it.",
        img: "/buettel.png",
        style: "scale-100 w-full h-full",
        iconLists: ["/tail.svg", "/ts.svg", "/html.svg", "/netlify.svg", "/gsap.svg"],
        link: "Unavailable",
    },
    {
        id: 4,
        title: "Scheduleflow",
        des: "An automated calendar desktop app that helps you manage your schedule.",
        img: "/scheduleflow.png",
        style: "scale-110",
        iconLists: ["/rs.svg", "/tail.svg", "/html.svg", "/ts.svg", "/tauri.svg", "/psql.svg"],
        link: "https://github.com/Tanzkalmar35/scheduleflow",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Java / JavaScript Developer",
        desc: "Working in a small developer team to create a complex web application for an international client.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Doing automated testing",
        desc: "Writing automated tests for a complex web application using Java and Selenium.",
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Desktop app Developer",
        desc: "Creating Desktop applications using Tauri with a Rust backend in my free time.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
    {
        id: 4,
        title: "Web Developer",
        desc: "Designed and created a digital presence for local businesses.",
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/Tanzkalmar35"
    },
];
