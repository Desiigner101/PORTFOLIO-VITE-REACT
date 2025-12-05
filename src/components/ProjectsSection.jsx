import { useState } from "react"
import { ArrowRight, ExternalLink, Github, Grid3x3, List } from "lucide-react"

const projects = [
    {
        id:1,
        title:  "Object-Oriented Programming 2 Project",
        description: "An OOP2 Project made by me and friends Daniel, Sophia, Ashley, Michelle and is also our finals project made with IntelliJ and Java, we also utilized libGDX as our game framework.",
        image: "/projects/OOP2_PROJECT_VORTEX1.png",
        tags: ["IntelliJ", "Java", "GitHub", "libGDX"],
        demoUrl: "#",
        githubUrl: "https://github.com/Desiigner101/Vortex",

    },

    {
        id:2,
        title:  "Figma Mobile App Mockup Design",
        description: "A mockup design for my Platform-based Development(Multimedia) class project made using figma, and is very useful for my sequel project integrating the design into my mobile app project.",
        image: "/projects/FIGMA_PROJECT_GENBUILD.png",
        tags: ["Figma", "Canva"],
        demoUrl: "https://www.figma.com/proto/qKyHBP0uGtCZ8kGh8rk4FB/Mobile-App--GenBuild-?t=QnitkeHVnKmX60gI-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=89-452&starting-point-node-id=89%3A452",
        githubUrl: "#",

    },

    {
        id:3,
        title:  "Android Mobile Application",
        description: "Final project for Mobile Development class, developed independently using Kotlin in Android Studio. This project marked my first solo application build and a key step in strengthening my mobile development skills.",
        image: "/projects/MOBILE_APP_PROJECT3.png",
        tags: ["Kotlin", "Android Studio", "GitHub"],
        demoUrl: "#",
        githubUrl: "https://github.com/Desiigner101/GenBuild",

    },

    {
        id:4,
        title:  "GenBuild POS v1.0",
        description: "A student-built Retail Billing Software inspired by my GenBuild app and Figma designs, my first ever POS system using React.js & Spring Boot, made as a humble step in learning full-stack development.",
        image: "/projects/genbuild_version1.png",
        tags: ["Django", "Python", "Javascript", "REST API"],
        demoUrl: "#",
        githubUrl: "https://github.com/Desiigner101/GENBUILD-POS",

    },

    {
        id:5,
        title:  "Stunotes",
        description: "A full-stack web application designed to help students manage academic tasks, deadlines, and notes in one platform. It allows users to create, edit, and track assignments, add class notes, and receive reminders for important school activities. This system promotes organization, time management, and academic productivity.",
        image: "/projects/stunotes.png",
        tags: ["Django", "Python", "Javascript", "REST API", "Cloudinary", "SupaBase"],
        demoUrl: "https://csit-327-g8-stunotes.vercel.app/",
        githubUrl: "https://github.com/Desiigner101/CSIT327-G8-STUNOTES",

    },
    {
        id:6,
        title:  "EquiTrack",
        description: "A full-stack financial-tracking web application powered by React & Vite on the frontend and Spring Boot on the backend. Users can manage income, expenses, budgets, and multiple wallets through a seamless REST API. Featuring interactive dashboards, detailed visualizations, dynamic filters, and a sleek, responsive UI, this app delivers a fast and intuitive way to monitor personal finances.",
        image: "/projects/Equitrack.png",
        tags: ["Springboot", "React", "Vite", "Javascript", "Java", "REST API", "Cloudinary", "Brevo", "PostgreSQL"],
        demoUrl: "https://equitrack-webapp.vercel.app/",
        githubUrl: "https://github.com/Desiigner101/EQUITRACK-WEBAPP",

    },

    
]

export const ProjectsSections = () => {
    const [viewMode, setViewMode] = useState("grid") // "grid" or "list"

    return <section id="projects" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4"> 
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8">
                    A glimpse into some projects I've worked on while learning and growing. 
                    Each one reflects the skills I've gained and the lessons that continue to shape me as a student.
                </p>

                {/* View Toggle */}
                <div className="flex items-center justify-center gap-2 mb-8">
                    <button
                        onClick={() => setViewMode("grid")}
                        className={`p-3 rounded-lg transition-all duration-200 ${
                            viewMode === "grid" 
                                ? "bg-primary text-primary-foreground shadow-lg scale-105" 
                                : "bg-muted hover:bg-primary/10 hover:text-primary hover:scale-105 text-muted-foreground"
                        }`}
                        aria-label="Grid View"
                    >
                        <Grid3x3 size={20} />
                    </button>
                    <button
                        onClick={() => setViewMode("list")}
                        className={`p-3 rounded-lg transition-all duration-200 ${
                            viewMode === "list" 
                                ? "bg-primary text-primary-foreground shadow-lg scale-105" 
                                : "bg-muted hover:bg-primary/10 hover:text-primary hover:scale-105 text-muted-foreground"
                        }`}
                        aria-label="List View"
                    >
                        <List size={20} />
                    </button>
                </div>
            </div>

            {/* Grid View */}
            {viewMode === "grid" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            className="group bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex flex-col h-full"
                        > 
                            <div className="relative h-48 overflow-hidden bg-muted">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div className="p-5 flex flex-col flex-grow">
                                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </h3>
                                
                                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
                                        <span 
                                            key={tagIndex} 
                                            className="px-2.5 py-1 text-xs font-medium border border-primary/20 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 4 && (
                                        <span className="px-2.5 py-1 text-xs font-medium text-muted-foreground">
                                            +{project.tags.length - 4}
                                        </span>
                                    )}
                                </div>

                                <div className="flex gap-3 mt-auto pt-4 border-t border-border/30">
                                    <a 
                                        href={project.demoUrl} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all duration-200 hover:scale-105"
                                        aria-label="View Demo"
                                    >
                                        <ExternalLink size={16}/>
                                        <span>Demo</span>
                                    </a>

                                    <a 
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-muted hover:bg-muted/80 text-foreground rounded-lg transition-all duration-200 hover:scale-105"
                                        aria-label="View GitHub"
                                    >
                                        <Github size={16}/>
                                        <span>Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* List View */}
            {viewMode === "list" && (
                <div className="space-y-6">
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            className="group bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                        >
                            <div className="flex flex-col md:flex-row">
                                <div className="relative md:w-80 h-48 md:h-auto overflow-hidden bg-muted flex-shrink-0">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span 
                                                key={tagIndex} 
                                                className="px-3 py-1 text-xs font-medium border border-primary/20 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-3 mt-auto">
                                        <a 
                                            href={project.demoUrl} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all duration-200 hover:scale-105"
                                            aria-label="View Demo"
                                        >
                                            <ExternalLink size={16}/>
                                            <span>View Demo</span>
                                        </a>

                                        <a 
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-muted hover:bg-muted/80 text-foreground rounded-lg transition-all duration-200 hover:scale-105"
                                            aria-label="View GitHub"
                                        >
                                            <Github size={16}/>
                                            <span>View Code</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="text-center mt-16">
                <a 
                    className="cosmic-button inline-flex items-center gap-2 group" 
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Desiigner101"
                >
                    Check My Github 
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200"/>
                </a>
            </div>
        </div>
    </section>
}