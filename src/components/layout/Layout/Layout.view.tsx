import { Outlet } from "react-router-dom";
import { LayoutProps } from "./Layout.props";
import { Container, Main } from "./Layout.style";
import Navigation from "../Navigation";
import Footer from "../Footer";
import { useEffect, useState } from "react";

const Layout = (_props: LayoutProps): JSX.Element => {
  const [width, setWidth] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setWidth((prevWidth: number) =>
        Math.min(prevWidth + Math.random() * 10, 100)
      ); // Increase width randomly for simulation
    }, 100); // Change the interval as needed

    // Clear interval and hide progress bar when width reaches 100%
    if (width >= 100) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [width]);

  return (
    <Container>
      {width !== 100 && (
        <div
          style={{
            width: "100%",
            height: "4px",
            backgroundColor: "#f0f0f0",
            position: "relative",
          }}>
          <div
            style={{
              height: "100%",
              backgroundColor: "#2b2d42", // Change color as needed
              position: "absolute",
              top: 0,
              left: 0,
              width: `${width}%`,
              transition: "width 0.3s ease", // Add smooth transition effect
            }}></div>
        </div>
      )}
      {width !== 100 ? (
        // Render loading indicator while loading
        <div>Loading...</div>
      ) : (
        // Render main content once loading is complete
        <Main>
          <Outlet />
        </Main>
      )}
      {!isLoading && <Navigation />}{" "}
      {/* Render Navigation once loading is complete */}
      {!isLoading && <Footer />} {/* Render Footer once loading is complete */}
    </Container>
  );
};

export default Layout;
