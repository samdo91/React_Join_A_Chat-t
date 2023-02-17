import React, { useState } from "react";
import { useAtom } from "jotai";
import { userID, roomNumbers, messageLists } from "../../store/global State";

function ChatFooter(props) {
  const { socket } = props;
  const [currentMessage, setCurrentMessage] = useState("");
  const [userId, setUserId] = useAtom(userID);
  const [roomNumber, setRoomNumber] = useAtom(roomNumbers);
  const [messageList, setMessageList] = useAtom(messageLists);
  const handlerOnSubmit = async (e) => {
    e.preventDefault();
    if (currentMessage !== "") {
      const massageData = {
        roomNumber: roomNumber,
        userId: userId,
        currentMessage: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      setMessageList((messageList) => [...messageList, massageData]);
      await socket.emit("send_message", massageData);
      setCurrentMessage("");
    }
  };

  return (
    <div>
      <form onSubmit={handlerOnSubmit}>
        <input
          type="text"
          placeholder=" 채팅 내용을입력해주세요"
          value={currentMessage}
          onChange={(e) => {
            setCurrentMessage(e.target.value);
          }}
        />
        <button>전송</button>
      </form>
    </div>
  );
}

export default ChatFooter;
