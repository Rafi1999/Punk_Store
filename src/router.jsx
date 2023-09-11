import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import ErrorPage from "./Components/ErrorPage";
import Home from "./Components/Home";
import Item from "./Components/item";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path : '/',
          element : <Item></Item>
        }
      ]
    },
  ]);

export default router;