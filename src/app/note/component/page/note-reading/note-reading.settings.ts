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
  {
    toggleSidenav, toggleDarkTheme
  }:
  {
    toggleSidenav: Function,
    toggleDarkTheme: Function
  }
) => {
  return ({
    leftSide: [
      {
        id: 'collapse',
        type: 'icon-button',
        icon: 'chrome_reader_mode',
        func: toggleSidenav,
      },
      {
        id: 'toggle-dark-mode',
        type: 'icon-button',
        icon: 'color_lens',
        func: toggleDarkTheme,
      },
    ]
  });
}
