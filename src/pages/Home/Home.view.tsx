import InfiniteSlide from "../../components/base/InfiniteSlide";
import { HomeGeneratedProps } from "./Home.props";
import {
  Container,
  Caption,
  Top,
  Bottom,
  Name,
  Wrapper,
  Image,
  SecondImage,
  ThirdImage,
} from "./Home.style";
import Marquee from "react-fast-marquee";
import photo from "../../assets/don.jpg";
import { useState } from "react";

const HomeView = (props: HomeGeneratedProps) => {
  const blendModes: string[] = [
    "normal",
    "multiply",
    "luminosity",
    "color-burn",
    "multiply",
    "luminosity",
    "color-burn",
  ];

  const [blendModeIndex1, setBlendModeIndex1] = useState<number>(0); // Initial blend mode index for first image
  const [blendModeIndex2, setBlendModeIndex2] = useState<number>(1); // Initial blend mode index for second image
  const [blendModeIndex3, setBlendModeIndex3] = useState<number>(2); // Initial blend mode index for third image
  const [prevX, setPrevX] = useState<number>(0); // Previous mouse X position
  const [prevY, setPrevY] = useState<number>(0); // Previous mouse Y position
  const distanceThreshold: number = 300; // Adjust this value as needed

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    const mouseX: number = event.clientX;
    const mouseY: number = event.clientY;

    // Calculate distance traveled since last mouse move
    const distanceX: number = Math.abs(mouseX - prevX);
    const distanceY: number = Math.abs(mouseY - prevY);
    const distance: number = Math.sqrt(
      distanceX * distanceX + distanceY * distanceY
    );

    // Check if the distance traveled is greater than the threshold
    if (distance >= distanceThreshold) {
      // Update blend mode index for each image
      setBlendModeIndex1((prevIndex) => (prevIndex + 1) % blendModes.length);
      setBlendModeIndex2((prevIndex) => (prevIndex + 1) % blendModes.length);
      setBlendModeIndex3((prevIndex) => (prevIndex + 1) % blendModes.length);

      // Update previous mouse position
      setPrevX(mouseX);
      setPrevY(mouseY);
    }
  };

  return (
    <Wrapper>
      <Container onMouseMove={handleMouseMove}>
        <Top>
          <Name>Don Apollo Cosio.</Name>
          <Image
            src={photo}
            alt="don photo"
            style={{
              backgroundColor: "#48B1B0",
              mixBlendMode: blendModes[
                blendModeIndex1
              ] as React.CSSProperties["mixBlendMode"],
            }}
          />
          <SecondImage
            src={photo}
            alt="don photo"
            style={{
              backgroundColor: "pink",
              mixBlendMode: blendModes[
                blendModeIndex2
              ] as React.CSSProperties["mixBlendMode"],
            }}
          />
          <ThirdImage
            src={photo}
            alt="don photo"
            style={{
              backgroundColor: "#D99982",
              mixBlendMode: blendModes[
                blendModeIndex3
              ] as React.CSSProperties["mixBlendMode"],
            }}
          />
        </Top>
        <Bottom>
          <Caption>Front End,</Caption>
          <Caption>Back End,</Caption>
          <Caption>Mobile Developer</Caption>
        </Bottom>
      </Container>
    </Wrapper>
  );
};

export default HomeView;
