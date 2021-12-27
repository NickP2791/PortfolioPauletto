import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { SocialIcon } from "react-social-icons";

const query = graphql`
  {
    social: allSanitySocial {
      nodes {
        _id
        title
        socialUrl
      }
    }
  }
`;

const SocialMedia = () => {
  const data = useStaticQuery(query);
  const socialArr = data.social.nodes;

  return (
    <Wrapper>
      <h4>Find me on social media</h4>
      <div className='links'>
        {socialArr.map((each) => {
          return (
            <div className='socialLink' key={each._id}>
              <SocialIcon
                url={each.socialUrl}
                style={{ height: 35, width: 35 }}
              />
              <a href={each.socialUrl}>{each.title}</a>
            </div>
          );
        })}
      </div>
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

  h4 {
    grid-column: span 3;
    justify-self: center;
    align-self: center;
    margin: 0.6rem 0;
  }
  .links {
    grid-column: 2/4;
  }

  .socialLink {
    transition: var(--transition);
  }

  .socialLink {
    margin-bottom: 0.7rem;
  }

  .socialLink:hover {
    transform: scale(1.2);
    transition: var(--transition);
  }

  .socialLink:hover:after {
  }

  a {
    color: var(--dark);
    margin-left: 0.7rem;
  }

  @media screen and (min-width: 470px) and (max-width: 600px) {
    position: absolute;
    width: 50%;
    bottom: -17vh;
    right: 0;
    padding: 0.5rem 0;
  }

  @media screen and (max-width: 469px) {
    display: flex;
    flex-direction: column;

    .links {
      display: flex;
      justify-content: space-evenly;
    }
  } ;
`;
export default SocialMedia;
