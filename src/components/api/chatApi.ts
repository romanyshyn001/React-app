let subscribers = [] as subscriberType[];
let ws: WebSocket;

const messageHandler = (e: MessageEvent) => {
  let newMessages = JSON.parse(e.data);
  subscribers.forEach((s) => s(newMessages));
};
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
}
export const chatApi = {
  subscribe(callback: subscriberType) {
    subscribers.push(callback);
    return () => {
    subscribers = subscribers.filter(s => s !== callback);
    };
  },
  unsubscribe(callback: subscriberType){
    subscribers = subscribers.filter(s => s !== callback);

  }
};
type ChatMessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

type subscriberType = (messages: ChatMessageType[]) => void;
