import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Group from "../pages/Group/Group";
import IFrame from "../pages/IFrame/IFrame";
import EventDetails from "../pages/EventDetails/EventDetails";

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
        {
          path: "/event-details/:eventTypeId/:eventId",
          element: <EventDetails />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  }
);
