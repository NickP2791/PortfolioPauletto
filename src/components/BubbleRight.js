import React from "react";
import styled from "styled-components";

const BubbleRight = ({ classname, children }) => {
  // console.log(classname);

  return (
    //classname passed from contactInfo ...top, middle, bottom for speech bubble
    //in this case, only top is ever sent over
    <div className={classname}>
      <Bubble>
        <svg viewBox='0 0 120 130'>
          <path
            transform='scale(1.7,1) scale(-1,1) translate(-77, -7)'
            d='M20.361,65.078l1.148,0.581c5.397,2.729,11.561,4.173,17.824,4.173c19.483,0,35.334-13.682,35.334-30.498
		c0-16.818-15.851-30.5-35.334-30.5S4,22.516,4,39.334c0,6.99,2.814,13.823,7.925,19.238l0.52,0.552l0.024,0.757
		c0.087,2.72-0.401,6.407-2.818,9.951c4.63-0.074,8.89-3.298,9.705-3.95L20.361,65.078z'
            // d='M66.1 1.5C30.4 1.5 1.5 22.9 1.5 46c0 18.1 17.9 33.5 42.8 39.3 1.5 14.8-1.3 39-8.5 48.1 10.8-12.5 22.4-33.6 26.6-45.7 1.2 0 2.5.1 3.7.1 35.7 0 64.6-18.7 64.6-41.8S101.8 1.5 66.1 1.5zM35.8 133.4c-.3.4-.7.8-1 1.1.4-.3.7-.7 1-1.1z'
          />
        </svg>

        <div className='content'>{children}</div>
      </Bubble>
    </div>
  );
};

const Bubble = styled.div`
  position: relative;

  svg {
    width: 100%;
    height: 16rem;
  }

  path {
    fill: white;
    stroke: #000;
    stroke-width: 2;
    stroke-linejoin: bevel;
    vector-effect: non-scaling-stroke;
  }

  .content {
    position: absolute;
    top: 14%;
    left: 25%;
  }

  .content * {
    font-family: var(--neu);
    font-size: 1.7rem;
    letter-spacing: 0.1em;
  }
`;

export default BubbleRight;
