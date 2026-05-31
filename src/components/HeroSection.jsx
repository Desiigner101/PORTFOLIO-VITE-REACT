import { ArrowDown, Mail, Github, Linkedin, Facebook } from "lucide-react"

const socials = [
    { href: "https://github.com/Desiigner101", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/gino-sarsonas-4479a52a4/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://www.facebook.com/gino.sarsonas", icon: Facebook, label: "Facebook" },
]

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
        >
            {/* Ambient glow orbs */}
            <div className="glow-orb w-[28rem] h-[28rem] bg-primary/20 top-1/4 -left-20 animate-float" />
            <div
                className="glow-orb w-[22rem] h-[22rem] bg-cyan-400/15 bottom-1/4 -right-10 animate-float"
                style={{ animationDelay: "2s" }}
            />

            <div className="container max-w-3xl mx-auto text-center z-10">
                <div className="space-y-8">

                    {/* Availability badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm text-sm text-primary opacity-0 animate-fade-in">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                        </span>
                        Available for opportunities
                    </div>

                    {/* Name & role */}
                    <div className="space-y-3 opacity-0 animate-fade-in-delay-1">
                        <p className="text-muted-foreground text-lg">Hi, I&apos;m</p>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                            <span className="text-foreground">Gino </span>
                            <span className="text-gradient">Sarsonas</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground font-light">
                            IT Student &amp; Developer
                        </p>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed opacity-0 animate-fade-in-delay-2">
                        3rd-year BSIT student with a passion for building clean, functional
                        web and mobile applications. I love turning ideas into real-world solutions.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 opacity-0 animate-fade-in-delay-3">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                        <a
                            href="#contacts"
                            className="px-6 py-2.5 rounded-full border border-border hover:border-primary text-foreground hover:text-primary transition-all duration-300 inline-flex items-center gap-2 font-medium"
                        >
                            <Mail size={15} />
                            Get In Touch
                        </a>
                    </div>

                    {/* Social quick links */}
                    <div className="flex items-center justify-center gap-3 opacity-0 animate-fade-in-delay-4">
                        {socials.map(({ href, icon: Icon, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="p-2.5 rounded-lg border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-200"
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
                <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
                <ArrowDown className="h-4 w-4 text-muted-foreground" />
            </div>
        </section>
    )
}
