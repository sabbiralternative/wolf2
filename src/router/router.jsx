import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Group from "../pages/Group/Group";
import IFrame from "../pages/IFrame/IFrame";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,

      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/group/:name/:eventTypeId",
          element: <Group />,
        },
        {
          path: "casino/:name/:id",
          element: <IFrame />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  }
);
