import React from "react";
import { NavigationProps } from "./Navigation.props";
import { Container } from "./Navigation.style";

const Navigation = (props: NavigationProps): JSX.Element => {
  return <Container>Navigation</Container>;
};

export default React.memo(Navigation);
