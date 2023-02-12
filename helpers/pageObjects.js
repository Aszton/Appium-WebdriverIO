import { selectors } from "./selectors";
import action from "./functions";

class noteObjects {
  async skipTutorial() {
    await action.click(selectors.buttonSkip);
    await action.isDisplayed(selectors.addNoteText);
  }
}
export default new noteObjects();
