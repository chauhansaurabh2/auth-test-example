import * as oidc from "oidc-client";
import buildAuthToken from "utils/build-auth-token";

jest.mock("oidc-client");

const mockUser = {
  name: "jimmy",
  id: "1234asdfasdf",
};
test("test", () => {
  oidc.UserManager.mockImplementation(() => {
    return {
      getUser: () => mockUser,
    };
  });

  let result = buildAuthToken();

  expect(result).toBe("UserInfo - jimmy");
});
