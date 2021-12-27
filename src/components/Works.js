import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import WorksProjectGrid from "./WorksProjectGrid";
import WorksProject from "./WorksProject";
import AddSlider from "./AddSlider";
import { SwiperSlide } from "swiper/react";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

const query = graphql`
  {
    projects: allSanityProject(sort: { order: ASC, fields: siteUrl }) {
      nodes {
        title
        id
        body {
          children {
            text
          }
        }
        skills {
          title
          _id
        }
        codeUrl
        siteUrl
        mainImage {
          asset {
            gatsbyImageData(width: 450, layout: CONSTRAINED, placeholder: NONE)
          }
        }
      }
    }
  }
`;

const Works = () => {
  const breakpoints = useBreakpoint();
  const data = useStaticQuery(query);
  const allProjects = data.projects.nodes;

  return (
    <WorksSection id='works'>
      <TopContainer>
        <h2>Works</h2>
        <h2 className='sub1 moveLeft' style={{ marginTop: "-.5rem" }}>
          My Projects
        </h2>
        <h2 className='sub2'>Featured creations</h2>
      </TopContainer>

      <BottomContainer>
        {breakpoints.sm ? (
          // this part for responsive view with slider
          <AddSlider>
            {allProjects.map((oneProj) => {
              return (
                <SwiperSlide key={oneProj.id}>
                  <WorksProject oneProj={oneProj} />
                </SwiperSlide>
              );
            })}
          </AddSlider>
        ) : (
          <WorksProjectGrid allProjects={allProjects} />
        )}
      </BottomContainer>
    </WorksSection>
  );
};

const WorksSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8vh;
  width: 100%;
  height: 100%;
`;

const TopContainer = styled.div`
  text-align: center;
  width: 100%;

  .sub1,
  .sub2 {
    font-family: var(--robo);
    font-weight: 400;
    color: var(--light);
  }

  .sub1 {
    font-size: min(8vw + 0.8rem, 7vw);
  }

  .sub2 {
    font-size: calc(1.8vw + 0.3rem);
    line-height: none;
  }

  @media screen and (max-width: 992px) {
    .sub2 {
      font-size: calc(1.9vw + 0.5rem);
    }
  }

  @media screen and (min-width: 1200px) {
    .moveLeft {
      position: absolute;
      left: -220px;
      bottom: 40%;
      transform: rotate(-90deg);
      max-height: 90vh;
      font-size: 8rem;
    }
  }
`;
const BottomContainer = styled.div`
  display: flex;
  height: 100%;
  width: min(850px, 90vw);
  color: white;
  margin: 1rem auto;

  /* Swiper JS custom css */
  .swiper-button-next,
  .swiper-button-prev {
    top: 35%;
  }

  @media screen and (min-width: 1200px) {
  }

  @media screen and (min-width: 1536px) {
    width: 900px;
  }
`;

export default Works;
