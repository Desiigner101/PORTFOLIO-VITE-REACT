import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    //Frontend
    {name: "HTML/CSS", level: 40, category: "frontend"},
    {name: "JavaScript", level: 20, category: "frontend"}, 
    {name: "React", level: 20, category: "frontend"}, 
    {name: "Tailwind CSS", level: 30, category: "frontend"}, 
    {name: "Vite", level: 35, category: "frontend"}, 
    
    //Backend
    {name: "Node.js", level: 20, category: "backend"}, 
    {name: "Apache", level: 15, category: "backend"}, 
    {name: "MongoDB", level: 8, category: "backend"}, 
    
    //Languages
    {name: "Python", level: 60, category: "languages"}, 
    {name: "C", level: 51, category: "languages"}, 
    {name: "Java", level: 55, category: "languages"},
    {name: "Kotlin", level: 30, category: "languages"}, 

    
    //Tools
    {name: "Git/GitHub", level: 90, category: "tools"}, 
    {name: "Postman", level: 45, category: "tools"}, 
    {name: "Figma", level: 85, category: "tools"}, 
    {name: "Android Studio", level: 77, category: "tools"},
    {name: "VS Code", level: 97, category: "tools"}, 
    {name: "IntelliJ IDEA", level: 87, category: "tools"},
    
];

const categories = ["all", "frontend", "backend", "languages", "tools"];



export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory
);

    return (
    <section 
    id="skills" 
    className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button 
                    key={key} 
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                        "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory == category 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-secondary/70 text-foreground hover:bd-secondary"
                    )}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div 
                    key={key} 
                    className="p-6 rounded-lg shadow-xs card-hover gradient-border"
                    >
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>

                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div 
                            className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                            style={{ width: skill.level + "%" }}
                            />
                        </div>
                        
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    </section>
    );
};