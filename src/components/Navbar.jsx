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
        <>
        <nav 
        className={cn(
            "fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300",
            isScrolled 
                ? "py-4 bg-background/95 backdrop-blur-md shadow-lg border-b border-border/40" 
                : "py-5 bg-background/80 backdrop-blur-md border-b border-border/20"
         )}
         >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <a className="text-xl md:text-2xl font-bold text-primary flex items-center hover:opacity-80 transition-opacity" 
                    href="#hero"
                    onClick={(e) => handleNavClick(e, "#hero")}
                    >
                        <span className="relative z-10">
                            <span className="text-glow text-foreground">Desiigner</span>
                            <span className="text-primary ml-1">Portfolio</span>
                        </span>
                    </a>

                    {/*desktop version navbar*/}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item, key) => {
                            const sectionId = item.href.substring(1);
                            const isActive = activeSection === sectionId;
                            
                            return (
                                <a 
                                key={key} 
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className={cn(
                                    "px-4 py-2 rounded-md transition-all duration-300 relative group cursor-pointer font-medium",
                                    isActive 
                                        ? "text-primary bg-primary/10" 
                                        : "text-foreground/70 hover:text-primary hover:bg-muted/50"
                                )}
                                >
                                    {item.name}
                                </a>
                            );
                        })}
                    </div>

                    {/*mobile nav navbar*/}
                    <button 
                    onClick={() => setIsMenuOpen((prev) => !prev)} 
                    className="md:hidden p-2.5 text-foreground relative z-50 hover:bg-primary/10 rounded-lg transition-all duration-200 border border-border/50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                        {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>
            </div>
         </nav>

            {/* Mobile menu overlay */}
            {isMenuOpen && (
                <>
                <div className="fixed inset-0 bg-background/98 backdrop-blur-md flex flex-col items-center justify-center md:hidden z-40 animate-in fade-in duration-200">
                    <div className="flex flex-col space-y-4 text-xl w-full max-w-sm px-6">
                        {navItems.map((item, key) => {
                            const sectionId = item.href.substring(1);
                            const isActive = activeSection === sectionId;
                            
                            return (
                                <a 
                                key={key} 
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className={cn(
                                    "transition-all duration-300 text-center py-4 px-6 rounded-lg cursor-pointer font-medium border",
                                    isActive 
                                        ? "text-primary bg-primary/10 border-primary/50 shadow-lg shadow-primary/20" 
                                        : "text-foreground/80 hover:text-primary hover:bg-muted/50 border-border/30 hover:border-primary/30"
                                )}
                                >
                                    {item.name}
                                </a>
                            );
                        })}
                    </div>
                </div>
                
                {/* Close button - positioned beside theme toggle with higher z-index */}
                <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="fixed top-4 right-20 p-3 text-foreground hover:bg-primary/10 rounded-lg transition-all duration-200 border border-border/50 z-[60] bg-muted/90 backdrop-blur-sm shadow-lg md:hidden"
                    aria-label="Close Menu"
                >
                    <X size={20} />
                </button>
                </>
            )}
            </>
        );
};