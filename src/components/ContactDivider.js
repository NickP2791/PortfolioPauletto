import React from "react";
import styled from "styled-components";

const ContactDivider = () => {
  return (
    <DivideWrapper>
      <Line />
      <OrWhat>
        <p>OR</p>
      </OrWhat>
      <Line />
    </DivideWrapper>
  );
};

const DivideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: -2rem 0;
  height: 50%;
  text-align: center;
`;
const Line = styled.div`
  flex: 3;
  border-left: 1px solid var(--dark);
  height: 100%;
`;
const OrWhat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.25rem 0;
  flex: 1;
  width: 100%;
  height: 50px;
  /* border: 2px solid blue; */
  background: var(--orange);
  border-radius: 50%;

  p {
    font-family: var(--rale);
    font-size: 2rem;
    color: var(--light);
  }
`;

export default ContactDivider;
