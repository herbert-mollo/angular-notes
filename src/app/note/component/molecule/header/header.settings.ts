export interface elementSettings {
  id: string;
  type: string;
  icon: string;
  func: Function;
}

export interface HeaderSideSettings {
  rightSide?: elementSettings[];
  leftSide?: elementSettings[];
}
