import React from "react";

const AboutStatement = ({ item }) => {
  console.log(item);
  return (
    <>
      <h3>{item.title}</h3>
      {item.content.map((para, index) => (
        <p key={index}>{para}</p>
      ))}
    </>
  );
};

export default AboutStatement;
