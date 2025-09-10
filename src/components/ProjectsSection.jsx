import { ArrowRight, ExternalLink, Github } from "lucide-react"

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
        title:  "GENBUILD-POS",
        description: "Final project for Mobile Development class, developed independently using Kotlin in Android Studio. This project marked my first solo application build and a key step in strengthening my mobile development skills.",
        image: "/projects/MOBILE_APP_PROJECT3.png",
        tags: ["Kotlin", "Android Studio", "GitHub"],
        demoUrl: "#",
        githubUrl: "https://github.com/Desiigner101/GenBuild",

    },

    
]

export const ProjectsSections = () => {

    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                A glimpse into some projects I’ve worked on while learning and growing. 
                Each one reflects the skills I’ve gained and the lessons that continue to shape me as a student.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="bg-primary group-bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        > 

                            <div className="group h-50 overflow-hidden">
                                <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-120"/>
                            </div>

                            <div className="p-6 bg-primary">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            

                            <h3 className="=text-xl font-semibold mb-1">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-5">
                                {project.description}
                            </p>

                            <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a 
                                        href={project.demoUrl} 
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20}/>
                                        </a>

                                        <a 
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

            <div className="text-center mt-12">
                    <a 
                    className="cosmic-button w-fit flex items-center mx-auto" 
                    target="_blank"
                    href="https://github.com/Desiigner101">
                        Check My Github <ArrowRight size={16}/>
                    </a>
            </div>
        </div>
    </section>
}