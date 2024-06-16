import InfiniteSlide from "../../components/base/InfiniteSlide";
import { HomeGeneratedProps } from "./Home.props";
import {
  Container,
  Caption,
  Top,
  Bottom,
  Name,
  Wrapper,
  Resume,
  Sidebar,
} from "./Home.style";
import Marquee from "react-fast-marquee";
import photo from "../../assets/don.jpg";
import { useState } from "react";
import resumeImg from "../../assets/cv_screenshot.png";
import cv from "../../assets/don_apollo_cosio_cv.pdf";
const HomeView = (props: HomeGeneratedProps) => {
  const [openSide, setOpenSide] = useState(false);

  return (
    <Wrapper>
      <Resume onClick={() => setOpenSide(!openSide)} openSide={openSide}>
        View Résumé
      </Resume>
      <Sidebar openSide={openSide}>
        <img src={resumeImg} alt="resume" />
        <div onClick={() => setOpenSide(false)}>close</div>
        <a href={cv} download="don_apollo_cosio_cv.pdf">
          Download
        </a>
      </Sidebar>
      <Container>
        <Top>
          <Name>Don Apollo Cosio.</Name>
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
