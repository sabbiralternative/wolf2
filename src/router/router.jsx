import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Group from "../pages/Group/Group";
import IFrame from "../pages/IFrame/IFrame";
import EventDetails from "../pages/EventDetails/EventDetails";
import Profile from "../pages/Profile/Profile";
import CasinoProviders from "../pages/CasinoProviders/CasinoProviders";
import Rules from "../pages/Rules/Rules";
import Tournament from "../pages/Tournament/Tournament";
import InstantGames from "../pages/InstantGames/InstantGames";
import Banking from "../pages/Banking/Banking";
import GameShows from "../pages/GameShows/GameShows";
import IndianCards from "../pages/IndianCards/IndianCards";
import LiveCasino from "../pages/LiveCasino/LiveCasino";
import Slots from "../pages/Slots/Slots";
import CrashGames from "../pages/CrashGames/CarshGames";

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
        {
          path: "/instant-games",
          element: <InstantGames />,
        },
        {
          path: "/game-shows",
          element: <GameShows />,
        },
        {
          path: "/indian-cards",
          element: <IndianCards />,
        },
        {
          path: "/live-casino",
          element: <LiveCasino />,
        },
        {
          path: "/crash-games",
          element: <CrashGames />,
        },
        {
          path: "/slots",
          element: <Slots />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/casino-providers",
          element: <CasinoProviders />,
        },
        {
          path: "/rules",
          element: <Rules />,
        },
        {
          path: "/tournament",
          element: <Tournament />,
        },
        {
          path: "/banking",
          element: <Banking />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  },
);
