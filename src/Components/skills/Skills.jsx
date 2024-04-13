import React from 'react'
import "./Skills.css"
import Frontend from './Frontend'
import Backend from './Backend'
import Thirdskill from './Thirdskill'
import Fourthskill from './Fourthskill'

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
        <h2 className="section__title">Skills</h2>
        <span className='section__subtitle'>My Technical Level</span>

        <div className="skills__container container grid">
            <Frontend />
            <Backend />
            <Thirdskill />
            <Fourthskill />
        </div>
    </section>
  )
}

export default Skills
