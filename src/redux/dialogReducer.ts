const SEND_NEW_DIALOG_TEXT = "SEND-NEW-DIALOG-TEXT";

type DialogType = {
  id: number;
  name: string;
};
type MessageType = {
  id: number;
  message: string;
};
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
export type InitialStateType = typeof initialState;

const dialogReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEND_NEW_DIALOG_TEXT:
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

type sendMessageCreatorActionType = {
  type: typeof SEND_NEW_DIALOG_TEXT;
  newDialogPost: string;
};
export const updateDialogTextCreator = (
  newDialogPost: string
): sendMessageCreatorActionType => ({
  type: SEND_NEW_DIALOG_TEXT,
  newDialogPost,
});

export default dialogReducer;
