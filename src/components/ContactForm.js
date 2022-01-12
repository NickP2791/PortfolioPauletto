import React from "react";
import styled from "styled-components";
import { RiMailSendLine } from "react-icons/ri";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

export const ContactForm = () => {
  const breakpoints = useBreakpoint();
  const textAreaHeight = breakpoints.sm ? 4 : 8;
  return (
    <Wrapper
      name='portfolio-form'
      method='POST'
      netlify-honeypot='bot-field'
      data-netlify='true'>
      <input type='hidden' name='form-name' value='portfolio-form' />
      <p className='hidden'>
        <label>
          Don't fill this out if you're human: <input name='bot-field' />
        </label>
      </p>
      <input type='text' name='name' placeholder='Name' required />
      <input
        type='email'
        pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
        name='reply_to'
        placeholder='Email address'
        required
      />
      <input type='text' name='subject' placeholder='Subject' required />
      <textarea
        name='message'
        rows={textAreaHeight}
        placeholder='Your message'
        required
      />

      <button type='submit'>
        {" "}
        <pre>
          Send Message <RiMailSendLine style={{ fontSize: "1.5rem" }} />
        </pre>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  gap: 0.7rem;

  .hidden {
    visibility: hidden;
    position: absolute;
  }

  input,
  textarea {
    line-height: 1.4rem;
    border: 1px solid var(--dark);
    font-size: calc(1vw + 0.5rem);
    padding: 0.3rem 0;
    padding-left: 0.3rem;
    border-radius: 5px;

    //shadow
    -moz-box-shadow: 7px 6px 5px 2px var(--dark);
    -webkit-box-shadow: 7px 6px 5px 2px var(--dark);
    box-shadow: 7px 6px 5px 2px var(--dark);
  }

  input:focus,
  textarea:focus {
    background: lightyellow;
    border: 2px solid var(--dark);
  }

  button {
    background-color: var(--dark);
    color: var(--light);
    font-weight: bold;
    align-self: center;
    font-size: 1.3rem;
    padding: 0.2rem 0.4rem 0.5rem;
    border-radius: 8px;
    transition: var(--transition);
  }

  button:hover {
    transform: scale(1.1);
    transition: var(--transition);
  }

  @media screen and (max-width: 600px) {
    gap: 0.3rem;

    button {
      align-self: flex-start;
    }
  }
`;
