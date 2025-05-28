import heroPic from "../assets/images/hero_pic.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "motion/react";
import Navbar from "./Navbar";

gsap.registerPlugin(useGSAP);

const Hero = () => {

    const heroText = "I'M RAJID ANSARI".split("");

    useGSAP(() => {
        gsap.from(".box", {
            y: 100,
            opacity: 0,
            duration: 0.6,
            delay: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.2,
        });

        gsap.from("#heroPic", {
            width: 0,
        });
    }, []);

    return (
        <div className="hero min-h-dvh px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out">
            <Navbar />
            <div className="mt-12 sm:mt-16 lg:mt-24 transition-all duration-300">
                <h1
                    className="font-['Fira_Code'] leading-none md:text-xl sm:text-3xl  transition-all duration-300 text-gray-400"
                    id="txt"
                >
                    Hey There!
                </h1>

                <div className="box w-full overflow-hidden mt-2 h-full">
                    {heroText.map((letter, index) => (
                        <motion.span
                            key={index}
                            className="char text-5xl md:text-8xl sm:text-6xl lg:text-9xl font-bold text-center tracking-tight leading-none font-bebas hover:text-primary transition-all duration-300"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>

                <div className="w-full items-start flex md:flex-col lg:flex-row flex-col lg:items-center mt-8 sm:mt-12 transition-all duration-300">
                    <img
                        src={heroPic}
                        alt="profile pic"
                        id="heroPic"
                        className="h-[45vh] sm:h-48 lg:h-52 w-full sm:w-[30vw]  bg-gray-700 object-cover -mt-3 sm:mr-3 transition-all duration-300 hover:scale-105 md:h-66 md:w-[100%] "
                    />
                    <div className="box ">
                        <span className="char text-5xl md:text-7xl lg:text-[7vw] lg:relative lg:bottom-3 font-bold text-zinc-400 text-center tracking-tight -leading-44 font-bebas hover:text-primary transition-all duration-300">
                            FRONTEND DEVELOPER
                        </span>
                        <span className="lg:text-9xl text-zinc-400 text-6xl leading-none pl-1 relative lg:bottom-3 bottom-0 md:text-8xl">
                            .
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
