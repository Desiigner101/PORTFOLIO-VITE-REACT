import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-8 px-4 border-t border-border">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Gino Sarsonas. All rights reserved.
                </p>
                <a
                    href="#hero"
                    className="p-2.5 rounded-lg border border-border hover:border-primary/50 hover:text-primary text-muted-foreground transition-all duration-200"
                    aria-label="Back to top"
                >
                    <ArrowUp size={16} />
                </a>
            </div>
        </footer>
    );
}
