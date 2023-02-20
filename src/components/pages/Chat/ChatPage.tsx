import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sendMessageThunk,
  startMessagesListening,
  stopMessagesListening,
} from "../../../redux/Chat/chatReducer";
import { AppStateType } from "../../../redux/redux-store";

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
  const dispatch = useDispatch();
  const status = useSelector((state: AppStateType) => state.chat.status);

  useEffect(() => {
    dispatch(startMessagesListening());
    return () => {
      dispatch(stopMessagesListening());
    };
  }, [dispatch]);

  return (
    <>
      {status === "error" && <div>Some error occured. Please refresh page</div>}
      <>
        <Messages />
        <AddMessageChat />
      </>
    </>
  );
};
const Messages: React.FC<{}> = React.memo(() => {
  const messages = useSelector((state: AppStateType) => state.chat.messages);
  const messagesAnchorRed = useRef<HTMLDivElement>(null);
  const [isAutoScroll, setIsAutoScroll] = useState(false);

  useEffect(() => {
    if (messagesAnchorRed.current) {
      messagesAnchorRed.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  //Функція яка перевіряє scroll.
  const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const isViewed = e.currentTarget;
    if (
      Math.abs(
        isViewed.scrollHeight - isViewed.scrollTop - isViewed.clientHeight
      ) < 300
    ) {
      !isAutoScroll && setIsAutoScroll(true);
    } else {
      isAutoScroll && setIsAutoScroll(false);
    }
  };

  return (
    <div style={{ height: "400px", overflow: "auto" }} onScroll={scrollHandler}>
      {messages.map((m: ChatMessageType, index: number) => (
        <Message key={index} message={m} />
      ))}
      <div ref={messagesAnchorRed}></div>
    </div>
  );
});

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

const AddMessageChat: React.FC<{}> = () => {
  const [message, setMessages] = useState("");

  const status = useSelector((state: AppStateType) => state.chat.status);
  const dispatch = useDispatch();
  const sendMessageHandler = () => {
    dispatch(sendMessageThunk(message));
    setMessages("");
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
        <button disabled={status !== "ready"} onClick={sendMessageHandler}>
          Send
        </button>
      </div>
    </>
  );
};
export default ChatPage;
