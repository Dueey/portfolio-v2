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
    autoplay: false,
    autoplaySpeed: 15000,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <a
          href='https://tetris-react-javascript.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div>
            <img src='/images/The_Tetris_Company_logo.png' alt='' />
          </div>
        </a>
      </Wrap>
      <Wrap>
        <a
          href='https://pacman-javascript.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div>
            <img src='/images/pacman.svg' alt='' />
          </div>
        </a>
      </Wrap>
      <Wrap>
        <a
          href='https://chess-react-javascript.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='chess'>
            <img src='/images/chess.png' alt='' />
          </div>
        </a>
      </Wrap>
      <Wrap>
        <a
          href='https://tic-tac-toe-javascript-basic.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='tictactoe'>
            <img src='/images/tictactoe.png' alt='' />
          </div>
        </a>
      </Wrap>
      <Wrap>
        <a
          href='https://react--clone-8f180.web.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='amazon'>
            <img src='/images/amazon.png' alt='' />
          </div>
        </a>
      </Wrap>
      <Wrap>
        <a
          href='https://react-disney-clone-d5025.web.app/home'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div>
            <img src='/images/disney.svg' alt='' />
          </div>
        </a>
      </Wrap>
      <Wrap>
        <a
          href='https://react-netflix-clone-e098d.web.app/browse'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='netflix'>
            <img src='/images/netflix.png' alt='' />
          </div>
        </a>
      </Wrap>
      <Wrap>
        <a
          href='https://react-netflix-clone-e098d.web.app/browse'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='yelp'>
            <img src='/images/yelp.png' alt='' />
          </div>
        </a>
      </Wrap>

      <Wrap>
        <a
          href='https://travel-website-react-javascript.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='travel'>
            <img src='/images/travel.png' alt='' />
          </div>
        </a>
      </Wrap>
      <Wrap>
        <a
          href='https://e-commerce-react-javascript.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='ecommerce'>
            <img src='/images/commerce.png' alt='' />
          </div>
        </a>
      </Wrap>
      <Wrap>
        <a
          href='https://discord.com/oauth2/authorize?client_id=827787615948242985&scope=bot&permissions=0'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='discord'>
            <img src='/images/discord1.png' alt='' />
            <img src='/images/discord.png' alt='' />
          </div>
        </a>
      </Wrap>
      <Wrap>
        <a
          href='https://e-commerce-react-javascript.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className=''>
            <img src='/images/spotify.png' alt='' />
          </div>
        </a>
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
  cursor: pointer;
  /* background-color: white; */

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    margin-top: 1px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    background-color: #29292c;

    img {
      height: 75px;
      width: 100%;
      object-fit: contain;
      transform: scale(0.8);
    }
  }

  .chess {
    img {
      transform: scale(1.01);
    }
  }

  .tictactoe {
    img {
      transform: scale(1.4);
      filter: invert(1);
    }
  }

  .netflix {
    img {
      transform: scale(1.2);
    }
  }

  .yelp {
    img {
      filter: brightness(1.2);
    }
  }

  .travel {
    img {
      transform: scale(0.9);
    }
  }

  .discord {
    img {
    }
  }

  :hover {
    filter: brightness(1.1);
  }
`;

export default ImgSlider;
