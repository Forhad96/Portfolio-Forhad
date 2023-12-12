import Image from "next/image";
import Marquee from "react-fast-marquee";
import htmlLogo from "@/asset/skills/html.svg";
import cssLogo from "../../../../asset/skills/css.svg";
import javascriptLogo from "../../../../asset/skills/javascript.svg";
import reactLogo from "../../../../asset/skills/react.svg";
import mongoDBLogo from "../../../../asset/skills/mongoDB.svg";

import './Skills.css'
const Skills = () => {
  return (
    <div className="my-20">
      <h2 className="text-white text-6xl">Skills</h2>

      <div className="skillsContainer">
        <div className="skill--scroll">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skills?.map((skill, idx) => (
              <div key={idx} className="skill--box shadow-lg shadow-primary">
                <Image
                  src={skill?.logo}
                  className="w-20 h-20"
                  width={20}
                  height={20}
                  alt="html"
                />
                <h3 className="text-white text-xl">{skill.name}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};
export default Skills;

const skills = [
  {
    name: "JavaScript",
    logo: javascriptLogo,
  },
  {
    name: "React.js",
    logo: reactLogo,
  },
  {
    name: "Node.js",
    logo: javascriptLogo,
  },
  {
    name: "HTML5",
    logo: htmlLogo,
  },
  {
    name: "CSS3",
    logo: cssLogo,
  },
];

// export default skills;
