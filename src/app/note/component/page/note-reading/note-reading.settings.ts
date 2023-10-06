import { HeaderSideSettings, elementSettings } from "../../molecule/header/header.settings";

export const headerSidenavSettings = (
  { add }: { add: Function }
) => {
  return ({
    rightSide: [
      {
        id: 'new-note',
        type: 'dialog-button',
        icon: 'open_in_new',
        func: add,
      },
    ]
  });
}

export const headerContentSettings = (
  { toggleSidenav }: { toggleSidenav: Function }
) => {
  return ({
    leftSide: [
      {
        id: 'collapse',
        type: 'icon-button',
        icon: 'chrome_reader_mode',
        func: toggleSidenav,
      },
    ]
  });
}
