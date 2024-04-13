import React from 'react'
import "./Skills.css"
const Thirdskill = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Machine Learning</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="fi fi-bs-badge-check"></i>

            <div>
              <h3 className="skills__name">Scikit-Learn</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="fi fi-bs-badge-check"></i>

            <div>
              <h3 className="skills__name">TensorFlow</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="fi fi-bs-badge-check"></i>

            <div>
              <h3 className="skills__name">Docker</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i class="fi fi-bs-badge-check"></i>

            <div>
              <h3 className="skills__name">RESTful APIs</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="fi fi-bs-badge-check"></i>

            <div>
              <h3 className="skills__name">Data Science</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="fi fi-bs-badge-check"></i>

            <div>
              <h3 className="skills__name">Pytorch</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Thirdskill
