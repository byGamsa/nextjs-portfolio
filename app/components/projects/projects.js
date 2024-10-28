import React from "react";
import { FiBookOpen, FiEye, FiWatch } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";

export const GridCards = () => {
    return (
        <div className="text-neutral-50">
            <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-neutral-700 border border-neutral-700 md:grid-cols-3 md:divide-x md:divide-y-0 z-50">
                <TitleCard />
                <Card
                    href="#"
                    title="Sheley Shore"
                    readTime="Dez 2022"
                    src="http://85.215.71.124/static/SheleyShore.png"
                />
                <Card
                    href="#"
                    title="All-In-One Bot"
                    readTime="Mar. 2021"
                    src="http://85.215.71.124/static/AllInOne.png"
                />
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-neutral-700 border-x border-b border-neutral-700 md:grid-cols-3 md:divide-x md:divide-y-0">
                <Card
                    href="#"
                    title="Monastix"
                    readTime="Nov. 2023"
                    src="http://85.215.71.124/static/Monastics.jpg"
                />
                <Card
                    href="#"
                    title="Sipster"
                    readTime="Jun. 2024"
                    src="http://85.215.71.124/static/Sipster.png"
                />
                <Card
                    href="#"
                    title="Secret Sips"
                    readTime="Oct. 2024"
                    src="http://85.215.71.124/static/Secret-Sips.png"
                />
            </div>
        </div>
    );
};

const Card = ({ href, title, readTime, src }) => {
    return (
        <a
            href={href}
            target="_blank"
            className="group relative flex h-56 flex-col justify-end overflow-hidden p-6 transition-colors hover:bg-neutral-950 md:h-80 md:p-9"
        >
            <div className="absolute left-3 top-5 z-10 flex items-center gap-1.5 text-xs uppercase text-neutral-400 transition-colors duration-500 group-hover:text-neutral-50">
                <FiWatch className="text-base" />
                <span>{readTime}</span>
            </div>
            <h2 className="relative z-10 text-3xl leading-tight transition-transform duration-500 group-hover:-translate-y-3">
                {title}
            </h2>

            <FiEye className="absolute right-3 top-4 z-10 text-2xl text-neutral-400 transition-colors group-hover:text-neutral-50" />

            <div
                className="absolute bottom-0 left-0 right-0 top-0 opacity-50 blur-sm grayscale transition-all group-hover:grayscale-0 group-hover:blur-0 group-hover:opacity-80 group-active:scale-105 group-active:opacity-30 group-active:blur-0 group-active:grayscale-0"
                style={{
                    backgroundImage: `url(${src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            <Corners />
        </a>
    );
};

const Corners = () => (
    <>
        <span className="absolute left-[1px] top-[1px] z-10 h-3 w-[1px] origin-top scale-0 bg-violet-300 transition-all duration-500 group-hover:scale-100" />
        <span className="absolute left-[1px] top-[1px] z-10 h-[1px] w-3 origin-left scale-0 bg-violet-300 transition-all duration-500 group-hover:scale-100" />
        <span className="absolute bottom-[1px] right-[1px] z-10 h-3 w-[1px] origin-bottom scale-0 bg-violet-300 transition-all duration-500 group-hover:scale-100" />
        <span className="absolute bottom-[1px] right-[1px] z-10 h-[1px] w-3 origin-right scale-0 bg-violet-300 transition-all duration-500 group-hover:scale-100" />
        <span className="absolute bottom-[1px] left-[1px] z-10 h-3 w-[1px] origin-bottom scale-0 bg-violet-300 transition-all duration-500 group-hover:scale-100" />
        <span className="absolute bottom-[1px] left-[1px] z-10 h-[1px] w-3 origin-left scale-0 bg-violet-300 transition-all duration-500 group-hover:scale-100" />
        <span className="absolute right-[1px] top-[1px] z-10 h-3 w-[1px] origin-top scale-0 bg-violet-300 transition-all duration-500 group-hover:scale-100" />
        <span className="absolute right-[1px] top-[1px] z-10 h-[1px] w-3 origin-right scale-0 bg-violet-300 transition-all duration-500 group-hover:scale-100" />
    </>
);

const TitleCard = () => {
    return (
        <a className="group relative flex h-56 flex-col justify-between bg-neutral-950 p-6 md:h-80 md:p-9" >
            <h2 className="text-4xl uppercase leading-tight">
                <span className="text-neutral-400 transition-colors duration-500 group-hover:text-violet-300">
                    Choose
                </span>
                <br />
                the project you want to explore
            </h2>

            <FiArrowUpRight className="absolute right-3 top-4 text-2xl text-neutral-400 transition-colors duration-500 group-hover:text-violet-300" />
        </a>
    );
};