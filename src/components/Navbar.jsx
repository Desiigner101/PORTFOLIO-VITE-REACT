import { useEffect, useState } from "react";
import { cn } from "../lib/utils"
import { Menu, X } from "lucide-react";

//Navbar navigations
const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contacts", href: "#contacts"}
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect (() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
            
            // Track active section with better logic
            const sections = navItems.map(item => item.href.substring(1));
            
            // Find which section is currently in view
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Check if section is in the viewport (with offset for navbar)
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        }

        // Run on mount to set initial active section
        handleScroll();
        
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsMenuOpen(false);
        
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        
        if (element) {
            const offset = 80; // Adjust based on your navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }

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
                onClick={(e) => handleNavClick(e, "#hero")}
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Desiigner</span> Portfolio
                    </span>
                </a>

                {/*desktop version navbar*/}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => {
                        const sectionId = item.href.substring(1);
                        const isActive = activeSection === sectionId;
                        
                        return (
                            <a 
                            key={key} 
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            className={cn(
                                "transition-colors duration-300 relative group cursor-pointer",
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
                className="md:hidden p-2 text-foreground relative z-50 hover:bg-muted/50 rounded-md transition-colors duration-200"
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
            </div>

            {/* Mobile menu overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-background/98 backdrop-blur-md flex flex-col items-center justify-center md:hidden z-[100] animate-in fade-in duration-300">
                    <div className="flex flex-col space-y-6 text-lg">
                        {navItems.map((item, key) => {
                            const sectionId = item.href.substring(1);
                            const isActive = activeSection === sectionId;
                            
                            return (
                                <a 
                                key={key} 
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className={cn(
                                    "transition-colors duration-300 text-center py-3 px-6 rounded-md cursor-pointer",
                                    isActive 
                                        ? "text-primary bg-muted/50" 
                                        : "text-foreground/80 hover:text-primary hover:bg-muted/50"
                                )}
                                >
                                    {item.name}
                                </a>
                            );
                        })}
                    </div>
                </div>
            )}
         </nav>
        );
};