import { createBrowserRouter } from "react-router-dom";
import Tasks from "../pages/Tasks";

export const paths = {
  HOME: "/",
};

const router = createBrowserRouter([
  {
    path: paths.HOME,
    element: <Tasks />,
  },
]);

export default router;
