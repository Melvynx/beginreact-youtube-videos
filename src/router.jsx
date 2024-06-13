import { createBrowserRouter } from "react-router-dom";
import Index from "./routes";
import Components from "./routes/Components";
import NotFound from "./routes/NotFound";
import BeginReact from "./routes/BeginReact";

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
    path: "/beginreact",
    element: <BeginReact />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
