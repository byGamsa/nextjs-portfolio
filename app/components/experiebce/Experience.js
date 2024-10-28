import { SectionHeader } from "../../utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
    return (
        <section className="section-wrapper" id="experience">
            <SectionHeader title="Experience" dir="l" />
            {experience.map((item) => (
                <ExperienceItem key={item.title} {...item} />
            ))}
        </section>
    );
};

const experience = [
    {
        title: "Nextise GmbH",
        position: "Portfolio Manager",
        time: "Nov 2023 - Present",
        location: "Stuttgart",
        description:
            "I design and deliver software training, as well as lead a team of developers and work closely with clients such as Volkswagen AG, Tüv Nord, University of Stuttgart for customised solutions",
        tech: [
            "Angular",
            "Python",
            "Git",
            "React",
            "MongoDb",
            "Dcoker/Kubernetes",
            "Javascript",
            "...",
        ],
    },
    {
        title: "Schindler Dienstleistungen & Sicherheit",
        position: "Event Security & Service",
        time: "Jul 2022 - Sep 2023",
        location: "Stuttgart",
        description:
            "In the area of event security, I was responsible for ensuring that everything ran smoothly at major events. My tasks included coordination, admission control and cashiering",
        tech: [],
    },
    {
        title: "Katholisch Studierende Jugend ",
        position: "Youth leader",
        time: "Apr 2017 - Mar 2023",
        location: "Stuttgart",
        description:
            "As a youth leader, I have organised and led group activities. Planning and running workshops, excursions and camps, both organisational and educational tasks",
        tech: [],
    },
];
