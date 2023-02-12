import action from "../../helpers/functions";
import { value } from "../../helpers/input";
import { selectors } from "../../helpers/selectors";
import noteObjects from "../../helpers/pageObjects";

describe("My Tests", () => {
  it("My tests", async () => {
    await noteObjects.skipTutorial();
    await action.click(selectors.addNoteText);
    await action.click(selectors.textOption);
    await action.isDisplayed(selectors.textEditing);
    await action.type(selectors.noteHeading, value.tv);
    await action.type(selectors.noteBody, value.serials);
    await driver.back();
    await driver.back();
    await action.isDisplayed(selectors.buttonEdit);
    await driver.back();
    await action.click(selectors.firstNote);
    await action.click(selectors.iconMore);
    await action.click(selectors.iconDelete);
    await driver.acceptAlert();
    await action.click(selectors.iconNavigation);
    await action.click(selectors.buttonTrash);
    await action.checkText(selectors.firstNote, value.tv);
  });
});
