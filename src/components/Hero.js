import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Hero = () => {
  return (
    <HeroSection id='top'>
      {/* hero background image */}
      <StaticImage
        className='imghero'
        src='../images/heroimage.jpg'
        alt='hero section image'
        placeholder='none'
        backgroundColor='#f26112'
        layout='fullWidth'
        loading='eager'
      />
      <Container>
        <div className='Photo'>
          <StaticImage
            className='selfphoto'
            src='../images/Pauletto.png'
            alt='picture of me'
            width={300}
            placeholder='none'
            loading='eager'
            // layout='fixed'
          />
        </div>

        <HeroTop>
          <h1 className='hero__name'>
            Nicolas
            <span style={{ color: "white" }}>Pauletto</span>
          </h1>
          <hr />
          <h1>
            <span style={{ color: "white" }}>Front-End</span>Developer
          </h1>
        </HeroTop>

        <HeroBottom>
          <h1 className='tagline'>
            <span className='first'>with </span>
            <span className='second' style={{ color: "white" }}>
              unique
            </span>
            <span className='third'> experience</span>
          </h1>
        </HeroBottom>
      </Container>
    </HeroSection>
  );
};

const HeroSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  /* top: 8vh; */
  height: 100%;
  width: 100%;

  .imghero {
    width: 100%;
    height: 100%;
    opacity: 0.1;
    position: absolute;
  }

  @media screen and (max-width: 570px) {
    justify-content: center;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 85%;
  height: 85vh;
  position: absolute;
  top: 20%;
  z-index: 5;
  margin-left: 3em;

  .selfphoto {
    display: none;
  }

  @media screen and (max-width: 570px) {
    margin: 0;
    top: 5%;

    .selfphoto {
      display: block;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 2px solid var(--orange);
      background: #e0ddcf85;
    }
    .Photo {
      align-self: center;
      margin-bottom: 3rem;
    }
  } ;
`;

const HeroTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  hr {
    border: 2.8px solid #e0ddcf;
    border-radius: 2px;
    background-color: #e0ddcf;
    width: 90%;
    margin: 0.7em 0;
  }

  @media screen and (max-width: 570px) {
    .hero__name {
      font-size: 2.6rem;
    }
  } ;
`;

const HeroBottom = styled.div`
  width: 93%;

  .tagline {
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    margin-left: 4rem;
  }

  .second {
    margin-left: 0;
  }

  @media screen and (max-width: 570px) {
    flex-direction: column;
    width: 93%;

    .tagline {
      flex-direction: column;
      width: 80%;
    }

    .second {
      align-self: center;
      margin-left: -7rem;
    }

    .third {
      align-self: flex-end;
    }
  }
`;

export default Hero;
