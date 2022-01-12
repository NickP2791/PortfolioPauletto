import React from "react";
import styled from "styled-components";

const AboutStatement = ({ item }) => {
  // console.log(item);
  return (
    <AboutBlock>
      <h3>{item.title}</h3>
      {item.content.map((para, index) => (
        <p key={index}>{para}</p>
      ))}
    </AboutBlock>
  );
};

const AboutBlock = styled.article`
  max-width: 650px;
  margin-inline: auto;
`;

export default AboutStatement;
