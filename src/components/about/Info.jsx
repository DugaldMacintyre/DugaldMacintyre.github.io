import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
            <div className="about__box">
            <i className="bx bx-award about__icon"></i>

                <h3 className="about__title">Education</h3>
                <span className="about__subtitle">BSc AI & CS</span>
            </div>

            <div className="about__box">
            <i className="bx bx-code-alt about__icon"></i>
                <h3 className="about__title">Interests</h3>
                <span className="about__subtitle">Data Science & Web Development</span>
            </div>

            <div className="about__box">
            <i className="bx bx-code-alt about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">Seeking more!</span>
            </div>
    </div>
  )
}

export default Info
