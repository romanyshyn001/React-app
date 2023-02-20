const subscribers = {
  "message-received": [] as SubscriberType[],
  "status-changed": [] as StatusChangedSubscriberType[],
};
let ws: WebSocket | null = null;

type EventNamesType = "message-received" | "status-changed";

const messageHandler = (e: MessageEvent) => {
  let newMessages = JSON.parse(e.data);
  subscribers["message-received"].forEach((s) => s(newMessages));
};
const closeHandler = () => {
  notifySubscribersAboutStatus("pending");
  setTimeout(createChannel, 3000);
};

const cleanUp = () => {
  if (ws) {
    ws.removeEventListener("close", closeHandler);
    ws.removeEventListener("message", messageHandler);    
    ws.removeEventListener("open", openHandler);
    ws.removeEventListener("error", errorHandler);
  }
};
const notifySubscribersAboutStatus = (status: StatusType) => {
  subscribers["status-changed"].forEach((s) => s(status));
};

const openHandler = () => {
  notifySubscribersAboutStatus("ready")
}
const errorHandler = () => {
  notifySubscribersAboutStatus('error')
  console.error("refresh Page")
}
function createChannel() {
  if (ws) {
    cleanUp();
    ws.close();
  }

  ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx");
  notifySubscribersAboutStatus("pending");
  ws.addEventListener("close", closeHandler);
  ws.addEventListener("message", messageHandler);
  ws.addEventListener("open", openHandler);
  ws.addEventListener("error", errorHandler);
}
export const chatApi = {
  start() {
    createChannel();
  },
  stop() {
    subscribers["message-received"] = [];
    subscribers["status-changed"] = [];
    if (ws) {
      cleanUp();
      ws.close();
    }
  },
  subscribeOnNewMessages(
    eventName: EventNamesType,
    callback: SubscriberType | StatusChangedSubscriberType
  ) {
    //@ts-ignore
    subscribers[eventName].push(callback);
    return () => {
      //@ts-ignore
      subscribers[eventName] = subscribers[eventName].filter((s) => s !== callback
      );
    };
  },
  unsubscribeOnNewMessages(
    eventName: EventNamesType,
    callback: SubscriberType | StatusChangedSubscriberType
  ) {
    //@ts-ignore
    subscribers[eventName] = subscribers[eventName].filter((s) => s !== callback
    );
  },
  sendMessageSocket(message: string) {
    if (ws) ws.send(message);
  },
};
type ChatMessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

type SubscriberType = (messages: ChatMessageType[]) => void;
type StatusChangedSubscriberType = (status: StatusType) => void;

export type StatusType = "pending" | "ready" | 'error';
