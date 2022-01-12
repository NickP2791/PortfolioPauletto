import React from "react";
import styled from "styled-components";
import ContactMediaLinks from "./ContactMediaLinks";

// this component is added or removed based on the screen size
// controlled in the Contact component
const SocialMedia = () => {
  return (
    <Wrapper>
      <h3>Find me on social media</h3>
      <ContactMediaLinks />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: var(--grey);
  border-radius: 8px;
  width: 100%;
  height: fit-content;
  color: var(--dark);
  padding: 1rem 0;
  row-gap: 0.6rem;

  /* shadow */

  -moz-box-shadow: 7px 6px 5px 2px black;
  -webkit-box-shadow: 7px 6px 5px 2px black;
  box-shadow: 7px 6px 5px 2px black;

  h3 {
    grid-column: span 3;
    justify-self: center;
    align-self: center;
    margin: 0.6rem 0;
    color: var(--dark);
    font-family: var(--robo);
  }

  @media screen and (min-width: 470px) and (max-width: 600px) {
    position: absolute;
    width: 50%;
    bottom: -21vh;
    right: 0;
    padding: 0.5rem 0;
  }

  @media screen and (max-width: 469px) {
    display: flex;
    flex-direction: column;
  }
`;
export default SocialMedia;
