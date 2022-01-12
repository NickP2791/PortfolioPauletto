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
const ContactMediaLinks = () => {
  const data = useStaticQuery(query);
  const socialArr = data.social.nodes;

  return (
    <WrapperLinks>
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
    </WrapperLinks>
  );
};

const WrapperLinks = styled.div`
  grid-column: 2/4;

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

  @media screen and (max-width: 469px) {
    display: flex;
    justify-content: space-evenly;
  }
`;

export default ContactMediaLinks;
