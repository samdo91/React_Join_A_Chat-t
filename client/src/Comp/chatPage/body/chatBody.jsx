import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { messageLists } from "../../store/global State";

function ChatBody(props) {
  const { socket } = props;
  const [messageList, setMessageList] = useAtom(messageLists);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log("data", data);
      setMessageList((messageList) => [...messageList, data]);
    });
  }, [socket]);

  useEffect(() => {
    console.log(messageList);
  }, [messageList]);

  return (
    <div>
      <div>
        <h4>body</h4>
        <div>
          {messageList.map((message) => {
            return (
              <div>
                <div> {message.userId} </div>
                <div> {message.currentMessage} </div>
                <div> {message.time} </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ChatBody;
