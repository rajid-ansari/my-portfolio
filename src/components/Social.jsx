import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Social = () => {
    useGSAP(() => {
        gsap.from(".social", {
            y: 230,
            opacity: 0,
            duration: 0.3,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".social",
                start: "top 100%",
                end: "top 90%",
                scrub: 2,
            },
        });
    });

    const socials = [
        { social: "LinkedIn", textColor: "#0A66C2", link: "https://linkedin.com/in/rajidansari" },
        { social: "GitHub", textColor: "#656B6D", link: "https://github.com/rajid-ansari" },
    ];

    return (
        <div className="lg:min-h-[60vh] min-h-[40vh] px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out mt-7 lg:mt-24 ">
            <div className="lg:h-36  sm:h-42 md:h-28 text-6xl lg:text-9xl text-zinc-400 font-semibold overflow-hidden pt-7 lg:pt-0">
                <span className="social inline-block leading-none tracking-tight">
                    Connect
                </span>{" "}
                <span className="social inline-block leading-none tracking-tight">
                    With
                </span>{" "}
                <span className="social inline-block leading-none tracking-tight">
                    Me.
                </span>
            </div>

            {/* social */}
            <div className="py-4 lg:mt-5">
                {socials.map((social) => (
                    <div 
                    key={social.social}
                    className="flex items-center gap-2 mb-5">
                        {/* dot */}
                        <div className="h-2 w-2 bg-gray-400 rounded-full "></div>
                        {/* ---social link */}
                        <div className="h-12 lg:h-17  overflow-hidden group">
                            <h2 className={`text-4xl lg:text-7xl font-semibold lg:group-hover:-translate-y-18 group-hover:-translate-y-10  duration-300 transition-all`}
                            style={{color: social.textColor}}
                            >
                                <a
                                    href={social.link}
                                    target="_blank"
                                >
                                    {social.social}
                                </a>
                            </h2>
                            {/* animation */}
                            <h2 className={`text-4xl lg:text-7xl font-semibold lg:group-hover:-translate-y-18 group-hover:-translate-y-10  duration-300 transition-all`}
                            style={{color: social.textColor}}
                            >
                                <a
                                    href={social.link}
                                    target="_blank"
                                >
                                    {social.social}
                                </a>
                            </h2>
                        </div>
                    </div>
                ))}

                {/* note */}
                <div className="lg:mt-32 py-5">
                    <h1 className="lg:text-2xl font-['Neue_Montreal'] text-center">"Thank you for visiting. I’m open to <span className="text-purple-500">collaborations</span> and <span className="text-green-500">opportunities</span>."</h1>
                </div>
            </div>
        </div>
    );
};

export default Social;
