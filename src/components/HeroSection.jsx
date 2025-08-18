import { ArrowDown } from "lucide-react"

// This is the Hero Section component – the first section users see on your portfolio
export const HeroSection = () => {
    return (
        <section 
            id="hero" 
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            {/* Container for all hero content, centered and with max width */}
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    
                    {/* Heading with my name and fade-in animations */}
                    <h1 className="text-4xl md:text-6l font-bold tracking-tight">
                        {/* Fade-in delay animations make text appear one after another */}
                        <span className="opacity-0 animate-fade-in"> Hi! I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Gino</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Sarsonas</span>
                    </h1>

                    {/* Short introduction text with fade-in animation */}
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I am an Information Technology student pursuing a Bachelor’s degree, 
                        passionate about technology and eager to apply my skills to real-world solutions.
                        My journey is driven by continuous learning, innovation, and professional growth.
                    </p>

                    {/* Call-to-action button that links to projects section */}
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll indicator at the bottom with a bouncing arrow */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary"></ArrowDown>
            </div>
        </section>
    )
}
