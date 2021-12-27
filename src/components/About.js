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
        <div className='content'>
          <AddSlider>
            {AboutContent.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <AboutStatement item={item} />
                </SwiperSlide>
              );
            })}
          </AddSlider>
        </div>
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
  justify-content: center;
  width: 47rem;
  margin: 0;
  margin-top: 0;

  /* Swiper JS custom css */
  .swiper-button-next,
  .swiper-button-prev {
    top: 35%;
  }

  .swiper-pagination {
    bottom: 0;
  }

  .swiper {
    z-index: 4;
  }

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

  .content {
    width: 55%;
    flex: 1;
  }

  p {
    margin: 1.3rem auto;
    padding: 0;
    font-size: max(1vw + 0.3rem, 1.4rem);
    max-width: 45ch;
  }

  @media screen and (max-width: 1200px) {
    display: block;
    width: 100%;
    /* flex: 1; */
    margin-left: 500px;
    margin-top: 3rem;

    p {
      padding: 0 2rem;
    }
  }

  @media screen and (max-width: 900px) {
    display: flex;
    margin-left: 0;
    padding-left: 195px;
  }

  @media screen and (max-width: 700px) {
    margin: 0 1rem;
    padding: 0 0.5rem;
    font-size: 2rem;

    .selfphoto {
      display: none;
    }

    p {
      padding: 0 3rem;
    }
  }

  @media screen and (max-width: 500px) {
    p {
      font-size: 1rem;
      padding: 0 2rem;
    }
  }
`;
export default About;
