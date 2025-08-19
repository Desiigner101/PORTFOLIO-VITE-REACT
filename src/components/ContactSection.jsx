import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter, X } from "lucide-react";
import { cn } from "../lib/utils";



export const ContactSection = () => {
    
    
    return (
    <section 
    id="#contact" 
    className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary"> Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Feel free to reach out if you'd like to connect, share ideas, or collaborate 
                I'm always open to learning opportunities and growing as a student developer.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10 ">
                            <Mail className="h-6 w-6 text-primary"/>
                            </div>

                            <div className="text-center">
                                <h4 className="font-medium flex flex-col-1"> Email</h4>
                                <a href="desiigner4074@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    desiigner4074@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10 ">
                            <Phone className="h-6 w-6 text-primary"/>
                            </div>

                            <div>
                                <h4 className="font-medium flex flex-col-1"> Phone</h4>
                                <a href="tel:+63212010166" className="text-muted-foreground hover:text-primary transition-colors">
                                    +63 (21) 201 0166
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10 ">
                            <MapPin className="h-6 w-6 text-primary"/>
                            </div>

                            <div>
                                <h4 className="font-medium flex flex-col-1"> Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    Bulacao, Cebu City, 6000 
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4">Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.facebook.com/gino.sarsonas" target="_blank">
                                <Facebook />
                            </a>

                            <a href="https://www.instagram.com/ginowithhaki/" target="_blank">
                                <Instagram />
                            </a>

                            <a href="https://www.linkedin.com/in/gino-sarsonas-4479a52a4/" target="_blank">
                                <Linkedin />
                            </a>
                        </div>
                    </div>
                </div> 

                <div className="gradient-border bg-card p-8 rounded-lg shadow-xs" >
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
                            <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            className="w-full px-4 py-3 rounded-md border border-input bg-background/10 focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Arthur Morgan..."
                            /> 
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email</label>
                            <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            className="w-full px-4 py-3 rounded-md border border-input bg-background/10 focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="cowpoke@gmail.com"
                            /> 
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message</label>
                            <textarea 
                            id="message" 
                            name="message" 
                            required 
                            className="w-full px-4 py-3 rounded-md border border-input bg-background/10 focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                            placeholder="Hello, im interested..."
                            /> 
                        </div>


                        <button 
                        type="submit" 
                        className={cn(
                            "cosmic-button w-full flex items-center justify-center gap-2",
                            
                        )}
                        
                        >
                            Send Message
                            <Send size={16}/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    
    );
}