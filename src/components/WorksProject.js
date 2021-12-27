import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { ProjectText } from "./WorksProjectText";

const WorksProject = ({ oneProj }) => {
  const { title, skills, codeUrl, siteUrl } = oneProj;
  const text = oneProj.body[0].children[0].text;
  const image = getImage(oneProj.mainImage.asset);

  // convert skills array to string separated by bullets
  const skillArr = () => {
    const arr = skills.map((skill) => skill.title);
    console.log(arr);
    return arr.toString().split(",").join("\xa0\xa0\u2022\xa0\xa0");
  };

  return (
    <Wrapper className='project'>
      <div className='content'>
        <h3 className='project__title'>
          <span>{title}</span>
        </h3>
        <ProjectText className='project__description'>{text}</ProjectText>

        <p>
          <span>{skillArr()}</span>
        </p>
      </div>
      <div className='image'>
        <GatsbyImage
          image={image}
          alt='project screenshot'
          className='shadow'
        />
      </div>
      <div className='links'>
        {siteUrl && (
          <a href={siteUrl} target='_blank' rel='noreferrer'>
            Live site
          </a>
        )}
        <a href={codeUrl} target='_blank' rel='noreferrer'>
          View code
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 4.25fr 0.75fr 4fr 1rem auto 1rem;
  width: 90%;
  color: white;

  .image,
  .content {
    grid-row: 1;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    grid-column: 1 / 3;
    align-self: center;
    z-index: 2;
  }
  .image {
    grid-column: 2 / 4;
  }

  .links {
    grid-column: 5 /6;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
  }

  .project__title {
    font-family: var(--rale);
    color: var(--orange);
  }

  span {
    background: var(--dark);
  }

  p {
    font-size: 0.75rem;
  }

  a {
    color: var(--lightblue);
    margin: 2rem 0;
    transition: var(--transition);
  }

  a:nth-child(2) {
    margin: -1rem 0;
  }

  a:hover {
    transform: scale(1.2);
    transition: var(--transition);
    color: var(--light);
  }

  .shadow {
    -moz-box-shadow: 7px 6px 5px 2px black;
    -webkit-box-shadow: 7px 6px 5px 2px black;
    box-shadow: 7px 6px 5px 2px black;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 3.5fr 3.5fr 1.5fr;
    grid-template-rows: 1fr 3fr auto;
    gap: 0;

    .content {
      grid-column: 1 / 3;
      grid-row: 2 / 3;
    }

    .image {
      grid-column: 2 / 4;
      grid-row: 1 / 4;
    }

    .links {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }

    .links a {
      margin: 0.5rem;
    }
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem auto;
    gap: 1.4rem;

    .image {
      order: -1;
      height: 40%;
    }

    .content {
      width: 90%;
    }

    .links a {
      margin: 0.5rem;
    }
  }
`;

export default WorksProject;
