import React, { useEffect } from "react";
import io from "socket.io-client";
import { useAtom } from "jotai";
import { userID, roomNumbers } from "../store/global State";
import ChatHeader from "./header/chatHeader";
import ChatBody from "./body/chatBody";
import ChatFooter from "./footer/chatFooter";

const socket = io.connect("http://localhost:3001");

function ChatPage() {
  const [userId, setUserId] = useAtom(userID);
  const [roomNumber, setRoomNumber] = useAtom(roomNumbers);

  useEffect(() => {
    if (userId !== "" && roomNumber !== "") {
      socket.emit("join_room", roomNumber);
    }
  }, []);

  return (
    <div>
      <h3>채팅페이지</h3>
      <ChatHeader />
      <ChatBody socket={socket} />
      <ChatFooter socket={socket} />
    </div>
  );
}

export default ChatPage;
