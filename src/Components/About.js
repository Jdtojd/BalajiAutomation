import React, { useState } from 'react';
import HowToUse from '../API/HowToUse';

const About = () => {
  const [aboutData] = useState(HowToUse);
  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-6 text-center our-service-leftside-img">
              <img src="./images/about.svg" alt="About" />
            </div>
            <div className="col-12 col-lg-6 our-services-list  ">
              <h3 className="mini-title">
                -- AVAILABLE @Delhi/NCR at your door steps
              </h3>
              <h1 className="main-heading">How do we work</h1>
              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row  our-services-info " key={id}>
                      <div className="col-1 our-services-number ">{id}</div>
                      <div className="col-10 our-services-data ">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
            </div>
          </div>
        </div>
      </section>

      {/* Second section */}
    </>
  );
};

export default About;
