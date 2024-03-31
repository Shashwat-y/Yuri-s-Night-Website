// SponsorsCollaborators.styles.js
import styled, { keyframes, css } from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;
  margin: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Text = styled.div`
  font-size: 35px;
  font-weight: 900;
  margin-bottom: 10px;
  color: white;
`;

export const Note = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 40px;
  color: #ffffffb7;
`;

export const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 150%;
  animation: ${scrollX} 30s linear infinite;
`;

export const MarqueeGroup = styled.div`
  ${common}
`;

export const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

export const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(100rem, 1rem + 600vmin, 300rem);
  padding: calc(clamp(40rem, 1rem + 110vmin, 300rem) / 10);
`;

export const Image = styled.img`
  object-fit: contain;
  width: 400%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
