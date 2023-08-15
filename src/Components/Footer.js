import React from 'react';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-12 col-lg-6 mt-5">
                  <h2>Balaji Automation Technology</h2>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/service">Service</a>
                    </li>
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>

                <div className="col-12 col-lg-6 mt-5">
                  <h2>Contact Us</h2>
                  <div className="row">
                    <div className="col-12 m-3">
                      <i className="fas fa-phone "></i>
                      <h4>
                        +91-9873511144 , <hr></hr> +91-9953701868
                      </h4>
                    </div>
                    <div className="col-12 m-3">
                      <i className="fas fa-map-marker-alt fa-lg"></i>
                      <h4>New Delhi-110062</h4>
                    </div>
                    <div className="col-12 m-3">
                      <i className="far fa-envelope"></i>
                      <h4>balajiat9953@gmail.com</h4>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  All Rights Reserved @ 2023 BalajiAutomationTechnology,Inc. -
                  All right reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
