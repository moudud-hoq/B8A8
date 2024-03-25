import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
      },
      {
        path: "/donation",
        element: <h1>Donation</h1>,
      },
      {
        path: "/contact",
        element: <h1>Contact Us</h1>,
      },
    ],
  },
]);

export default router;
