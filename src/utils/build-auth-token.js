import { UserManager } from "oidc-client";

export default () => {
  const securitySettings = {
    client_id: "myapp",
    redirect_uri: ``,
    response_type: "token",
    scope: "myapp",
    authority: ``,
    silent_redirect_uri: ``,
  };

  let manager = new UserManager(securitySettings);
  console.log("manager is", manager.getUser());
  return `UserInfo - ${manager.getUser().name}`;
};
