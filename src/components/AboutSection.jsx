import { Code, Globe, GraduationCap, Laptop2 } from "lucide-react";

const cards = [
    {
        icon: Code,
        title: "Learning to Create",
        desc: "Building responsive websites and apps with modern frameworks and tools.",
    },
    {
        icon: Laptop2,
        title: "Driven by Projects",
        desc: "I enjoy building full-stack apps — from concept to deployment.",
    },
    {
        icon: GraduationCap,
        title: "Academic Journey",
        desc: "Every challenge and milestone has shaped me into who I am today.",
    },
    {
        icon: Globe,
        title: "Teamwork & Collaboration",
        desc: "Sharing ideas and building something greater together is where I thrive.",
    },
];

const stats = [
    { value: "9+", label: "Projects Built" },
    { value: "3rd", label: "Year BSIT" },
    { value: "15+", label: "Technologies" },
    { value: "∞", label: "Curiosity" },
];

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">

                <div className="text-center mb-16 reveal">
                    <p className="section-label mb-3">Who I Am</p>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        About <span className="text-primary">Me</span>
                    </h2>
                </div>

                {/* Stats strip */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 reveal">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="gradient-border p-5 text-center card-hover"
                        >
                            <p className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                                {stat.value}
                            </p>
                            <p className="text-xs md:text-sm text-muted-foreground">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* Bio */}
                    <div className="space-y-5 reveal">
                        <h3 className="text-xl font-semibold">
                            Passionate IT Student &amp; Technology Fanatic
                        </h3>

                        <p className="text-muted-foreground leading-relaxed">
                            As a student pursuing a Bachelor of Science in Information Technology,
                            I have developed a strong passion for exploring the ever-evolving world
                            of technology. My academic journey has introduced me to various fields
                            such as programming, systems development, and problem-solving — all of
                            which have strengthened my technical foundation and analytical thinking.
                        </p>

                        <p className="text-muted-foreground leading-relaxed">
                            Outside academics, I value balance and growth beyond the digital space.
                            I enjoy stepping out of my comfort zone, exploring nature, and embracing
                            new experiences. I dedicate time to physical fitness, being deeply fond
                            of athletics and maintaining an active lifestyle.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <a
                                href="https://www.facebook.com/gino.sarsonas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cosmic-button"
                            >
                                Get In Touch
                            </a>
                            <a
                                href=""
                                className="px-6 py-2.5 rounded-full border border-border hover:border-primary text-foreground hover:text-primary transition-all duration-300 font-medium inline-flex items-center justify-center"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 gap-4 reveal reveal-delay-1">
                        {cards.map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="gradient-border p-5 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-2.5 rounded-lg bg-primary/10 flex-shrink-0">
                                        <Icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold mb-1">{title}</h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
