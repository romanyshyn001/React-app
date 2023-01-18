import React, { useEffect, useState } from "react";

type ChatMessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

const ChatPage = () => {
  return (
    <div>
      <Chat />
    </div>
  );
};
const Chat = () => {
  const [wsChannel, setWsChannel] = useState<WebSocket | null>(null);

  useEffect(() => {
    let ws: WebSocket;

    const closeHandler = () => {
      console.log("CLOSE");
      setTimeout(createChannel, 3000);
    };

    function createChannel() {
      //
      if (ws) {
        ws.removeEventListener("close", closeHandler);
        ws.close();
      }
      //
      ws = new WebSocket(
        "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
      );
      ws.addEventListener("close", closeHandler);
      setWsChannel(ws);
    }
    createChannel();

    return () => {
      ws.removeEventListener("close", closeHandler);
      ws.close();
    };
  }, []);

  return (
    <>
      <Messages wsChannel={wsChannel} />
      <AddMessageChat wsChannel={wsChannel} />
    </>
  );
};
const Messages: React.FC<{ wsChannel: WebSocket | null }> = ({ wsChannel }) => {
  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    let messageHandler = (e: MessageEvent) => {
      let newMessages = JSON.parse(e.data);
      setMessages((prevMessages: any) => [...prevMessages, ...newMessages]);
    };
    //
    if (wsChannel) {
      wsChannel.addEventListener("message", messageHandler);
    }
    //
    return () => {
      //
      if (wsChannel) {
        wsChannel.removeEventListener("message", messageHandler);
      }
      //
    };
  }, [wsChannel]);
  return (
    <div style={{ height: "400px", overflow: "auto" }}>
      {messages.map((m: ChatMessageType, index: number) => (
        <Message key={index} message={m} />
      ))}
    </div>
  );
};

const Message: React.FC<{ message: ChatMessageType }> = ({ message }) => {
  return (
    <div>
      <img src={message.photo} alt="avatar" />
      <b>{message.userName}</b>
      <br />
      {message.message}
    </div>
  );
};

const AddMessageChat: React.FC<{ wsChannel: WebSocket | null }> = ({
  wsChannel,
}) => {
  const [message, setMessages] = useState("");
  const [isReady, setReadyStatus] = useState<"pending" | "ready">("pending");

  useEffect(() => {
    let openHandler = () => {
      setReadyStatus("ready");
    };
    //
    if (wsChannel) {
      wsChannel.addEventListener("open", openHandler);
    }
    //
    return () => {
      //
      if (wsChannel) {
        wsChannel.removeEventListener("open", openHandler);
      }
      //
    };
  }, [wsChannel]);

  const sendMessage = () => {
    if (!message) {
      return;
    }
    if (wsChannel !== null) {
      wsChannel.send(message);
      setMessages("");
    }
  };
  return (
    <>
      <div>
        <textarea
          onChange={(e) => setMessages(e.currentTarget.value)}
          value={message}
        ></textarea>
      </div>
      <div>
        <button
          disabled={wsChannel === null || isReady !== "ready"}
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </>
  );
};
export default ChatPage;
