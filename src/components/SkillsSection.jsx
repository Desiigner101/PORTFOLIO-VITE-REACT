import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    { name: "HTML/CSS", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "Vite", category: "frontend" },

    { name: "Node.js", category: "backend" },
    { name: "Apache", category: "backend" },
    { name: "MongoDB", category: "backend" },

    { name: "Python", category: "languages" },
    { name: "C", category: "languages" },
    { name: "Java", category: "languages" },
    { name: "Kotlin", category: "languages" },

    { name: "Git / GitHub", category: "tools" },
    { name: "Postman", category: "tools" },
    { name: "Figma", category: "tools" },
    { name: "Android Studio", category: "tools" },
    { name: "VS Code", category: "tools" },
    { name: "IntelliJ IDEA", category: "tools" },
];

const categories = ["all", "frontend", "backend", "languages", "tools"];

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
                            className="px-5 py-2.5 rounded-lg border border-border/60 bg-card/80 text-sm font-medium
                                       hover:border-primary/50 hover:text-primary hover:bg-primary/5
                                       transition-all duration-200 cursor-default"
                        >
                            {skill.name}
                        </span>
                    ))}
                </div>

            </div>
        </section>
    );
};
