import styled from "styled-components";

export const SkillListItem = styled.h4`
  background: var(--grey);
  padding: 0.3rem 0.9rem;
  margin: 0.3rem;
  font-family: var(--robo);
  font-weight: bold;
  color: var(--dark);
  text-transform: uppercase;
  border-radius: 5px;
  border: 1px solid #302f2d;
  font-size: 1.25rem;

  /* shadow */
  -moz-box-shadow: 4px 5px 4px 2px black;
  -webkit-box-shadow: 4px 5px 4px 2px black;
  box-shadow: 4px 5px 4px 2px black;

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
`;
