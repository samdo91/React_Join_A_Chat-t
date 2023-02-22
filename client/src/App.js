import "./App.css";
import { Router, RouterProvider } from "react-router-dom";
import { router } from "./Comp/store/router/router";
import { useAtom } from "jotai";
import { themes } from "./Comp/store/global State/index";
import styled from "@emotion/styled";

function App() {
  const [theme, setTheme] = useAtom(themes);
  return (
    <Body theme={theme}>
      <RouterProvider router={router} />
    </Body>
  );
}
const Body = styled.div`
  background-color: ${(props) =>
    props.theme === "light" ? "#8cabd9" : "#0a244d"};
  margin: 0;
  height: 100%;
  overflow: hidden;
  text-align: center;
`;

export default App;
