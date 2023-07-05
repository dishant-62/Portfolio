import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-award about__icon' ></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">1.5 years and counting</span>
        </div>

        <div className="about__box">
        <i class='bx bx-briefcase about__icon' ></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">6 + Projects</span>
        </div>

        {/* <div className="about__box">
        <i class='bx bx-support about__icon' ></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Everytime<br/>(Excluding College hours)</span>
        </div> */}
    </div>
  )
}

export default Info;