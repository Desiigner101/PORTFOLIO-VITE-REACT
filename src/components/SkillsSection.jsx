import { useState } from "react";
import { cn } from "../lib/utils";

// Logos come from devicon (https://devicon.dev) via jsDelivr CDN, no install
// needed, just image URLs. `icon` is the devicon slug; a few tools that aren't
// in devicon fall back to a Simple Icons badge or no logo.
const dv = (slug, variant = "original") =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`;

const skills = [
    { name: "HTML/CSS", category: "frontend", icon: dv("html5") },
    { name: "JavaScript", category: "frontend", icon: dv("javascript") },
    { name: "React", category: "frontend", icon: dv("react") },
    { name: "Tailwind CSS", category: "frontend", icon: dv("tailwindcss") },
    { name: "Vite", category: "frontend", icon: dv("vitejs") },

    { name: "Spring Boot", category: "backend", icon: dv("spring") },
    { name: "Django", category: "backend", icon: dv("django", "plain") },
    { name: "Node.js", category: "backend", icon: dv("nodejs") },
    { name: "MongoDB", category: "backend", icon: dv("mongodb") },
    { name: "MySQL", category: "backend", icon: dv("mysql") },
    { name: "PostgreSQL", category: "backend", icon: dv("postgresql") },
    { name: "REST API", category: "backend", icon: dv("fastapi") },

    { name: "TensorFlow", category: "machine learning", icon: dv("tensorflow") },
    { name: "Keras", category: "machine learning", icon: dv("keras") },
    { name: "MediaPipe", category: "machine learning", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg" },
    { name: "OpenCV", category: "machine learning", icon: dv("opencv") },
    { name: "NumPy", category: "machine learning", icon: dv("numpy") },
    { name: "scikit-learn", category: "machine learning", icon: dv("scikitlearn") },

    { name: "Python", category: "languages", icon: dv("python") },
    { name: "C", category: "languages", icon: dv("c") },
    { name: "Java", category: "languages", icon: dv("java") },
    { name: "Kotlin", category: "languages", icon: dv("kotlin") },

    { name: "Git / GitHub", category: "tools", icon: dv("git") },
    { name: "Postman", category: "tools", icon: dv("postman") },
    { name: "Figma", category: "tools", icon: dv("figma") },
    { name: "Android Studio", category: "tools", icon: dv("androidstudio") },
    { name: "VS Code", category: "tools", icon: dv("vscode") },
    { name: "IntelliJ IDEA", category: "tools", icon: dv("intellij") },
];

const categories = ["all", "frontend", "backend", "machine learning", "languages", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-4xl">

                <div className="text-center mb-16 reveal">
                    <p className="section-label mb-3">What I Work With</p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        My <span className="text-primary">Skills</span>
                    </h2>
                </div>

                {/* Category filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-12 reveal reveal-delay-1">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground shadow-sm"
                                    : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap justify-center gap-3 reveal reveal-delay-2">
                    {filteredSkills.map((skill) => (
                        <span
                            key={skill.name}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border/60 bg-card/80 text-sm font-medium
                                       hover:border-primary/50 hover:text-primary hover:bg-primary/5
                                       transition-all duration-200 cursor-default"
                        >
                            {skill.icon && (
                                <img
                                    src={skill.icon}
                                    alt=""
                                    aria-hidden="true"
                                    loading="lazy"
                                    className="h-5 w-5 object-contain"
                                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                                />
                            )}
                            {skill.name}
                        </span>
                    ))}
                </div>

            </div>
        </section>
    );
};
