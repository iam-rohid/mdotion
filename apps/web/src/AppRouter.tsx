import {
  Router as BrowserRouter,
  Route,
  DefaultGenerics,
  ReactLocation,
  Outlet,
} from "@tanstack/react-location";
import App from "./pages/app/App";
import Notebook from "./pages/notebook/Notebook";
import Note from "./pages/note/Note";
import { ReactLocationDevtools } from "@tanstack/react-location-devtools";

export const routes: Route<DefaultGenerics>[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: ":notebookId",
        element: <Notebook />,
        children: [
          {
            path: ":noteId",
            element: <Note />,
          },
        ],
      },
    ],
  },
];

export const location = new ReactLocation();

const AppRouter = () => {
  return (
    <>
      <BrowserRouter routes={routes} location={location}>
        <Outlet />
        <ReactLocationDevtools />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
