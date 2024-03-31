// SponsorsCollaborators.js
import React from "react";
import styled from "styled-components";
import row1 from "./row1Data";
import row2 from "./row2Data";
// Styled components
import {
  AppContainer,
  Wrapper,
  Text,
  Note,
  Marquee,
  MarqueeGroup,
  MarqueeGroup2,
  ImageGroup,
  Image,
} from "./SponsorsCollaborators.style";

function SponsorsCollaborators() {

  return (
    <AppContainer>
      <Wrapper>
        <Text>With Great Outcomes.</Text>
        <Note>Our Collaborators and Sponsors across India.</Note>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default SponsorsCollaborators;