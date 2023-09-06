import React from 'react';
import "./skills.css";
import SkillsContainer from './SkillsContainer';
import { skillsData } from './SkillsData'; 

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">What I bring</span>

        <div className="skills__container container grid">
          {skillsData.map((data, index) => (
            <SkillsContainer
              key={index} 
              title={data.title}
              skills={data.skills}
              logos={data.logos}
              competency={data.competency}
            />
          ))}
        </div>
    </section>
  )
}

export default Skills