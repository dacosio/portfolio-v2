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

const HomeView = (props: HomeGeneratedProps) => {
  return (
    <Wrapper>
      <Container>
        <Top>
          <Name>Don Apollo Cosio.</Name>
          <Image src={photo} alt="don photo" />
          <SecondImage src={photo} alt="don photo" />
          <ThirdImage src={photo} alt="don photo" />
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
