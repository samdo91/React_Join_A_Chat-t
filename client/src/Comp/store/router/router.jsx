import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../mainpage";
import ChatPage from "../../chatPage/chatPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/:roomNumber",
    element: <ChatPage />,
  },
]);
