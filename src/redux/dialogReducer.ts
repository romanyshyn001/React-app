import { InferActionType } from "./redux-store";

let initialState = {
  dialogsData: [
    { id: 1, name: "Roman" },
    { id: 2, name: "Victor" },
    { id: 3, name: "Vasya" },
    { id: 4, name: "Ivan" },
    { id: 5, name: "Sergiy" },
  ] as Array<DialogType>,
  messageData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is going?" },
    { id: 3, message: "What the plan" },
    { id: 4, message: "Bingo" },
    { id: 5, message: "Great Job!" },
  ] as Array<MessageType>,
  // newDialogPost: ''
};

export const actions = {
  updateDialogTextCreator: (newDialogPost: string) => ({
    type: "SN/SEND-NEW-DIALOG-TEXT",
    newDialogPost,
  }),
};

const dialogReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case "SN/SEND-NEW-DIALOG-TEXT":
      return {
        ...state,
        messageData: [
          ...state.messageData,
          { id: 9, message: action.newDialogPost },
        ],
      };
    default:
      return state;
  }
};

type DialogType = {
  id: number;
  name: string;
};
type MessageType = {
  id: number;
  message: string;
};
export type InitialStateType = typeof initialState;
type ActionsType = InferActionType<typeof actions>;
export default dialogReducer;
