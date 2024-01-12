import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Example = () => {
    return (
        <div className="grid px-4 py-12 text-slate-900">
            <TiltCard />
        </div>
    );
};

const TiltCard = () => {
    const skills = [
        { skill: "HTML", imageSrc: "/assets/html.svg" },
        { skill: "CSS", imageSrc: "/assets/css.svg" },
        { skill: "TailwindCss", imageSrc: "/assets/tailwind.svg" },
        { skill: "JavaScript", imageSrc: "/assets/javascript.svg" },
        { skill: "React", imageSrc: "/assets/react.svg" },
        { skill: "Vue", imageSrc: "/assets/vue.svg" },
        { skill: "TypeScript", imageSrc: "/assets/typescript.svg" },
    ];

    const Card = ({ skill, imageSrc }) => {
        const x = useMotionValue(0);
        const y = useMotionValue(0);

        const rotateX = useTransform(
            y,
            [-0.5, 0.5],
            ["17.5deg", "-17.5deg"]
        );
        const rotateY = useTransform(
            x,
            [-0.5, 0.5],
            ["-17.5deg", "17.5deg"]
        );

        const handleMouseMove = (e) => {
            const rect = e.target.getBoundingClientRect();

            const width = rect.width;
            const height = rect.height;

            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            const xPct = mouseX / width - 0.5;
            const yPct = mouseY / height - 0.5;

            x.set(xPct);
            y.set(yPct);
        };

        const handleMouseLeave = () => {
            x.set(0);
            y.set(0);
        };

        return (
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateY,
                    rotateX,
                    transformStyle: "preserve-3d",
                }}
                className="relative h-56 w-60 rounded-xl bg-gradient-to-br mx-3 from-indigo-300 to-violet-300"
            >

                <div
                    style={{
                        transform: "translateZ(75px)",
                        transformStyle: "preserve-3d",
                    }}
                    className="p-2 absolute inset-4 rounded-xl bg-white flex flex-col items-center">
                    <img alt="" className="z-0 object-cover object-center w-36 h-36 block" src={imageSrc} />

                    <div className="lg:mb-8">
                        <h3
                            style={{
                                transform: "translateZ(50px)",
                            }}
                            className="text-gray-500 text-center text-2xl font-bold tracking-widest title-font mb-1">{skill}</h3>
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <>
            <div className="pl-4" id="about">
                <h1 className="uppercase text-indigo-500">introduction</h1>
                <h1 className="capitalize text-4xl my-2 font-extrabold tracking-wider text">Overview.</h1>
                <p className="text-lg mb-10">I'm a passionate software developer with professional/commercial
                    experience. I’m productive in both team based and self-managed projects. I possess
                    an ability to think through complex problems and respectful commitment to team work.</p>
            </div>
            <div className="flex flex-wrap flex-row justify-center">

                {skills.map(({ skill, imageSrc }, index) => (
                    <Card key={index} imageSrc={imageSrc} skill={skill} />
                ))}
            </div>
        </>

    );
};

export default Example;