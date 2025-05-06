import { createBrowserRouter } from "react-router-dom";
import Categories from "../pages/categories/Categories"; 
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/categories",
      element: <Categories/>,
    },
  ]);

  export default router;
