import { BrainCircuit, Globe, GraduationCap, Laptop2 } from "lucide-react";
import { useCountUp } from "../lib/useCountUp";

// A single stat that counts up from 0 to its value when scrolled into view.
const StatCard = ({ value, label }) => {
    const { ref, display } = useCountUp(value);
    return (
        <div className="gradient-border p-5 text-center card-hover">
            <p ref={ref} className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                {display}
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">{label}</p>
        </div>
    );
};

const cards = [
    {
        icon: BrainCircuit,
        title: "Machine Learning",
        desc: "Building AkAI, an LSTM-based Filipino Sign Language recognition model with TensorFlow and MediaPipe.",
    },
    {
        icon: Laptop2,
        title: "Full-Stack & Mobile",
        desc: "I enjoy building full-stack web and native mobile apps, from concept to deployment.",
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
    { value: "10+", label: "Projects Built" },
    { value: "1", label: "Published App" },
    { value: "4th", label: "Year BSIT" },
    { value: "20+", label: "Technologies" },
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

                {/* Stats strip, counts up on scroll into view */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 reveal">
                    {stats.map((stat) => (
                        <StatCard key={stat.label} value={stat.value} label={stat.label} />
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* Bio */}
                    <div className="space-y-5 reveal">
                        <h3 className="text-xl font-semibold">
                            Passionate IT Student &amp; Technology Fanatic
                        </h3>

                        <p className="text-muted-foreground leading-relaxed">
                            As a 4th-year student pursuing a Bachelor of Science in Information
                            Technology, I have developed a strong passion for building real-world
                            software, from full-stack web apps to native mobile applications. My
                            capstone, AkAI, dives into machine learning to recognize Filipino Sign
                            Language, strengthening my foundation in both engineering and analytical
                            problem-solving.
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
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
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
