import Action from "../../helpers/functions";
import { sauceLabsSelectors } from "../../helpers/selectors";
import { login } from "../../helpers/input";

describe("Swag Labs tests", () => {
  it("Login", async () => {
    await Action.type(sauceLabsSelectors.inputUserName, login.userName);
    await Action.type(sauceLabsSelectors.inputPassword, login.password);
    await Action.click(sauceLabsSelectors.buttonLogin);
    await driver.pause(1000);
  });
});
