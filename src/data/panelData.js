export const PANEL_DATA = {
  projects: {
    title: "File Explorer",

    folders: [
      {
        name: "3D Portfolio",
        status: "Complete",
        image: "/images/portfolio.png",
        tech: [
            "React",
            "R3F",
            "Three.js",
            "Blender",
            "Vite",
        ],
        description: "Interactive cyberpunk portfolio built with React Three Fiber and Blender."
      },

      {
        name: "Healthcare CRM",
        status: "Complete",
        image: "/images/crm.png",
        tech: [
            "React",
            "Spring Boot",
            "MySQL",
        ],
        description: "Healthcare management system for appointments, patients and doctors.",
      },

      {
        name: "Autonomous Car AI",
        status: "Complete",
        image:"/images/placeholder.png",
        tech: [
            "Python",
            "PyTorch",
            "DDQN",
            "OpenCV",
        ],
        description: "Self-driving car trained using Double Deep Q-Network reinforcement learning.",
      },

      {
        name: "Agentic AI Assistant",
        status: "Complete",
        image: "/images/chatbot.png",
        tech: [
            "Python",
            "LangGraph",
            "RAG",
            "LLM",
        ],
        description: "AI assistant with memory, tools and autonomous task execution capabilities.",
      },
    ],
  },

  skills: {
    title: "CPU Diagnostics",

    categories: [{
        title: "Languages",
        modules: [
            {
            name: "JAVA_CORE.dll",
            level: 60,
            status: "LEARNING",
            description:
                "Primary language used for OOP, DSA and academic projects.",
            },

            {
            name: "C_RUNTIME.dll",
            level: 55,
            status: "STABLE",
            description:
                "Memory management, pointers, linked lists and system fundamentals.",
            },

            {
            name: "PYTHON_ENGINE.dll",
            level: 65,
            status: "STABLE",
            description:
                "Automation, AI experiments and scripting.",
            },
        ]},

        {title: "Databases",
        modules: [

            {
            name: "SQL_DATABASE.dll",
            level: 55,
            status: "STABLE",
            description:
                "Database design, queries and relational systems.",
            },
        ]},

        {title: "Frontend & Frameworks",
        modules: [

            {
            name: "REACT_FRAMEWORK.dll",
            level: 65,
            status: "LEARNING",
            description:
                "Frontend applications and modern UI development.",
            },

            {
            name: "THREEJS_RENDERER.dll",
            level: 60,
            status: "ACTIVE",
            description:
                "3D web experiences and scene rendering.",
            },

            {
            name: "R3F_INTERFACE.dll",
            level: 50,
            status: "LEARNING",
            description:
                "React Three Fiber workflow and interactive 3D systems.",
            },
        ]},

        {title: "Backend",
        modules: [

            {
            name: "SPRINGBOOT_SERVER.dll",
            level: 50,
            status: "LEARNING",
            description:
                "REST APIs and backend application development.",
            },
        ]},

        {title: "3D & Design",
        modules: [

            {
            name: "BLENDER_3D.dll",
            level: 70,
            status: "ACTIVE",
            description:
                "3D modelling, materials, baking and scene creation.",
            },

            {
            name: "SOLIDWORKS_3D.dll",
            level: 65,
            status: "STABLE",
            description:
                "3D modelling, materials, tool creation.",
            },
        ]},
    ]
    },

    timeline: {
        title: "Timeline",
        modules:
        [
            {
            year: "2005",
            title: "BORN",
            description:
                "Saw big machines and became fascinated by how things work."
            },

            {
            year: "2021",
            title: "11TH GRADE",
            description:
                "Executed my first line of code."
            },

            {
            year: "2022",
            title: "12TH GRADE",
            description:
                "Became interested in programming and IT."
            },

            {
            year: "2023",
            title: "B.TECH (IT)",
            description:
                "Started with C and programming fundamentals."
            },

            {
            year: "2024",
            title: "JAVA • OOP • DSA • CAD",
            description:
                "Built strong programming foundations and started design work."
            },

            {
            year: "2025",
            title: "DATABASES • BACKEND • FRONTEND",
            description:
                "Expanded into full-stack development."
            },

            {
            year: "2026",
            title: "REACT • R3F • BLENDER",
            description:
                "Started building interactive 3D experiences."
            }
        ]
    },
    futuregoals: {
    title: "Future Systems",

    modules: [
        {
        id: "unknown",
        title: "UNKNOWN MODULE",
        status: "???",
        description:
            "Future destination unavailable. Additional data required.",
        },

        {
        id: "ai",
        title: "AI SYSTEMS",
        status: "LOCKED",
        description:
            "Exploration of intelligent systems, agents and machine learning.",
        },

        {
        id: "robotics",
        title: "ROBOTICS",
        status: "LOCKED",
        description:
            "Automation, hardware integration and real-world systems.",
        },

        {
        id: "systems",
        title: "SYSTEM DESIGN",
        status: "LOCKED",
        description:
            "Building scalable and reliable architectures.",
        },

        {
        id: "products",
        title: "PRODUCTS & STARTUPS",
        status: "LOCKED",
        description:
            "Transforming ideas into real products and ventures.",
        },
    ],
    },
    learning: {
    title: "Knowledge Terminal",

    categories: [
        {
        id: "web",
        title: "WEB DEVELOPMENT",

        status: "EXPLORING",

        description:
            "Modern frontend development, component architecture and application design.",

        topics: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Vite",
        ],
        },

        {
        id: "r3f",
        title: "REACT & R3F",

        status: "RESEARCHING",

        description:
            "Interactive 3D experiences using React Three Fiber and Three.js.",

        topics: [
            "R3F",
            "Three.js",
            "Shaders",
            "Interaction Systems",
            "Post Processing",
        ],
        },

        {
        id: "java",
        title: "JAVA",

        status: "EXPANDING",

        description:
            "Object-oriented programming, design principles and software fundamentals.",

        topics: [
            "OOP",
            "Collections",
            "Interfaces",
            "Exception Handling",
            "Multithreading",
        ],
        },

        {
        id: "dsa",
        title: "DATA STRUCTURES",

        status: "EXPANDING",

        description:
            "Problem solving and algorithmic thinking.",

        topics: [
            "Arrays",
            "Linked Lists",
            "Stacks",
            "Queues",
            "Trees",
        ],
        },

        {
        id: "database",
        title: "DATABASES",

        status: "EXPLORING",

        description:
            "Relational database systems and query optimization.",

        topics: [
            "SQL",
            "Joins",
            "Normalization",
            "ER Models",
        ],
        },

        {
        id: "blender",
        title: "BLENDER & 3D",

        status: "EXPANDING",

        description:
            "3D modelling, UV workflows, baking and optimization.",

        topics: [
            "Modeling",
            "Materials",
            "UV Mapping",
            "Texture Baking",
        ],
        },

        {
        id: "systemdesign",
        title: "SYSTEM DESIGN",

        status: "RESEARCHING",

        description:
            "Scalable systems, architecture patterns and infrastructure concepts.",

        topics: [
            "Load Balancing",
            "Caching",
            "Databases",
            "Microservices",
        ],
        },

        {
        id: "ai",
        title: "AI & AUTOMATION",

        status: "RESEARCHING",

        description:
            "Agents, LLM systems, automation and intelligent workflows.",

        topics: [
            "LLMs",
            "RAG",
            "Agents",
            "Automation",
        ],
        },
    ],
    },
};