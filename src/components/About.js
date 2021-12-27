import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import AddSlider from "./AddSlider";
import { AboutContent } from "./AboutContent";
import { SwiperSlide } from "swiper/react";
import AboutStatement from "./AboutStatement";

const About = () => {
  return (
    <Container id='about'>
      <AboutTop>
        <h2>About me</h2>
        <h2 className='sub1'>
          I believe that good communication doesn't just happen
        </h2>
        <h2 className='sub1'>...it is a result of good design.</h2>
      </AboutTop>

      <AboutBottom>
        {/* <div className='image'> */}
        <StaticImage
          className='selfphoto'
          src='../images/Pauletto.png'
          alt='My picture'
          width={900}
          // aspectRatio={1.3}
          placeholder='none'
          loading='eager'
          layout='fixed'
        />
        {/* </div> */}
        <AddSlider>
          {AboutContent.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <AboutStatement item={item} />
              </SwiperSlide>
            );
          })}
        </AddSlider>
      </AboutBottom>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8vh;
  width: 100%;
  height: 100%;
  gap: 1rem;
`;

const AboutTop = styled.div`
  text-align: center;

  .sub1 {
    font-family: "Roboto", sans-serif;
    color: var(--dark);
    font-size: calc(2vw + 0.8rem);
  }
`;

const AboutBottom = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  margin-left: min(500px);
  h3 {
    font-size: calc(2.6vw + 0.9rem);
  }

  .selfphoto {
    position: absolute;
    bottom: 0;
    left: -430px;
    z-index: 2;
  }

  .image {
    min-width: 218px;
    flex-grow: 0;
  }

  /* .content {
    display: flex;
    flex-direction: column;
    width: max(740px, 60vw);
    margin: 1rem 3rem 0 0;
    flex: 1;
  } */

  p {
    margin: 0.9rem 2.5rem;
    font-size: calc(1vw + 0.5rem);
  }

  @media screen and (max-width: 600px) {
    /* .image {
      display: none;
    } */

    .selfphoto {
      display: none;
    }

    p {
      font-size: calc(1vh + 0.6rem);
    }
  }

  /* Swiper JS custom css */
  .swiper-button-next,
  .swiper-button-prev {
    top: 35%;
  }

  .swiper {
    z-index: 4;
  }
`;
export default About;
