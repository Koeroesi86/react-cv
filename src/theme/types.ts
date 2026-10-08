export interface Colours {
  /** Light accent: rules, rail and icons only (too low contrast for text). */
  highlight: string;
  /** Darker accent with enough contrast for link text and small labels. */
  link: string;
  text: string;
  /** Dates and meta information. */
  muted: string;
  secondaryDivider: string;
}

export enum SchemeNames {
  lightblue = "lightblue",
}

export interface Schemes {
  [SchemeNames.lightblue]: Colours;
}
