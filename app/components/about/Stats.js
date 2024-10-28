import { Chip } from "../../utils/Chip";
import Reveal from "../../utils/Reveal";
import { AiFillCode, AiFillSmile } from "react-icons/ai";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6 mt-24">
            <AiFillCode className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Some of my Skills</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-4">
            <Chip>JavaScript</Chip>
            <Chip>TypeScript</Chip>
            <Chip>HTML</Chip>
            <Chip>CSS</Chip>
            <Chip>React</Chip>
            <Chip>React Native</Chip>
            <Chip>Redux</Chip>
            <Chip>NodeJS</Chip>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            <Chip>Express</Chip>
            <Chip>PostgreSQL</Chip>
            <Chip>MongoDB</Chip>
            <Chip>GitHub</Chip>
            <Chip>C#</Chip>
            <Chip>C++</Chip>
            <Chip>AWS</Chip>
            <Chip>Python</Chip>
            <Chip>KI</Chip>
          </div>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>Docker</Chip>
            <Chip>Kubernetes</Chip>
            <Chip>VueJs</Chip>
            <Chip>NextJs</Chip>
            <Chip>Wordpress</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
