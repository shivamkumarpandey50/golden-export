import React from "react";
import Slider from "react-slick";
import "./IndustriesPage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndustriesPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="industries-page">
      <div className="industries-container1 animated">
        <h2 className="industries-title">INDUSTRIES WE SERVE IN</h2>
        <p className="industries-description">
          With years of hard work and dedication, Golden Exports has built
          expertise and connections in various industries such as garments,
          furniture, and commodities. We aim to serve various markets and a wide
          variety of customers.
        </p>
      </div>

      <div className="industries-container2 animated">
        <Slider {...settings}>
          <div className="industry-card">
            <div className="industry-image-container">
              <img
                src="src/assets/furniture.webp"
                alt="Furniture"
                className="industry-image"
              />
            </div>
            <div className="industry-info">
              <div className="explore">EXPLORE</div>
            </div>
          </div>
          <div className="industry-card">
            <div className="industry-image-container">
              <img
                src="src/assets/garments.webp"
                alt="Garments"
                className="industry-image"
              />
            </div>
            <div className="industry-info">
              <div className="explore">EXPLORE</div>
            </div>
          </div>
          <div className="industry-card">
            <div className="industry-image-container">
              <img
                src="src/assets/commodity.webp"
                alt="Commodities"
                className="industry-image"
              />
            </div>
            <div className="industry-info">
              <div className="explore">EXPLORE</div>
            </div>
          </div>
          <div className="industry-card">
            <div className="industry-image-container">
              <img
                src="src/assets/Tools.webp"
                alt="Tools"
                className="industry-image"
              />
            </div>
            <div className="industry-info">
              <div className="explore">EXPLORE</div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default IndustriesPage;
