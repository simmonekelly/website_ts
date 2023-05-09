import {
  FaHtml5,
  FaSass,
  FaGit,
  FaReact,
  FaNpm,
  FaNodeJs,
  FaCss3Alt,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { GrMysql, GrHeroku } from "react-icons/gr";
import {
  SiPostman,
  SiExpress,
  SiPassport,
  SiJira,
  SiJest,
  SiTypescript,
} from "react-icons/si";

const useSkillIcon = (iconName: string) => {
  if (iconName === "FaHtml5") return <FaHtml5 className="skills-icon" />;
  else if (iconName === "SiJest") return <SiJest className="skills-icon" />;
  else if (iconName === "SiJira") return <SiJira className="skills-icon" />;
  else if (iconName === "SiPassport")
    return <SiPassport className="skills-icon" />;
  else if (iconName === "SiTypescript")
    return <SiTypescript className="skills-icon" />;
  else if (iconName === "SiExpress")
    return <SiExpress className="skills-icon" />;
  else if (iconName === "SiPostman")
    return <SiPostman className="skills-icon" />;
  else if (iconName === "FaSass") return <FaSass className="skills-icon" />;
  else if (iconName === "FaGit") return <FaGit className="skills-icon" />;
  else if (iconName === "FaReact") return <FaReact className="skills-icon" />;
  else if (iconName === "FaNpm") return <FaNpm className="skills-icon" />;
  else if (iconName === "FaNodeJs") return <FaNodeJs className="skills-icon" />;
  else if (iconName === "IoLogoJavascript")
    return <IoLogoJavascript className="skills-icon" />;
  else if (iconName === "GrMysql") return <GrMysql className="skills-icon" />;
  else if (iconName === "GrHeroku") return <GrHeroku className="skills-icon" />;
  else if (iconName === "FaCss3Alt")
    return <FaCss3Alt className="skills-icon" />;
  else if (iconName === "FaGithub") return <FaGithub className="skills-icon" />;
  else if (iconName === "FaPython") return <FaPython className="skills-icon" />;
};

export default useSkillIcon;
