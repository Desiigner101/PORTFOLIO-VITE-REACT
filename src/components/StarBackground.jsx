import { useEffect, useState } from "react"

//id, size, x, y, opacity, animationDuration
//id, size, x, y, delay, animationDuration



export const StartBackground = () => {
    const [stars, setStars] = useState([])
    const [meteors, setMeteors] = useState([])
    const [shootingStars, setShootingStars] = useState([])

    useEffect(() => {
        generateStars();
        generateShootingStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    //function that generate stars in the background 
    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);

        const newStars = []

        for (let i = 0; i < numberOfStars; i++){
            newStars.push({
                id:i,
                size: Math.random() * 4 + 1,
                x: Math.random() * 100,
                y: Math.random() * 110,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 10 + 2,
            });
        }

        setStars(newStars);
    };

    //function that generate shooting stars in the background 
    //not functioning
    const generateShootingStars = () => {
        const numberOfShootingStars = 4
        const newShootingStars = []

        for (let i = 0; i < numberOfShootingStars; i++){
            newShootingStars.push({
                id:i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            });
        }

        setShootingStars(shootingStars);
    };

    //function that generate meteors in the background 
    const generateMeteors = () => {
        const numberOfMeteors = 6
        const newMeteors = []

        for (let i = 0; i < numberOfMeteors; i++){
            newMeteors.push({
                id:i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            });
        }

        setMeteors(newMeteors);
    };

    //star dimensions 
    return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div key={star.id} 
            className="star animate-pulse-subtle" 
            style={{
                width: star.size  +  "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s",
            }}
            />
        ))}

        {shootingStars.map((stars) => (
            <div key={stars.id} 
            className="stars animate-stars" 
            style={{
                width: stars.size * 50 + "px",
                height: stars.size + "px",
                left: stars.x + "%",
                top: stars.y + "%",
                animationDelay: stars.delay + "s",
                animationDuration: stars.animationDuration + "s",
            }}
            />
        ))}

    
        {meteors.map((meteor) => (
            <div key={meteor.id} 
            className="meteor animate-meteor" 
            style={{
                width: meteor.size  + "px",
                height: meteor.size + "px",
                left: meteor.x + "%",
                top: meteor.y + "%",
                animationDelay: meteor.delay + "s",
                animationDuration: meteor.animationDuration + "s",
            }}
            />
        ))}
    </div>
    );
}