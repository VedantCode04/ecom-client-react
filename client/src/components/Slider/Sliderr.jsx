import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Sliderr = () => {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  const data = [
    {
      url: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=1050&h=400"
    },
    {
      url: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1050&h=400",
    },
    {
      url: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1050&h=400"
    },
    {
      url: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1050&h=400",
    },
    {
      url: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1050&h=400",
    },
    {
      url: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1050&h=400",
    },
    
  ];

  return (
    <div className="sliderr">
      <div className="container2">
        {/* {data.map((img, index) => (
          <img src={img.url} />
        ))} */}

        <Slider {...settings}> 
        {data.map((img, index) => (
          <div className="image">
            <img src={img.url}/>
          </div>
        ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sliderr;
