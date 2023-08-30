import { selectors } from "./selectors";
import action from "./functions";

class noteObjects {
  skipTutorial() {
    if (action.isDisplayed(selectors.buttonSkip)) {
       action.click(selectors.buttonSkip);
       action.isDisplayed(selectors.addNoteText);
    }
  }
}
export default new noteObjects();
