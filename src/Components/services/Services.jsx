import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="fi fi-rr-box-open-full services__icon"></i>
            <h3 className="services__title">
              Full Stack <br /> Websites
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="fi fi-rr-arrow-small-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => setToggleState(0)}
                className="fi fi-rr-cross-small services__model-close"
              ></i>

              <h3 className="services__modal-title">Full Stack Websites</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience in the
                technologies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="fi fi-rs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="fi fi-rs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create responcive Web page development.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="fi fi-rs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I guarantee compatibility across various devices,
                    prioritizing an optimal user experience.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="fi fi-rs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I will focus on strategic positioning and utilizing Git for
                    version control.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="fi fi-rs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I ensure security and authentication by quality database
                    management.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="fi fi-rr-pen-circle services__icon"></i>
            <h3 className="services__title">
              Data <br /> Analytics
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="fi fi-rr-arrow-small-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => setToggleState(0)}
                className="fi fi-rr-cross-small services__model-close"
              ></i>

              <h3 className="services__modal-title">Data Analytics</h3>
              <p className="services__modal-description">
              Service with more than 2 years of experience in the
                technologies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="fi fi-rs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Data Visualization: Creating visually appealing and
                    easy-to-understand charts, graphs, and dashboards to
                    communicate findings effectively to stakeholders.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="fi fi-rs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="fi fi-rs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Predictive Modeling: Developing models to forecast trends,
                    identify patterns, and make data-driven predictions for
                    future outcomes.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="fi fi-rs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Data Cleaning and Preprocessing: Ensuring data quality by
                    cleaning and preparing datasets for analysis, including
                    handling missing values, outliers, and inconsistencies.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="fi fi-rs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Consultation and Recommendations: Offering expert advice on
                    data strategy, tools, and techniques, as well as suggesting
                    actionable steps to improve business processes based on data
                    insights.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
