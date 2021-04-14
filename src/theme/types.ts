export interface Colours {
  highlight: string;
  text: string;
  secondaryDivider: string;
}

export enum SchemeNames {
  lightblue = "lightblue",
}

export interface Schemes {
  [SchemeNames.lightblue]: Colours;
}
