import "./App.css";
import MainPage from "./Comp/mainpage";
import { Router, RouterProvider } from "react-router-dom";
import { router } from "./Comp/store/router/router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
