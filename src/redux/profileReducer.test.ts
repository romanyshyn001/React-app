import profileReducer, { actions } from "./profileReducer";

let state = {
  posts: [
    { id: 1, message: "Hi", likesCount: 12 },
    { id: 2, message: "How is going?", likesCount: 12 },
    { id: 3, message: "What the plan", likesCount: 15 },
    { id: 4, message: "Bingo", likesCount: 16 },
    { id: 5, message: "Great Job!", likesCount: 2 },
  ],
  profile: null,
  status: "",
  newPostText: "",
};

it("length of posts should be incremented", () => {
  let action = actions.updateNewPostTextCreator("it-kamasutra.com");

  let newState = profileReducer(state, action);
  // expect(newState.posts.length).toBe(5)
});

it("after deleting lenght of msg should be decrement", () => {
  let action = actions.deletePost(1);

  let newState = profileReducer(state, action);
  // expect(newState.posts.length).toBe(4);
});
