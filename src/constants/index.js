import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },/*
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },*/
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },/*
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },*/
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    }];/*
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
]*/


export const experiences = [
    {
        title: "Unity Game developer",
        company_name: "Freelance",
      //  icon: starbucks,
        //iconBg: "#accbe1",
        date: "March 2018 - April 201",
        points: [
            "Creating and managing 3D game applications using Unity and associated technologies.",
            "Working collaboratively with multidisciplinary teams, including game designers, project managers, and fellow developers, to produce top-notch gaming experiences.",
            "Implementing 3D graphics, animations, and interactive features for an immersive gaming environment.",
            "Engaging in code reviews and offering valuable feedback to enhance the overall quality of game development.",
        ],
    },
    {
        title: "Web developerr ",
        company_name: "Walk the wok",
   //     icon: tesla,
     //   iconBg: "#fbc3bc",
        date: "Nov 2023 - Jan 2024",
        points: [
            "Designing and managing restaurant websites through the development of web applications using React.js and complementary technologies.",
            "Working closely with diverse teams, including designers, product managers, and other developers, to craft seamless and visually appealing online platforms for restaurants.",
            "Implementing responsive web design to ensure optimal user experience across various devices, and ensuring compatibility with multiple web browsers.",
            "Actively engaging in code reviews, fostering a collaborative environment, and offering constructive feedback to enhance the overall quality of the restaurant website development process.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Snapgram",
       // icon: shopify,
      //  iconBg: "#b7e4c7",
        date: "march 2023 - Jan 2024",
        points: [
            "Collaborating closely with the client to understand their specific requirements and objectives for the social media web application.",
            "Utilizing the AppWrite framework to establish and manage the database, ensuring efficient data storage and retrieval.",
            "Designing and developing the web application with a focus on creating a seamless and engaging user experience for social interactions.",
            "Implementing features that facilitate user interactions, content sharing, and community engagement within the social media platform.",
            "Deploying the completed web application on the internet to make it accessible to users worldwide.",
            "Providing ongoing support and maintenance to address any issues and enhance the functionality of the deployed social media web app."
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "AI CHAT BOT DEVELOPER",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Collaborating closely with the client to understand their requirements and vision for the website.",
            "Building and customizing the website, incorporating an AI bot powered by the OpenAI API to enhance user interaction.",
            "Ensuring seamless integration and functionality of the AI bot within the website's design and user experience.",
            "Regularly communicating with the client to gather feedback, address concerns, and make any necessary adjustments to meet their expectations.",
            "Providing ongoing support and maintenance to ensure the optimal performance of the website and the integrated AI bot."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Zahooruddin-dev',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: './contact',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Image Cropper',
        description: "Developed a web application that enables users to crop and edit images with ease. The user-friendly interface allows for precise cropping, ensuring users can create visually appealing and customized images. Additionally, the application provides various editing tools for further refinement. Perfect for anyone looking to enhance and tailor their images effortlessly.",
        link: 'https://github.com/Zahooruddin-dev/Crop-Image',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/Zahooruddin-dev/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Job hunting Web App',
        description: "Developed a web application tailored for job hunting, streamlining the job search process and connecting job seekers with potential employers. This user-friendly platform offers intuitive features for browsing and applying to job listings, providing a comprehensive solution for individuals navigating the competitive job market.",
        link: 'https://github.com/Zahooruddin-dev/MIZUKA_JOB_HUNT',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'snapgram.vercel.app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: "Crafted an AI-powered chat bot web application utilizing the OpenAI API. This advanced system engages users in natural and dynamic conversations, offering an intelligent interface for interactive dialogues. Ideal for businesses and individuals seeking to enhance user engagement, the chat bot delivers informed and personalized interactions, making it a valuable tool for various applications.",
        link: 'https://github.com/Zahooruddin-dev/ZAHOOR',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/Zahooruddin-dev/AI_ARTICLE-SUMMARIZER',
    }
];