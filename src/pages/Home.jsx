import { ThemeToggle } from "../components/ThemeToggle"
import { StartBackground } from "../components/StarBackground"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectsSections } from "../components/ProjectsSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"
import { ScrollProgress } from "../components/ScrollProgress"
import { useScrollReveal } from "../lib/useScrollReveal"

export const Home = () => {
    useScrollReveal();

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Scroll progress bar */}
            <ScrollProgress />

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background Effects */}
            <StartBackground />

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSections />
                <ContactSection />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}