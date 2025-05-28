import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnchorLink from "./AnchorLink";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
    useGSAP(() => {
        gsap.from(".projectHeading", {
            y: 70,
            opacity: 0,
            duration: 0.3,
            delay: 0.1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".projectHeading",
                start: "top 90%",
                end: "top 82%",
                scrub: 2,
            },
        });
        gsap.from(".project", {
            opacity: 0,
            y: 90,
            duration: 0.6,
            ease: "linear",
            stagger: 0.6,
            scrollTrigger: {
                trigger: ".project",
                start: "top 70%",
                end: "top 56%",
                scrub: 2,
            },
        });
    });

    const projects = [
        {
            serial: 1,
            title: "TrackWise",
            about: `TrackWise is a smart expense tracker that helps users manage daily finances by categorizing xpenses. <br /> Built with <strong>React.js</strong>, <strong>Tailwind CSS</strong>, and <strong>Firebase</strong>, it supports real-time data sync, authentication, and <br /> <strong>PWA</strong> installability, making it usable as a mobile app.`,
            link: "https://trackwisee.vercel.app",
            btnText: "See Live",
        },
        {
            serial: 2,
            title: "PicWash",
            about: `PicWash is a Image Enhancer tool that lets users upload and enhance images with real-time preview<br /> and download options. Built with <strong>React.js</strong> and <strong>Tailwind CSS</strong>, it offers a clean and responsive<br /> interface for seamless user experience.`,
            link: "https://github.com/rajid-ansari/image-enhancer",
            btnText: "See Code",
        },
    ];

    return (
        <div className='min-h-dvh w-full pt-16 pb-3 border-t-[1px]  border-zinc-700 font-["Montserrat"]'>
            <div className="lg:h-36 h-32 text-6xl lg:text-8xl text-zinc-400 font-semibold overflow-hidden ">
                <span className="projectHeading inline-block leading-none tracking-tight">
                    See
                </span>{" "}
                <span className="projectHeading inline-block leading-none tracking-tight">
                    Projects ~
                </span>
            </div>

            {/* project link */}
            <div className="lg:mt-12 mt-20  lg:mb-4">
                {/* project layout starts here */}
                {projects.map((project) => (
                    <div
                        key={project.serial}
                        className="project lg:h-32 w-full flex lg:flex-row flex-col lg:items-center items-start justify-between px-5 lg:mb-4 border-b-[1px] pb-3 lg:mt-16 mt-4"
                    >
                        <div className="flex">
                            <div>
                                <h1 className="lg:text-8xl text-4xl font-sans tracking-tighter leading-none lg:mr-9 mr-3 ">
                                    {project.serial}.
                                </h1>
                            </div>

                            <div className="">
                                <h2 className="lg:text-4xl text-4xl  font-semibold  ">
                                    {project.title}
                                </h2>
                                <p
                                    className="mt-2 text-lg mb-5 lg:mb-0 text-zinc-400"
                                    dangerouslySetInnerHTML={{
                                        __html: project.about,
                                    }}
                                ></p>
                            </div>
                        </div>
                        {/* btn component */}
                        <div className="pl-8 lg:pl-0 ">
                            <AnchorLink
                                className="tracking-tight"
                                link={project.link}
                            >
                                {project.btnText}
                            </AnchorLink>
                        </div>
                    </div>
                ))}
                {/* here project layoute ends */}
            </div>
        </div>
    );
};

export default Project;
