import { Dispatch } from "redux";
import { chatApi, StatusType } from "../../components/api/chatApi";
import { BaseThunkType, InferActionType } from "../redux-store";
import { uid } from 'uid';

type ChatMessageAPIType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};
type ChatMessageType = ChatMessageAPIType & {id:string}

export type initialStateType = typeof initialState;

let initialState = {
  messages: [] as ChatMessageType[],
  status: "pending" as StatusType,
};

export const actions = {
  messagesReceived: (messages: ChatMessageAPIType[]) =>
    ({
      type: "SN/chat/MESSAGES_RECEIVED",
      payload: { messages },
    } as const),
  statusChanged: (status: StatusType) =>
    ({
      type: "SN/chat/STATUS_CHANGED",
      payload: { status },
    } as const),
};

const chatReducer = (
  state = initialState,
  action: ActionType
): initialStateType => {
  switch (action.type) {
    case "SN/chat/MESSAGES_RECEIVED":
      return {
        ...state,
        messages: [...state.messages, ...action.payload.messages.map(m => ({...m, id: uid()}))].filter(
          (m, index, array) => index >= array.length - 100
        ),
      };
    case "SN/chat/STATUS_CHANGED":
      return {
        ...state,
        status: action.payload.status,
      };
    default:
      return state;
  }
};

let _newMessageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null;

const newMessageHandler = (dispatch: Dispatch) => {
  if (_newMessageHandler === null) {
    _newMessageHandler = (messages) => {
      dispatch(actions.messagesReceived(messages));
    };
  }
  return _newMessageHandler;
};
//comment
let _statusChangedHandler: ((status: StatusType) => void) | null = null;

const statusChangedHandlerCreator = (dispatch: Dispatch) => {
  if (_statusChangedHandler === null) {
    _statusChangedHandler = (status) => {
      dispatch(actions.statusChanged(status));
    };
  }
  return _statusChangedHandler;
};
//
export const startMessagesListening = (): ThunkType => async (dispatch) => {
  chatApi.start();
  chatApi.subscribeOnNewMessages(
    "message-received",
    newMessageHandler(dispatch)
  );
  chatApi.subscribeOnNewMessages(
    "status-changed",
    statusChangedHandlerCreator(dispatch)
  );
};
export const stopMessagesListening = (): ThunkType => async (dispatch) => {
  chatApi.unsubscribeOnNewMessages(
    "message-received",
    newMessageHandler(dispatch)
  );
  chatApi.unsubscribeOnNewMessages(
    "status-changed",
    statusChangedHandlerCreator(dispatch)
  );
  chatApi.stop();
};
export const sendMessageThunk = (message: string): ThunkType => async (
  dispatch
) => {
  chatApi.sendMessageSocket(message);
};
export default chatReducer;
type ActionType = InferActionType<typeof actions>;
type ThunkType = BaseThunkType<ActionType>;
