import React from "react";
import styled from "styled-components";

const BubbleLeft = ({ classname, children }) => {
  // console.log(`${classname === "middle" ? 4 : 20}%`);

  return (
    //classname passed from contactInfo ...top, middle, bottom for speech bubble
    <div className={classname}>
      <Bubble position={classname}>
        <svg
          className='svgBubble'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          viewBox='0 0 132 136'>
          <path
            className='bubblePath'
            d='M66.1 1.5C30.4 1.5 1.5 22.9 1.5 46c0 18.1 17.9 33.5 42.8 39.3 1.5 14.8-1.3 39-8.5 48.1 10.8-12.5 22.4-33.6 26.6-45.7 1.2 0 2.5.1 3.7.1 35.7 0 64.6-18.7 64.6-41.8S101.8 1.5 66.1 1.5zM35.8 133.4c-.3.4-.7.8-1 1.1.4-.3.7-.7 1-1.1z'
          />
        </svg>
        <div className='content'>{children}</div>
      </Bubble>
    </div>
  );
};

const Bubble = styled.div`
  position: relative;

  //class names related to bubble SVG given because
  //interfere side effects with svg code in social icons
  .svgBubble {
    width: 100%;
    height: 16rem;
  }

  .bubblePath {
    fill: white;
    stroke: #000;
    stroke-width: 2;
    stroke-linejoin: bevel;
    vector-effect: non-scaling-stroke;
  }

  .content {
    position: absolute;
    top: ${(props) => (props.position === "middle" ? 4 : 20)}%;
    left: 8%;
    width: 200px;
    line-height: 1.2;
    text-align: ${(props) => props.position === "middle" && "center"};
  }

  .content * {
    font-family: var(--neu);
    font-size: 1.8rem;
    line-height: 1.2;
  }

  //css for Contct Media links
  .socialLink {
    margin-top: -0.5rem;
    margin-left: 1rem;
  }
`;

export default BubbleLeft;
