import React from "react";
import styled from "styled-components";
import { ContactForm } from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactDivider from "./ContactDivider";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import SocialMedia from "./ContactSocialMedia";

const Contact = () => {
  const breakpoints = useBreakpoint();

  return (
    <ContactSection id='contact'>
      <ContactTop className='top'>
        <h2>Contact</h2>
        <h2 className='sub1 moveLeft'>Get in touch</h2>
        <h2 className='sub2'>
          My email is always open. If you still have questions or want to
          discuss your next project, do not hesitate to start a chat.
        </h2>
      </ContactTop>
      <ContactBottom className='bottom__contact'>
        <ContactForm />
        {breakpoints.md ? (
          <SocialMedia />
        ) : (
          <>
            <ContactDivider />
            <ContactInfo />
          </>
        )}
      </ContactBottom>
    </ContactSection>
  );
};

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ContactTop = styled.div`
  text-align: center;
  width: 650px;

  .sub1,
  .sub2 {
    font-family: var(--robo);
    font-weight: 400;
    color: var(--dark);
  }

  .sub1 {
    font-size: min(8vw + 0.8rem, 8vw);
    line-height: 1;
    margin-top: -0.5rem;
  }

  .sub2 {
    font-size: calc(1.8vw + 0.3rem);
    line-height: none;
  }

  @media screen and (min-width: 1200px) {
    .moveLeft {
      position: absolute;
      left: -190px;
      bottom: 42%;
      transform: rotate(-90deg);
      max-height: 90vh;
      /* font-size: 8rem; */
    }
  }

  @media screen and (max-width: 992px) {
    .sub2 {
      font-size: calc(1.9vw + 0.6rem);
      line-height: none;
    }
  }

  @media screen and (max-width: 600px) {
    text-align: center;
    width: 90%;
  }
`;

const ContactBottom = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 0.25fr 1.5fr;
  width: min(950px, 95vw);
  gap: 2rem;
  position: relative;
  margin: 1rem auto;
  margin-top: 3rem;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1.5fr 1.5fr;
  }

  @media screen and (max-width: 600px) {
    margin: 0 auto;
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    width: max(90%);
    gap: 3vh;
  }
`;
export default Contact;
