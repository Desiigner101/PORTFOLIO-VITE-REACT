import { ThemeToggle } from "../components/ThemeToggle"
import { StartBackground } from "../components/StarBackground"
import { Navbar } from "../components/Navbar"

export const Home = () => {
    return <div className = "min-h-screen" bg-background text-foreground overflow-x-hidden>

        {/*Theme Toggle */}
        <ThemeToggle />

        {/*Background Effects */}
        <StartBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}

        {/* Footer */}

    </div>
}