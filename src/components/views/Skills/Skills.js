import React from "react";
import "./Skills.scss";
import PageTitle from "../../common/PageTitle/PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSass,
  faHtml5,
  faCss3,
  faJs,
  faBootstrap,
  faReact,
  faNode,
  faMdb,
  faGitAlt,
  faNpm,
  faYarn,
  faJira,
} from "@fortawesome/free-brands-svg-icons";

const skillsDB = {
  title: "wciąż się rozwijam",
  frontTitle: "FRONT-END",
  backTitle: "BACK-END",
  toolsTitle: "TOOLS",
  frontContent: [
    {
      icon: faHtml5,
      name: "HTML5",
      class: "html5",
    },
    {
      icon: faCss3,
      name: "CSS",
      class: "css",
    },
    {
      icon: faSass,
      name: "Sass",
      class: "sass",
    },
    {
      icon: faBootstrap,
      name: "Bootstrap",
      class: "bootstrap",
    },
    {
      icon: faJs,
      name: "JavaScript",
      class: "js",
    },
    {
      icon: faReact,
      name: "React+Redux",
      class: "react",
    },
  ],
  backContent: [
    {
      icon: faNode,
      name: "Node.js - Express",
      class: "node",
    },
    {
      icon: faMdb,
      name: "MongoDB",
      class: "mongo",
    },
  ],
  toolsContent: [
    {
      icon: faGitAlt,
      name: "git",
      class: "git",
    },
    {
      icon: faNpm,
      name: "npm",
      class: "npm",
    },
    {
      icon: faYarn,
      name: "yarn",
      class: "yarn",
    },
    {
      icon: faJira,
      name: "Jira",
      class: "jira",
    },
  ],
};

const Skills = () => {
  const frontSection = skillsDB.frontContent.map((item, index) => (
    <div key={index} className={`iconBox ${item.class}`}>
      <FontAwesomeIcon icon={item.icon} className='icon' />
      <div className='skillName'>{item.name}</div>
    </div>
  ));
  const backSection = skillsDB.backContent.map((item, index) => (
    <div key={index} className={`iconBox ${item.class}`}>
      <FontAwesomeIcon icon={item.icon} className='icon' />
      <div className='skillName'>{item.name}</div>
    </div>
  ));
  const toolsSection = skillsDB.toolsContent.map((item, index) => (
    <div key={index} className={`iconBox ${item.class}`}>
      <FontAwesomeIcon icon={item.icon} className='icon' />
      <div className='skillName'>{item.name}</div>
    </div>
  ));

  return (
    <div className='pageContent'>
      <PageTitle>{skillsDB.title}</PageTitle>
      <div className='skills'>
        <div className='skillsSection'>
          <div className='sectionTitle'>{skillsDB.frontTitle}</div>
          <div className='skillsContent'>{frontSection}</div>
        </div>

        <div className='skillsSection'>
          <div className='sectionTitle'>{skillsDB.backTitle}</div>
          <div className='skillsContent'>{backSection}</div>
        </div>

        <div className='skillsSection'>
          <div className='sectionTitle'>{skillsDB.toolsTitle}</div>
          <div className='skillsContent'>{toolsSection}</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
