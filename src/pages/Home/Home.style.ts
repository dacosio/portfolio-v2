import styled from "@emotion/styled";
import { css } from "@emotion/react";
import theme from "../../utils/Theme";

export const Wrapper = styled.div``;

export const Container = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

export const Top = styled.div`
  position: relative;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.8rem;
`;

export const Name = styled.p`
  font-size: clamp(2rem, 4vw + 1rem, 5rem);
  font-weight: 400;

  position: relative;
`;

export const Caption = styled.p`
  font-family: "Courier New", monserat;
  font-size: clamp(10px, 2vw, 1.25rem);
  padding-top: 1rem;
  position: relative; /* Required for absolute positioning */

  &:nth-child(1)::after {
    background-color: ${({ theme }) => theme.pink};
  }

  &:nth-child(2)::after {
    background-color: ${({ theme }) => theme.cream};
  }

  &:nth-child(3)::after {
    background-color: #f6b765;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 1px;
    height: 8px;
    width: 100%;
    z-index: -1;
  }
`;

export const Image = styled.img`
  position: absolute;
  bottom: -30%;
  left: -40%;
  z-index: -1;
  width: 100%;
  height: auto;
  max-width: 300px;
  // border: 1px solid gray;
  // padding: 1rem;
`;

export const SecondImage = styled.img`
  position: absolute;
  top: 0%;
  left: -50%;
  z-index: -1;
  width: 100%;
  height: auto;
  max-width: 150px;
  // border: 1px solid gray;
  // padding: 1rem;
`;

export const ThirdImage = styled.img`
  position: absolute;
  top: 150%;
  left: -30%;
  z-index: -3;
  width: 100%;
  height: auto;
  max-width: 250px;
  // border: 1px solid gray;
  // padding: 1rem;
`;

export const ThirdImageWrapper = styled.div``