import React, { useState } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
import { SkillListItem } from "./SkillsListItem";

const Accordion = ({ SkillsData }) => {
  const [clicked, setClicked] = useState(false);

  const toggle = (column) => {
    if (clicked === column) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }
    setClicked(column);
  };

  return (
    <IconContext.Provider value={{ color: "var(--dark)", size: "25px" }}>
      <AccordionSection>
        <Container>
          {SkillsData.map((item) => {
            const { column, title, skills } = item;
            console.log(column, title, skills);
            return (
              <>
                <Wrap onClick={() => toggle(column)} key={column}>
                  <h2>{title}</h2>
                  <span>
                    {clicked === column ? <IoChevronUp /> : <IoChevronDown />}
                  </span>
                </Wrap>
                {clicked === column ? (
                  <Dropdown>
                    {skills.map((skill) => {
                      return (
                        <SkillListItem key={skill._id}>
                          {skill.title}
                        </SkillListItem>
                      );
                    })}
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  background: #fff;
`;

const Container = styled.div`
  position: absolute;
  top: 30%;
  padding: 0.5rem;
`;

const Wrap = styled.div`
  background: var(--light);
  border: 1px solid var(--dark);
  border-radius: 2rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;

  /* shadow */
  -moz-box-shadow: 4px 5px 4px 2px black;
  -webkit-box-shadow: 4px 5px 4px 2px black;
  box-shadow: 4px 5px 4px 2px black;

  h2 {
    padding: 1.1rem;
    width: 100%;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
`;
export default Accordion;
