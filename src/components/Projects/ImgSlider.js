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
    autoplaySpeed: 10000,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/01/img21/events/grfww/traffic_drivers/GRFWW_GW_Desktop_MemorialDayDeals_1x-1500x600._CB661646560_.jpg'
          alt='home_img_1'
        />
      </Wrap>
      <Wrap>
        <img
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt='home_img_2'
        />
      </Wrap>
      <Wrap>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YmM4ZGRiNGQt/YmM4ZGRiNGQt-YTRiMTc0YmMt-w1500._CB669820426_.jpg'
          alt='home_img_3'
        />
      </Wrap>
      <Wrap>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/SWSpringDeal_DMUX-4280/Gateway/DV4/US-EN_030821_SpringSitewide_ACQ_GW_Hero_D_1500x600_CV40._CB656151158_.jpg'
          alt='home_img_4'
        />
      </Wrap>
      <Wrap></Wrap>
      <Wrap></Wrap>
      <Wrap></Wrap>
      <Wrap></Wrap>
    </Carousel>
  );
}

const Carousel = styled(Slider)`
  margin: 20px;
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

  img {
    height: 80px;
    width: 100%;
    overflow: hidden;
    transform: scale(2);
  }
`;

export default ImgSlider;
