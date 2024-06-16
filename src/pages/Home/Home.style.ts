import styled from "@emotion/styled";
import { css } from "@emotion/react";
import theme from "../../utils/Theme";

export const Wrapper = styled.div`
  position: relative;
`;

export const Container = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

export const Top = styled.div``;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0.8rem;
  }
`;

export const Name = styled.p`
  font-size: clamp(5rem, 10vw, 8rem);
  font-weight: 200;
`;

export const Caption = styled.p`
  font-family: "Courier New", monserat;
  font-size: clamp(1rem, 2vw, 1.25rem);

  @media screen and (min-width: 768px) {
    padding-top: 1rem;
  }
`;

export const Resume = styled.div<{ openSide: boolean }>`
  font-family: "Courier New";

  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  border-radius: 0px 12px 12px 0px;
  background-color: black;
  color: white;

  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0%, -50%) rotate(180deg);

  transform: ${({ openSide }) =>
    openSide
      ? "translate(100%, -50%) rotate(180deg);"
      : "translate(0%, -50%) rotate(180deg);"}
  transition: transform 0.6s ease-in-out;

  cursor: pointer;
  writing-mode: vertical-lr;
`;

export const Sidebar = styled.div<{ openSide?: boolean }>`
  position: absolute;
  right: 0;
  transform: ${({ openSide }) =>
    openSide ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 2rem;

  img {
    width: 100%;
    max-height: 50%;
  }

  background-color: #eae3db;
  background-color: #eaeaea;
`;
