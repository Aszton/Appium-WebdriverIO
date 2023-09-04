export const selectors = {
  buttonSkip:
    '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]',
  addNoteText: '//*[@text="Add note"]',
  textOption: '//*[@text="Text"]',
  textEditing: '//*[@text="Editing"]',
  firstNote:
    '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]',
  iconMore: "~More",
  iconDelete: '//*[@text="Delete"]',
  iconNavigation:
    '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]',
  buttonTrash: '//*[@text="Trash Can"]',
  noteHeading:
    '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]',
  noteBody:
    '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]',
  buttonEdit:
    '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]',
};

export const selectorsForApiDemos = {
  animation: "~Animation",
  defaultLayoutAnimations: "~Default Layout Animations",
  addButton: "~Add Button",
};

export const sauceLabsSelectors = {
  inputUserName: "~test-Username",
  inputPassword: "~test-Password",
  buttonLogin: "~test-LOGIN",
};
