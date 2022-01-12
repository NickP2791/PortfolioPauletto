import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import styled from "styled-components";
import { HiClipboardCopy } from "react-icons/hi";

const CopyEmailButton = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const initialRender = useRef(true);
  const copiedRef = useRef(null);

  const handleClick = () => {
    navigator.clipboard.writeText("Nicolas is the great");
    setEmailCopied(true);
  };

  useEffect(() => {
    // only do this if emailcopy is true (first time around only)
    if (emailCopied) {
      gsap.from(copiedRef.current, {
        duration: 2,
        opacity: 1,
        scale: 0.8,
        top: 0,
        ease: "none",
      });
    }
  }, [copiedRef, emailCopied]);

  useEffect(() => {
    // prevent on first render
    if (initialRender.current) {
      initialRender.current = false;
      // only do this if emailcopy is true (first time around only)
    } else if (emailCopied) {
      gsap.to(copiedRef.current, {
        duration: 1.5,
        autoAlpha: 0,
        scale: 1,
        top: "-91px",
        ease: "ease-out",
      });
      setEmailCopied(false);
    }
  }, [emailCopied]);

  return (
    <EmailButtonWrap onClick={handleClick}>
      <HiClipboardCopy style={{ fontSize: "1.2rem" }} />
      <p ref={copiedRef}>Copied</p>
    </EmailButtonWrap>
  );
};

const EmailButtonWrap = styled.button`
  border: none;
  background: transparent;
  position: relative;

  p {
    position: absolute;
    color: red;
    left: -174px;
    opacity: 0;
  }
`;

export default CopyEmailButton;
