"use client";

import React, { useEffect, useState, useRef } from "react";
import { useAnimate, useAnimation, useInView, motion } from "framer-motion";
import Example from "../encrypt-text/EncryptedText";
import { CountUpStats } from "../stats/Stats";
import { About } from "../about/About";
import { GridCards } from "../projects/projects";
import { Experience } from "../experiebce/Experience";
import { Footer } from "../footer/Footer";
import { Logos } from "../trusted/trusted";

export const GridHoverHero = () => {
    const [scope, animate] = useAnimate();
    const [size, setSize] = useState({ columns: 0, rows: 0 });

    useEffect(() => {
        generateGridCount();
        window.addEventListener("resize", generateGridCount);

        return () => window.removeEventListener("resize", generateGridCount);
    }, []);

    const generateGridCount = () => {
        const columns = Math.floor((window.innerWidth * 1) / 75);
        const rows = Math.floor((window.innerHeight * 4) / 75);

        setSize({
            columns,
            rows,
        });
    };

    const handleMouseLeave = (e) => {
        // @ts-ignore
        const id = `#${e.target.id}`;
        animate(id, { background: "rgba(129, 140, 248, 0)" }, { duration: 1.5 });
    };

    const handleMouseEnter = (e) => {
        // @ts-ignore
        const id = `#${e.target.id}`;
        animate(id, { background: "rgba(129, 140, 248, 1)" }, { duration: 0.15 });
    };

    const Reveal = ({ children }) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });

        const mainControls = useAnimation();
        const slideControls = useAnimation();

        useEffect(() => {
            if (isInView) {
                mainControls.start("visible");
                slideControls.start("visible");
            }
        }, [isInView]);

        return (
            <div ref={ref} className="relative w-fit overflow-hidden">
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    {children}
                </motion.div>
                <motion.div
                    variants={{
                        hidden: { left: 0 },
                        visible: { left: "100%" },
                    }}
                    initial="hidden"
                    animate={slideControls}
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-indigo-600"
                />
            </div>
        );
    };

    return (
        <div className="bg-neutral-950 flex justify-center min-h-screen relative">
            {/* Grid Background */}
            <div
                ref={scope}
                className="absolute grid h-[380vh] w-full grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(75px,_1fr))] z-0 pointer-events-auto"
            >
                {[...Array(size.rows * size.columns)].map((_, i) => (
                    <div
                        key={i}
                        id={`square-${i}`}
                        onMouseLeave={handleMouseLeave}
                        onMouseEnter={handleMouseEnter}
                        className="h-full w-full border-[1px] border-neutral-900"
                    />
                ))}
            </div>

            {/* Center-aligned content */}
            <div className="pointer-events-none absolute flex flex-col items-center justify-center pt-56 z-20">
                <div>
                    <Reveal>
                        <Example />
                    </Reveal>
                    <p className="mb-6 max-w-3xl text-center text-lg font-light text-neutral-500 md:text-xl">
                        I am a full-stack developer with a passion for design and creativity. With my technical and design skills, I develop projects that make a difference and inspire users.
                    </p>

                    <div className="mt-8 z-10">
                        <CountUpStats />
                    </div>
                </div>

                <div className="pt-52 px-44">
                    <About />
                </div>

                <div className="pointer-events-none flex flex-col items-center justify-center z-20">
                    <div className="pt-52 pointer-events-auto">
                        <Experience />
                    </div>
                    <div className="pt-52 pointer-events-auto">
                        <GridCards />
                    </div>
                </div>

            </div>
        </div>
    );
};
