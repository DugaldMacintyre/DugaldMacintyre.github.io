import React from 'react';

const SkillsContainer = (props) => {

  const {title, skills, logos, competency} = props  
  return (
    <div className="skills__content">
        <h3 className="skills__title">{title}</h3>

        <div className="skills__box">
            {skills.map((column, columnIndex) => (
                <div key={columnIndex} className="skills__group">
                    {column.map((item, itemIndex) => (
                        <div key={itemIndex} className="skills__data">
                        <i className={logos[columnIndex][itemIndex]}></i>
                            <div>
                                <h3 className="skills__name">{skills[columnIndex][itemIndex]}</h3>
                                <span className="skills__level">{competency[columnIndex][itemIndex]}</span>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </div>
  )
}

export default SkillsContainer
