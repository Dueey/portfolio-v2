import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImgSlider() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 15000,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <div>
          <img
            src='https://images-na.ssl-images-amazon.com/images/G/01/img21/events/grfww/traffic_drivers/GRFWW_GW_Desktop_MemorialDayDeals_1x-1500x600._CB661646560_.jpg'
            alt='home_img_1'
          />
        </div>
      </Wrap>
      <Wrap>
        <div>
          <img
            src='https://images-na.ssl-images-amazon.com/images/G/01/img21/events/grfww/traffic_drivers/GRFWW_GW_Desktop_MemorialDayDeals_1x-1500x600._CB661646560_.jpg'
            alt='home_img_1'
          />
        </div>
      </Wrap>
      <Wrap>
        <div>
          <img
            src='https://images-na.ssl-images-amazon.com/images/G/01/img21/events/grfww/traffic_drivers/GRFWW_GW_Desktop_MemorialDayDeals_1x-1500x600._CB661646560_.jpg'
            alt='home_img_1'
          />
        </div>
      </Wrap>
      <Wrap>
        <div>
          <img
            src='https://images-na.ssl-images-amazon.com/images/G/01/img21/events/grfww/traffic_drivers/GRFWW_GW_Desktop_MemorialDayDeals_1x-1500x600._CB661646560_.jpg'
            alt='home_img_1'
          />
        </div>
      </Wrap>
      <Wrap>
        <div>
          <img
            src='https://images-na.ssl-images-amazon.com/images/G/01/img21/events/grfww/traffic_drivers/GRFWW_GW_Desktop_MemorialDayDeals_1x-1500x600._CB661646560_.jpg'
            alt='home_img_1'
          />
        </div>
      </Wrap>
      <Wrap>
        <div>
          <img
            src='https://images-na.ssl-images-amazon.com/images/G/01/img21/events/grfww/traffic_drivers/GRFWW_GW_Desktop_MemorialDayDeals_1x-1500x600._CB661646560_.jpg'
            alt='home_img_1'
          />
        </div>
      </Wrap>
      <Wrap>
        <div>
          <img
            src='https://images-na.ssl-images-amazon.com/images/G/01/img21/events/grfww/traffic_drivers/GRFWW_GW_Desktop_MemorialDayDeals_1x-1500x600._CB661646560_.jpg'
            alt='home_img_1'
          />
        </div>
      </Wrap>
      <Wrap>
        <div>
          <img
            src='https://images-na.ssl-images-amazon.com/images/G/01/img21/events/grfww/traffic_drivers/GRFWW_GW_Desktop_MemorialDayDeals_1x-1500x600._CB661646560_.jpg'
            alt='home_img_1'
          />
        </div>
      </Wrap>
    </Carousel>
  );
}

const Carousel = styled(Slider)`
  margin: 10px;
  margin-bottom: -40px;
  max-width: 800px;
  z-index: 1;
  display: flex;
  justify-self: center;
  align-self: center;
`;

const Wrap = styled.div`
  height: 80px;
  margin: 5px;
  margin-left: 0;

  div {
    margin: 5px;

    img {
      border-radius: 4px;

      width: 100%;
      overflow: hidden;
    }
  }
`;

export default ImgSlider;
