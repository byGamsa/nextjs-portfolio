import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../../utils/SectionHeader";
import Reveal from "../../utils/Reveal";
import { MyLinks } from "../../components/nav/Header";
import { Stats } from "./Stats";
import { motion } from "framer-motion";

const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
  return (
    <motion.img
      style={{
        top,
        left,
        rotate,
      }}
      className={"drag-elements w-96 bg-neutral-200 p-1 pb-4"}
      src={src}
      alt={alt}
    />
  );
};

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4">
          <Reveal>
            <p className="flex justify-center items-center leading-relaxed text-zinc-300">
              <span className="bg-indigo-500 text-white py-1 px-3 rounded font-bold mr-1 float-left text-2xl">
                Hey!
              </span>
              <span>
                I&apos;m Lars, I am a Media Informatics student with over 10 years of programming experience.
              </span>
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              Passionate about coding since my early years, I have successfully completed numerous projects in software and web development, as well as mobile app creation.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              Let&apos;s connect and create innovative solutions together!
            </p>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-indigo-300">
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
            <Stats />
          </Reveal>
        </div>
        <Reveal>
          <Card
            src="http://85.215.71.124/static/me.jpg"
            alt="Example image"
            top="20%"
            left="25%"
            className="w-36 md:w-56"
          />
        </Reveal>
      </div>
    </section>
  );
};
