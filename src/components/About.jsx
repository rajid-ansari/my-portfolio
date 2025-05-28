import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const aboutRef = useRef(null);

    useGSAP(() => {
        gsap.from(".aboutHeading", {
            y: 230,
            opacity: 0,
            duration: 0.3,
            delay: 0.1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".aboutHeading",
                start: "top 100%",
                end: "top 90%",
                scrub: 2,
                // markers: true,
            },
        });
        gsap.from(aboutRef.current, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            delay: 0.4,
            scrollTrigger: {
                trigger: ".about",
                start: "top 35%",
                end: "top 26%",
                scrub: 2,
                // markers: true,
            },
        })
    });

    return (
        <div className="about min-h-[70vh] px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out mt-7 lg:mt-1">
            <div className="lg:h-36 h-24 text-6xl lg:text-8xl text-zinc-400 font-semibold overflow-hidden ">
                <span className="aboutHeading inline-block leading-none tracking-tight">
                    About
                </span>{" "}
                <span className="aboutHeading inline-block leading-none tracking-tight">
                    me.
                </span>
            </div>
			{/* about info */}
			<div className="py-5 w-full">
				<h1 
                ref={aboutRef}
                className="about text-3xl md:text-4xl md:leading-12 lg:text-center lg:text-5xl font-['fira_code'] text-center text-zinc-300 tracking-tighter lg:leading-16 leading-10">
                    Hey there! I'm a <span className="text-purple-500">frontend developer</span> passionate about building sleek and user-friendly <span className="text-orange-500">Interfaces</span> that reflect the core <span className="text-sky-600">brand identity</span> I love turning ideas into interactive, visually appealing experiences.
                </h1>
			</div>
        </div>
    );
};

export default About;
