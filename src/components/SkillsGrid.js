import React, { Fragment } from "react";
import { SkillListItem } from "./SkillsListItem";
import styled from "styled-components";

const SkillsGrid = ({ SkillsData }) => {
  // const { title, skills, column } = col;

  return (
    <Container>
      {SkillsData.map((item) => {
        const { column, title, skills } = item;
        return (
          <Fragment key={column}>
            <h2 className={`title${column}`}>{title}</h2>
            <div className={`list${column}`}>
              {skills.map((skill) => {
                return (
                  <SkillListItem key={skill._id}>{skill.title}</SkillListItem>
                );
              })}
            </div>
          </Fragment>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  justify-content: center;
  margin: 0 auto;
  margin-top: 3vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1rem;
  grid-template-areas:
    "headerA headerB headerC"
    "listA listB listC";

  .title1 {
    grid-area: headerA;
  }

  .title2 {
    grid-area: headerB;
    padding: 0 2rem;
  }

  .title3 {
    grid-area: headerC;
  }

  .title1,
  .title2,
  .title3 {
    text-align: center;
    align-self: center;
    margin: 0.4rem 0;
    font-size: calc(2.7vw + 0.6rem);
  }

  .list1 {
    grid-area: listA;
  }

  .list2 {
    grid-area: listB;
  }
  .list3 {
    grid-area: listC;
  }
  .list1,
  .list2,
  .list3 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default SkillsGrid;
