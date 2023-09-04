import Action from "../../helpers/functions";
import { value } from "../../helpers/input";
import { selectorsForApiDemos } from "../../helpers/selectors";

describe("API Demos test", () => {
  it("API Demos ", async () => {
    await Action.click(selectorsForApiDemos.animation);
    await Action.click(selectorsForApiDemos.defaultLayoutAnimations);
    await Action.click(selectorsForApiDemos.addButton);
    await Action.click(selectorsForApiDemos.addButton);
    await Action.click(selectorsForApiDemos.addButton);
  });
  afterEach(async () => {
    await driver.closeApp();
  });
});
