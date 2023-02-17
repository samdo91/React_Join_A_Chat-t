import React, { useEffect, useState } from "react";

function ChatBody(props) {
  const { socket } = props;
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    console.log();

    socket.on("receive_message", (data) => {
      console.log(data);
      setMessageList([...messageList, data]);
    });
  }, [socket]);

  return (
    <div>
      <div>
        <h4>body</h4>
        <div>
          {messageList.map((message) => {
            return message.userId, message.currentMessage, message.time;
          })}
        </div>
      </div>
    </div>
  );
}

export default ChatBody;
