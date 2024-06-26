import React from 'react'
import "./About.css"

const Info = () => {
  return (
    <div className='about__info grid'>
      <div className='about__box'>
      <i class="fi fi-rr-badge about__icon"></i>

        <h3 className='about__title'>Experiemnce</h3>
        <span className='about__subtitle'>4 Months Working</span>
      </div>
      <div className='about__box'>
      <i class="fi fi-rr-briefcase about__icon"></i>

        <h3 className='about__title'>Completed</h3>
        <span className='about__subtitle'>8+ Projects</span>
      </div>
      <div className='about__box'>
      <i class="fi fi-rr-headphones about__icon"></i>

        <h3 className='about__title'>Support</h3>
        <span className='about__subtitle'>Online 24/7</span>
      </div>
    </div>
  )
}

export default Info
