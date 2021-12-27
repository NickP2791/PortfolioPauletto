import React, { useRef } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { RiMailSendLine } from "react-icons/ri";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9z319j8",
        "template_gr60p6k",
        form.current,
        "user_7VUJYGTLyGKGzuO2NE0Lq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Wrapper ref={form} onSubmit={sendEmail}>
      <input type='text' name='name' placeholder='Name' />
      <input type='email' name='reply_to' placeholder='Email address' />
      <input type='text' name='subject' placeholder='Subject' />
      <textarea name='message' rows='8' placeholder='Your message' />
      <button type='submit'>
        {/* <input  value='' /> */}{" "}
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
  height: 100%;
  gap: 0.5rem;

  input,
  textarea {
    line-height: 1.4rem;
    border: 1px solid var(--dark);
    font-size: calc(1vw + 0.5rem);
    padding: 0.3rem 0;
    padding-left: 0.3rem;
  }

  button {
    background-color: var(--orange);
    color: var(--dark);
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
    button {
      align-self: flex-start;
    }
  }
`;
