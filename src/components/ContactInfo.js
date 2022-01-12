import React from "react";
import styled from "styled-components";
import BubbleLeft from "./BubbleLeft";
import BubbleRight from "./BubbleRight";
import ContactMediaLinks from "./ContactMediaLinks";
import CopyEmailButton from "./CopyEmailButton";

const info = {
  phone: "204.298.2199",
  address: "Nicolas.Pauletto@ nicolaspauletto.com",
};
const ContactInfo = () => {
  return (
    <InfoSection>
      {/* ALL 3 speech bubbles pass props as children */}
      <BubbleRight classname='top'>
        <p>{info.phone}</p>
      </BubbleRight>

      <BubbleLeft classname='middle'>
        <CopyEmailButton />
        <p>{info.address}</p>
      </BubbleLeft>

      <BubbleLeft classname='bottom'>
        <ContactMediaLinks style={{ fontSize: ".6rem" }} />
      </BubbleLeft>
    </InfoSection>
  );
};

const InfoSection = styled.section`
  margin-top: -3rem;
  height: fit-content;
  display: grid;
  grid-template-columns: 1.1fr 0.8fr 0.6fr 1fr 0.4fr;
  grid-template-rows: 70px 120px auto;

  .top {
    grid-column: 2 / span 4;
  }

  .middle {
    grid-column: span 3;
  }

  .bottom {
    grid-column: 2 / span 3;
  }
`;

export default ContactInfo;
