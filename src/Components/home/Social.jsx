import React from 'react';
import "./Home.css"

const Social = () => {
  return (
    <div className='home__social'>
        <a href="https://twitter.com/ManojSH100" className='home__social-icon' target='_blank'>
        <i class="fi fi-brands-twitter-alt"></i>
        </a>
        <a href="https://github.com/Manoj-Sh-AI" className='home__social-icon' target='_blank'>
        <i class="fi fi-brands-github"></i>
        </a>
        <a href="https://in.linkedin.com/in/manoj-s-h-6b646b1bb" className='home__social-icon' target='_blank'>
        <i class="fi fi-brands-linkedin"></i>
        </a>
    </div>
  )
}

export default Social
