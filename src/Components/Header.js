import React from 'react';

const Header = () => {
  return (
    <>
      <header className="header">
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-center">
              <h1 className="display-2 font-weight-bolder text-center ">
                Expert Printer repair & servicing services
              </h1>
              <p className="main-hero-para">
                Welcome to our professional printer repair and servicing center.
                We are your one-stop solution for all your printer-related
                issues. Our team of skilled technicians is dedicated to
                providing top-notch services to keep your printers running at
                peak performance.
              </p>

              <button className="btn  btn-style" type="submit">
                <a href="tel:+919540659325">Call Now</a>
              </button>
            </div>
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img
                src="https://cdn.pixabay.com/photo/2012/04/02/16/42/printer-24913_1280.png"
                alt="heroimg"
                className="img-fluid"
              />
              {/* <img src="https://images.unsplash.com/photo-1605140316783-b43dfc1df270?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="heroimg2" className="img-fluid main-hero-img2" /> */}
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
