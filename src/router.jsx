import { createBrowserRouter } from "react-router-dom";
import Index from "./routes";
import BeginReact from "./routes/BeginReact";
import Components from "./routes/Components";
import InputShuffle from "./routes/InputShuffle";
import KeyInputDemo from "./routes/KeyInputDemo";
import NotFound from "./routes/NotFound";
import UseState from "./routes/UseState";
import Videos from "./routes/Videos";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/components",

    element: <Components />,
  },
  {
    path: "/components/cards",
    element: <KeyInputDemo />,
  },
  {
    path: "/components/input",
    element: <InputShuffle />,
  },
  {
    path: "/beginreact",
    element: <BeginReact />,
  },
  {
    path: "/usestate",
    element: <UseState />,
  },
  {
    path: "/videos",
    element: <Videos />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
