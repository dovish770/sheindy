import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../components/layout/Layout";
import Earrings from "../pages/categories/earrings/Earrings";
import Bracelets from "../pages/categories/bracelets/Bracelets";
import Necklaces from "../pages/categories/necklaces/Necklaces";
import Rings from "../pages/categories/rings/Rings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories/earrings",
        element: <Earrings />,
      },
      {
        path: "/categories/bracelets",
        element: <Bracelets />,
      },
      {
        path: "/categories/necklaces",
        element: <Necklaces />,
      },
      {
        path: "/categories/rings",
        element: <Rings />,
      },
    ],
  },
]);

  export default router;
