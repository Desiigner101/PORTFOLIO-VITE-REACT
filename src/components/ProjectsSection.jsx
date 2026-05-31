import { useState } from "react"
import { ArrowRight, Download, ExternalLink, Github, Grid3x3, ImageOff, List } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Object-Oriented Programming 2 Project",
        description: "An OOP2 Project made by me and friends Daniel, Sophia, Ashley, Michelle and is also our finals project made with IntelliJ and Java, we also utilized libGDX as our game framework.",
        image: "/projects/OOP2_PROJECT_VORTEX1.png",
        tags: ["IntelliJ", "Java", "GitHub", "libGDX"],
        githubUrl: "https://github.com/Desiigner101/Vortex",
        hideDemo: true,
    },
    {
        id: 2,
        title: "Figma Mobile App Mockup Design",
        description: "A mockup design for my Platform-based Development class project made using Figma, and is very useful for my sequel project integrating the design into my mobile app project.",
        image: "/projects/FIGMA_PROJECT_GENBUILD.png",
        tags: ["Figma", "Canva"],
        demoUrl: "https://www.figma.com/proto/qKyHBP0uGtCZ8kGh8rk4FB/Mobile-App--GenBuild-?t=QnitkeHVnKmX60gI-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=89-452&starting-point-node-id=89%3A452",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "Android Mobile Application",
        description: "Final project for Mobile Development class, developed independently using Kotlin in Android Studio. This project marked my first solo application build and a key step in strengthening my mobile development skills.",
        image: "/projects/MOBILE_APP_PROJECT3.png",
        tags: ["Kotlin", "Android Studio", "GitHub"],
        demoUrl: "#",
        githubUrl: "https://github.com/Desiigner101/GenBuild",
    },
    {
        id: 4,
        title: "GenBuild POS v1.0",
        description: "A student-built Retail Billing Software inspired by my GenBuild app and Figma designs, my first ever POS system using React.js & Spring Boot, made as a humble step in learning full-stack development.",
        image: "/projects/genbuild_version1.png",
        tags: ["Django", "Python", "Javascript", "REST API"],
        demoUrl: "#",
        githubUrl: "https://github.com/Desiigner101/GENBUILD-POS",
        hideDemo: true,
    },
    {
        id: 5,
        title: "Stunotes",
        description: "A full-stack web application designed to help students manage academic tasks, deadlines, and notes in one platform. It allows users to create, edit, and track assignments, add class notes, and receive reminders for important school activities.",
        image: "/projects/stunotes.png",
        tags: ["Django", "Python", "Javascript", "REST API", "Cloudinary", "SupaBase"],
        demoUrl: "https://csit-327-g8-stunotes.vercel.app/",
        githubUrl: "https://github.com/Desiigner101/CSIT327-G8-STUNOTES",
    },
    {
        id: 6,
        title: "EquiTrack",
        description: "A full-stack financial-tracking web application powered by React & Vite on the frontend and Spring Boot on the backend. Features interactive dashboards, detailed visualizations, dynamic filters, and a sleek, responsive UI.",
        image: "/projects/Equitrack.png",
        tags: ["Springboot", "React", "Vite", "Java", "REST API", "PostgreSQL"],
        demoUrl: "https://equitrack-webapp.vercel.app/",
        githubUrl: "https://github.com/Desiigner101/EQUITRACK-WEBAPP",
    },
    {
        id: 7,
        title: "Quick Invoice Web App",
        description: "A full-stack invoice management web app built for Systems Integration (IT342). Users can create, edit, and manage invoices with 10 customizable templates, send them via email as PDFs, and unlock premium features through Stripe-powered subscriptions. Powered by a React + Vite frontend and a Spring Boot + MongoDB Atlas backend.",
        image: "/projects/quickinvoice_web.png",
        tags: ["React", "Vite", "Spring Boot", "MongoDB", "Stripe", "REST API"],
        demoUrl: "https://invoice-gen-beige.vercel.app/",
        githubUrl: "https://github.com/Desiigner101/INVOICE-GEN",
    },
    {
        id: 8,
        title: "Quick Invoice Mobile",
        description: "The Android companion to the QuickInvoice web app, built natively in Kotlin using MVP architecture. Features full invoice CRUD, 10 HTML invoice templates, email/PDF generation, and Stripe-powered subscription payments — all backed by the same Spring Boot + MongoDB Atlas API.",
        image: "/projects/quickinvoice_mobile.png",
        tags: ["Kotlin", "Android Studio", "Spring Boot", "Stripe", "Retrofit", "REST API"],
        demoUrl: "#",
        githubUrl: "https://github.com/Desiigner101/QUICKINVOICE-MOBILE",
        apkUrl: "/apks/quickinvoice.apk",
    },
    {
        id: 9,
        title: "AkAI LSTM Model",
        description: "The deep-learning core of AkAI — an LSTM-based recognition model that classifies Filipino Sign Language gestures in near real-time. Built with TensorFlow/Keras and MediaPipe Holistic for hand and pose landmark extraction, trained on the FSL-105 dataset.",
        image: "/projects/akai_model.png",
        tags: ["Python", "TensorFlow", "Keras", "MediaPipe", "LSTM", "OpenCV"],
        demoUrl: "#",
        githubUrl: "https://github.com/Desiigner101/linkfsl-model",
        hideDemo: true,
    },
    {
        id: 10,
        title: "AkAI",
        description: "A two-way Filipino Sign Language communication assistant designed to bridge conversations between Deaf and hearing users on a single device. Combines real-time sign-to-text recognition with speech-to-text to create a shared conversation thread. My capstone project (IT332).",
        image: "/projects/akai.png",
        tags: ["Kotlin", "Vosk", "MediaPipe", "Offline", "Speech-to-Text"],
        demoUrl: "#",
        githubUrl: "https://github.com/Desiigner101/AkAI-Android",
        apkUrl: "https://github.com/Desiigner101/AkAI-Android/releases/latest/download/akai.apk",
    },
]

const ProjectImage = ({ project, className }) => {
    if (project.isPlaceholder || !project.image) {
        return (
            <div className={`flex flex-col items-center justify-center gap-2 bg-muted/50 ${className}`}>
                <ImageOff className="h-8 w-8 text-muted-foreground/30" />
                <span className="text-xs text-muted-foreground/40 font-medium">Image coming soon</span>
            </div>
        )
    }
    return (
        <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${className}`}
        />
    )
}

export const ProjectsSections = () => {
    const [viewMode, setViewMode] = useState("grid")

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-7xl">

                <div className="text-center mb-16 reveal">
                    <p className="section-label mb-3">What I&apos;ve Built</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        A glimpse into some projects I&apos;ve worked on while learning and growing.
                        Each one reflects the skills I&apos;ve gained and the lessons that continue to shape me.
                    </p>

                    {/* View toggle */}
                    <div className="flex items-center justify-center gap-2">
                        <button
                            onClick={() => setViewMode("grid")}
                            className={`p-2.5 rounded-lg border transition-all duration-200 ${
                                viewMode === "grid"
                                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
                            }`}
                            aria-label="Grid view"
                        >
                            <Grid3x3 size={18} />
                        </button>
                        <button
                            onClick={() => setViewMode("list")}
                            className={`p-2.5 rounded-lg border transition-all duration-200 ${
                                viewMode === "list"
                                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
                            }`}
                            aria-label="List view"
                        >
                            <List size={18} />
                        </button>
                    </div>
                </div>

                {/* Grid view */}
                {viewMode === "grid" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="group bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <ProjectImage project={project} className="h-full" />
                                    {!project.isPlaceholder && (
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    )}
                                </div>

                                <div className="p-5 flex flex-col flex-grow">
                                    <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                                        {project.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                                        {project.description}
                                    </p>

                                    {project.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {project.tags.slice(0, 4).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-0.5 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                            {project.tags.length > 4 && (
                                                <span className="px-2 py-0.5 text-xs text-muted-foreground">
                                                    +{project.tags.length - 4}
                                                </span>
                                            )}
                                        </div>
                                    )}

                                    <div className="flex gap-2 pt-3 border-t border-border/30 mt-auto">
                                        {project.apkUrl ? (
                                            <a
                                                href={project.apkUrl}
                                                download
                                                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all duration-200"
                                            >
                                                <Download size={13} />
                                                Get APK
                                            </a>
                                        ) : !project.hideDemo ? (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all duration-200"
                                            >
                                                <ExternalLink size={13} />
                                                Demo
                                            </a>
                                        ) : null}
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-muted hover:bg-muted/80 text-foreground rounded-lg transition-all duration-200"
                                        >
                                            <Github size={13} />
                                            Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* List view */}
                {viewMode === "list" && (
                    <div className="space-y-5">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="group bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                            >
                                <div className="flex flex-col md:flex-row">
                                    <div className="relative md:w-72 h-48 md:h-auto overflow-hidden flex-shrink-0">
                                        <ProjectImage project={project} className="h-full md:h-full" />
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                                            {project.title}
                                        </h3>

                                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                                            {project.description}
                                        </p>

                                        {project.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        <div className="flex gap-3 mt-auto">
                                            {project.apkUrl ? (
                                                <a
                                                    href={project.apkUrl}
                                                    download
                                                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all duration-200"
                                                >
                                                    <Download size={14} />
                                                    Download APK
                                                </a>
                                            ) : !project.hideDemo ? (
                                                <a
                                                    href={project.demoUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all duration-200"
                                                >
                                                    <ExternalLink size={14} />
                                                    View Demo
                                                </a>
                                            ) : null}
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-muted hover:bg-muted/80 text-foreground rounded-lg transition-all duration-200"
                                            >
                                                <Github size={14} />
                                                View Code
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
                        className="cosmic-button"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/Desiigner101"
                    >
                        Check My GitHub
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                </div>

            </div>
        </section>
    )
}
