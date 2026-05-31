import { useState } from "react";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";

export const ContactSection = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | sending | success

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("sending");

        const { name, email, message } = formData;
        const subject = encodeURIComponent(`Portfolio Message from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:desiigner4074@gmail.com?subject=${subject}&body=${body}`;

        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contacts" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">

                <div className="text-center mb-16 reveal">
                    <p className="section-label mb-3">Let&apos;s Talk</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Feel free to reach out if you&apos;d like to connect, share ideas, or collaborate.
                        I&apos;m always open to learning opportunities and growing as a developer.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 reveal reveal-delay-1">

                    {/* Contact info */}
                    <div className="space-y-8">
                        <h3 className="text-xl font-semibold">Contact Information</h3>

                        <div className="space-y-5">
                            <div className="flex items-center gap-4">
                                <div className="p-2.5 rounded-lg bg-primary/10 flex-shrink-0">
                                    <Mail className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wide font-medium">Email</p>
                                    <a
                                        href="mailto:desiigner4074@gmail.com"
                                        className="text-sm hover:text-primary transition-colors duration-200"
                                    >
                                        desiigner4074@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-2.5 rounded-lg bg-primary/10 flex-shrink-0">
                                    <Phone className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wide font-medium">Phone</p>
                                    <a
                                        href="tel:+6321201166"
                                        className="text-sm hover:text-primary transition-colors duration-200"
                                    >
                                        +63 (21) 201 0166
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-2.5 rounded-lg bg-primary/10 flex-shrink-0">
                                    <MapPin className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wide font-medium">Location</p>
                                    <span className="text-sm">Bulacao, Cebu City, 6000</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-sm font-medium mb-4">Connect with me</p>
                            <div className="flex gap-3">
                                {[
                                    { href: "https://www.facebook.com/gino.sarsonas", icon: Facebook, label: "Facebook" },
                                    { href: "https://www.instagram.com/ginowithhaki/", icon: Instagram, label: "Instagram" },
                                    { href: "https://www.linkedin.com/in/gino-sarsonas-4479a52a4/", icon: Linkedin, label: "LinkedIn" },
                                ].map(({ href, icon: Icon, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="p-2.5 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 hover:text-primary text-muted-foreground transition-all duration-200"
                                    >
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact form */}
                    <div className="gradient-border p-8">
                        <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

                        {status === "success" ? (
                            <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                                <div className="p-4 rounded-full bg-primary/10">
                                    <Send className="h-6 w-6 text-primary" />
                                </div>
                                <p className="font-semibold">Message ready to send!</p>
                                <p className="text-sm text-muted-foreground">
                                    Your email client should have opened with the message pre-filled.
                                </p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="text-sm text-primary hover:underline mt-2"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200 placeholder:text-muted-foreground/50"
                                        placeholder="Arthur Morgan"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200 placeholder:text-muted-foreground/50"
                                        placeholder="cowpoke@gmail.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200 resize-none placeholder:text-muted-foreground/50"
                                        placeholder="Hello, I'm interested in..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className={cn(
                                        "cosmic-button w-full",
                                        status === "sending" && "opacity-70 cursor-not-allowed"
                                    )}
                                >
                                    {status === "sending" ? "Opening email client..." : "Send Message"}
                                    <Send size={15} />
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
