import React from "react";
import SkillsGrid from "./SkillsGrid";
import Accordion from "./Accordion";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

const query = graphql`
  {
    columns: allSanitySkillCategory(sort: { order: ASC, fields: column }) {
      nodes {
        column
        title
        skills {
          title
          _id
        }
      }
    }
  }
`;

export default function Skills() {
  const breakpoints = useBreakpoint();
  const data = useStaticQuery(query);
  const SkillsData = data.columns.nodes;
  console.log(SkillsData);
  return (
    <SkillsSection id='skills'>
      <SkillsTop>
        <h2>Skills</h2>
        <h2 className='sub1 moveLeft'>My Toolbox</h2>
        <h2 className='sub2'>
          What I've been using in my projects of which gets added to every time
          I work on a new assignment
        </h2>
      </SkillsTop>

      <SkillsBottom>
        {breakpoints.sm ? (
          <Accordion SkillsData={SkillsData} classname='showaccordion' />
        ) : (
          <SkillsGrid SkillsData={SkillsData} className='showgrid' />
        )}
      </SkillsBottom>
    </SkillsSection>
  );
}

const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8vh;
  width: 100%;
  height: 100%;
`;

const SkillsTop = styled.div`
  text-align: center;
  width: 550px;

  @media screen and (max-width: 600px) {
    /* text-align: center; */
    width: 90vw;
  }

  .sub1,
  .sub2 {
    font-family: var(--robo);
    font-weight: 400;
    color: var(--dark);
  }

  .sub1 {
    font-size: min(8vw + 0.8rem, 8vw);
  }

  .sub2 {
    font-size: calc(1.8vw + 0.3rem);
    line-height: none;
  }

  @media screen and (max-width: 1200px) {
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

const SkillsBottom = styled.div`
  max-width: 800px;
  justify-content: center;

  @media screen and (min-width: 600px) {
  }

  @media screen and (max-width: 992px) {
    width: 95%;
  }

  @media screen and (max-width: 600px) {
  }
`;
