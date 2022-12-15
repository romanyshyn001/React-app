import { ResponceTypeApi, ResultCodesEnum } from "../components/api/api";
import { usersAPI } from "../components/api/usersApi";
import { actions, follow, unfollow } from "./usersReducers";

jest.mock("../components/api/usersApi");

const usersAPIMocks = usersAPI as jest.Mocked<typeof usersAPI>;

const result: ResponceTypeApi = {
  resultCode: ResultCodesEnum.Success,
  messages: ["ds"],
  data: {},
};

usersAPIMocks.follow.mockReturnValue(Promise.resolve(result));
usersAPIMocks.unfollow.mockReturnValue(Promise.resolve(result));

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(() => {
  dispatchMock.mockClear();
  getStateMock.mockClear();
  usersAPIMocks.follow.mockClear();
  usersAPIMocks.unfollow.mockClear();
});

test("success follow thunk", async () => {
  const thunk = follow(1);

  await thunk(dispatchMock, getStateMock, {});
  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(
    1,
    actions.toogleFollowingProgress(true, 1)
  );
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1));
  expect(dispatchMock).toHaveBeenNthCalledWith(
    3,
    actions.toogleFollowingProgress(false, 1)
  );
});

test("success unfollow thunk", async () => {
  const thunk = unfollow(1);

  await thunk(dispatchMock, getStateMock, {});
  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(
    1,
    actions.toogleFollowingProgress(true, 1)
  );
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowSuccess(1));
  expect(dispatchMock).toHaveBeenNthCalledWith(
    3,
    actions.toogleFollowingProgress(false, 1)
  );
});
