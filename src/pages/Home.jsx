import { ThemeToggle } from "../components/ThemeToggle"
import { StartBackground } from "../components/StarBackground"

export const Home = () => {
    return <div className = "min-h-screen" bg-background text-foreground overflow-x-hidden>

        {/*Theme Toggle */}
        <ThemeToggle />

        {/*Background Effects */}
        <StartBackground />

        {/* Navbar */}

        {/* Main Content */}

        {/* Footer */}

    </div>
}