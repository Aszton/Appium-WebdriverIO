import Action from "../../helpers/functions";
import { value } from "../../helpers/input";
import { selectors } from "../../helpers/selectors";
import noteObjects from "../../helpers/pageObjects";

describe("Color note test", () => {
  it("Add a note and delete it", async () => {
    noteObjects.skipTutorial();
    await Action.click(selectors.addNoteText);
    await Action.click(selectors.textOption);
    await Action.isDisplayed(selectors.textEditing);
    await Action.type(selectors.noteHeading, value.tv);
    await Action.type(selectors.noteBody, value.serials);
    await driver.back();
    await driver.back();
    await Action.isDisplayed(selectors.buttonEdit);
    await driver.back();
    await Action.click(selectors.firstNote);
    await Action.click(selectors.iconMore);
    await Action.click(selectors.iconDelete);
    await driver.acceptAlert();
    await Action.click(selectors.iconNavigation);
    await Action.click(selectors.buttonTrash);
    await Action.checkText(selectors.firstNote, value.tv);
  });
});
