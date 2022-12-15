import usersReducers, { actions, InitialStateType } from "./usersReducers";

let state: InitialStateType;

beforeEach(() => {
  state = {
    users: [
      {
        id: 0,
        name: "Roman",
        followed: false,
        photos: { small: null, large: null },
        status: "status 0 ",
      },
      {
        id: 1,
        name: "Vira",
        followed: false,
        photos: { small: null, large: null },
        status: "status 1 ",
      },
      {
        id: 2,
        name: "Nadia",
        followed: true,
        photos: { small: null, large: null },
        status: "status 2 ",
      },
      {
        id: 3,
        name: "Kolya",
        followed: true,
        photos: { small: null, large: null },
        status: "status 3 ",
      },
    ],
    pageSize: 15,
    totalUsersCount: 250,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [], // array of user id's
    pageTitle: "SAMURAI",
  };
});

test("Follow success", () => {
  const newState = usersReducers(state, actions.followSuccess(1));
  expect(newState.users[0].followed).toBeFalsy();
  expect(newState.users[1].followed).toBeTruthy();
});
test("UnFollow success", () => {
  const newState = usersReducers(state, actions.unfollowSuccess(3));
  expect(newState.users[2].followed).toBeTruthy();
  expect(newState.users[3].followed).toBeFalsy();
});
