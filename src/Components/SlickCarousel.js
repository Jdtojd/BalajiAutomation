import React, { useEffect } from "react";
import $ from "jquery";
import "slick-carousel/slick/slick"; // Import the Slick carousel
import "slick-carousel/slick/slick.css"; // Import the Slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import the Slick carousel theme CSS

const SlickCarousel = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(".customer-logos").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 768,
            setting: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 520,
            setting: {
              slidesToShow: 3,
            },
          },
        ],
      });
    });
  }, []);

  return (
    <>
      <div className="containerr ">
        <h1 className="text-center font-weight-bold ourtext">Our Partners</h1>

        <div className="row">
          <div className="col-md-12">
            <section className="customer-logos slider">
              <div className="slide">
                <img
                  src="https://www.facultyplus.com/wp-content/uploads/2021/01/deshbandhu-college-logo.png"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://w7.pngwing.com/pngs/136/352/png-transparent-faculty-of-law-university-of-delhi-daulat-ram-college-student-thumbnail.png"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/JNU_logo.svg/424px-JNU_logo.svg.png?20160227183231"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://npti.gov.in/sites/all/themes/npti/images/logo.jpg"
                  alt=""
                />
              </div>
              {/* <div class="slide">
          <img src="https://schools.org.in/assets/images/favicon.png" alt="" />
        </div> */}
              <div className="slide">
                <img
                  src="https://seeklogo.com/images/C/cbse-logo-46D5A6B556-seeklogo.com.png"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://www.murarilalglobalschool.co.in/images/logo.jpg"
                  alt=""
                />
              </div>
              <div className="slide">
                <img
                  src="https://modernschool.net/wp-content/uploads/2019/08/logo-3e.png"
                  alt=""
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlickCarousel;
