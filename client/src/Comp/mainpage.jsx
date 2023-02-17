import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { userID, roomNumbers } from "./store/global State";

function MainPage() {
  const [userId, setUserId] = useAtom(userID);
  const [roomNumber, setRoomNumber] = useAtom(roomNumbers);
  const handlerOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h3> join A chat</h3>
      <form onSubmit={handlerOnSubmit}>
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
      </form>
    </div>
  );
}

export default MainPage;
