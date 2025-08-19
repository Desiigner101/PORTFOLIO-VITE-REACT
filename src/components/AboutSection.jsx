import { Briefcase, Code, Globe, GraduationCap, Laptop2, User } from "lucide-react";

export const AboutSection = () => {

    return (
    <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              About <span className="text-primary"> Me</span>  
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">

                    {/* This section is all about me and my description */}
                    <h3 className="text-2xl font-semibold">
                        Passionate IT Student & Technology Fanatic
                    </h3>

                    <p className="text-muted-foreground text-justify">
                        As a student pursuing a Bachelor of Science in Information Technology, 
                        I have developed a strong passion for exploring the ever-evolving world of technology. 
                        My academic journey has introduced me to various fields such as programming, systems development, and problem-solving, all of which have strengthened my technical foundation and analytical thinking. 
                        I take pride in being curious and adaptive, always eager to learn new skills and apply them to projects that create practical and meaningful outcomes.
                    </p>

                    <p className="text-muted-foreground text-justify">
                        Outside academics, I am a person who values balance and growth beyond the digital space. 
                        I enjoy stepping out of my comfort zone, exploring nature, and embracing new experiences. 
                        Alongside exercising my mind through technology and innovation, I dedicate time to physical fitness, being deeply fond of athletics and maintaining an active lifestyle. 
                        For me, working out both mentally and physically is essential in shaping discipline, resilience, and a well-rounded approach to life.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a 
                        href="https://www.facebook.com/gino.sarsonas" 
                        target="_blank"
                        className="cosmic-button">
                            Get In Touch
                        </a>

                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transiton-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Learning to Create</h4>
                                <p className="text-muted-foreground">
                                    Creating responsive websites with 
                                    modern frameworks.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Laptop2 className="h-6 w-6 text-primary"/>
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Driven by Projects</h4>
                                <p className="text-muted-foreground">
                                  I enjoy making projects, building responsive websites, 
                                  and diving into fun coding activities 
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <GraduationCap className="h-6 w-6 text-primary"/>
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Academic Journey</h4>
                                <p className="text-muted-foreground">
                                    More than just a cap it reflects my journey as a student. Every challenge, lesson, 
                                    and milestone has shaped me into who I am today, ready to take on greater opportunities.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Globe className="h-6 w-6 text-primary"/>
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Teamwork & Collaboration</h4>
                                <p className="text-muted-foreground">
                                  I enjoy teamwork sharing ideas, collaborating on projects, and 
                                  building something greater together.  
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

);
}