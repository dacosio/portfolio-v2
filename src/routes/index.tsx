import Layout from "../components/layout/Layout";
import { useRoutes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";

export default function Router() {
  let element = useRoutes([
    {
      element: <Layout />,
      children: [
        {
          element: <Home />,
          path: "/",
        },
        {
          element: <About />,
          path: "/about",
        },
      ],
    },
  ]);
  return element;
}
