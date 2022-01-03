import React from "react";
import styled from "styled-components";
import { ContactForm } from "./ContactForm";
import SocialMedia from "./ContactSocialMedia";

const Contact = () => {
  return (
    <ContactSection id='contact'>
      <ContactTop className='top'>
        <h2>Contact</h2>
        <h2 className='sub1 moveLeft'>Say Hello</h2>
        <h2 className='sub2'>I look forward to hear from you</h2>
      </ContactTop>
      <ContactBottom className='bottom__contact'>
        <ContactForm />
        <SocialMedia />
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
  width: 550px;

  .sub1,
  .sub2 {
    font-family: var(--robo);
    font-weight: 400;
    color: var(--dark);
  }

  .sub1 {
    font-size: min(8vw + 0.8rem, 8vw);
  }

  .sub2 {
    font-size: calc(1.8vw + 0.3rem);
    line-height: none;
  }

  @media screen and (min-width: 1200px) {
    .moveLeft {
      position: absolute;
      left: -115px;
      bottom: 40%;
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
  grid-template-columns: 1.5fr 1fr;
  width: max(850px, 50%);
  gap: 2rem;
  position: relative;
  margin: 1rem auto;
  margin-top: 5rem;

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
