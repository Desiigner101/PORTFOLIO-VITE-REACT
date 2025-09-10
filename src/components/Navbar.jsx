import { useEffect, useState } from "react";
import { cn } from "../lib/utils"
import { Menu, X } from "lucide-react";

//Navbar navigations
const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"}
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect (() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
            
            // Track active section
            const sections = navItems.map(item => item.href.substring(1)); // Remove # from href
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            
            if (currentSection) {
                setActiveSection(currentSection);
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav 
        className={cn(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled 
                ? "py-3 bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50" 
                : "py-5 bg-background/90 backdrop-blur-sm"
         )}
         >

            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center" 
                href="#hero"
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Desiigner</span> Portfolio
                    </span>
                </a>

                {/*desktop version navbar*/}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => {
                        const sectionId = item.href.substring(1); // Remove # from href
                        const isActive = activeSection === sectionId;
                        
                        return (
                            <a 
                            key={key} 
                            href={item.href} 
                            className={cn(
                                "transition-colors duration-300 relative group",
                                isActive 
                                    ? "text-primary" 
                                    : "text-foreground/80 hover:text-primary"
                            )}
                            >
                                {item.name}
                                <span className={cn(
                                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                                    isActive 
                                        ? "w-full" 
                                        : "w-0 group-hover:w-full"
                                )}></span>
                            </a>
                        );
                    })}
                </div>

                {/*mobile nav navbar*/}
                <button 
                onClick={() => setIsMenuOpen((prev) => !prev)} 
                className="md:hidden p-2 text-foreground z-50 hover:bg-muted/50 rounded-md transition-colors duration-200"
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>

                <div className={cn(
                    "fixed inset-0 bg-background/98 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen 
                    ? "opacity-100 pointer-events-auto" 
                    : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => {
                            const sectionId = item.href.substring(1); // Remove # from href
                            const isActive = activeSection === sectionId;
                            
                            return (
                                <a 
                                key={key} 
                                href={item.href} 
                                className={cn(
                                    "transition-colors duration-300 text-center py-2 px-4 rounded-md",
                                    isActive 
                                        ? "text-primary bg-muted/50" 
                                        : "text-foreground/80 hover:text-primary hover:bg-muted/50"
                                )}
                                onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
         </nav>
        );
};