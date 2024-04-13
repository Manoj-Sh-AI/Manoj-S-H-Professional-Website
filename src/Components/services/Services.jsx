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
                Service with more than 3 years of experience in the technologies. Providing quality
                work to clients and companies.
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
                  <p className="services__modal-info">I create responcive Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="fi fi-rs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  I guarantee compatibility across various devices, prioritizing an optimal user experience.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="fi fi-rs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  I will focus on strategic positioning and utilizing Git for version control.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="fi fi-rs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I ensure security and authentication by quality database management.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="fi fi-rr-square-code services__icon"></i>
            <h3 className="services__title">
              ML <br />Model Development
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="fi fi-rr-arrow-small-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => setToggleState(0)}
                className="fi fi-rr-cross-small services__model-close"
              ></i>

              <h3 className="services__modal-title">Ui/Ux Designer</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="fi fi-rs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="fi fi-rs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="fi fi-rs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="fi fi-rs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="fi fi-rs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
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

              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">
                Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="fi fi-rs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="fi fi-rs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="fi fi-rs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="fi fi-rs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="fi fi-rs-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
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
