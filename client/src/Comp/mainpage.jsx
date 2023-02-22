import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { userID, roomNumbers, themes } from "./store/global State";
import DarkMode from "./darkMode/darkmode";
import styled from "@emotion/styled";

function MainPage() {
  const [userId, setUserId] = useAtom(userID);
  const [roomNumber, setRoomNumber] = useAtom(roomNumbers);
  const [theme, setTheme] = useAtom(themes);
  const handlerOnSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <MainPageContainal theme={theme}>
      <Tittle theme={theme}> join A chat</Tittle>
      <LoginBox theme={theme}>
        <Form onSubmit={handlerOnSubmit}>
          <input
            type="text"
            placeholder="아이디"
            onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="룸 넘버"
            onChange={(e) => {
              setRoomNumber(e.target.value);
            }}
          />
          <Link to={`/${roomNumber}`}>
            <button> Join A Room</button>
          </Link>
        </Form>
      </LoginBox>
      <DarkMode />
    </MainPageContainal>
  );
}

const MainPageContainal = styled.div`
  background-color: ${(props) =>
    props.theme === "light" ? "#8cabd9" : "#0a244d"};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Tittle = styled.h3`
  color: ${(props) => (props.theme === "light" ? "black" : "#c9c9c9")};
`;
const LoginBox = styled.div`
  align-items: center;
  display: flex;
  border: 1px solid gray;
  background-color: ${(props) =>
    props.theme === "light" ? "#efefef" : "#161f27"};
  justify-content: space-around;
  height: 300px;
  width: 300px;
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

export default MainPage;
