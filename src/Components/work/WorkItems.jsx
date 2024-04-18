import React from 'react'
import "./Work.css"
const WorkItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className='work__img' />
        <h3 className='work__title'>{item.title}</h3>
        <a href="https://github.com/Manoj-Sh-AI?tab=repositories" className='work__button'>
            To GitHub <i className='fi fi-rr-arrow-small-right work__button-icon'></i>
        </a>
    </div>
  )
}

export default WorkItems
