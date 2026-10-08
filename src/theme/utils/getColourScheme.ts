import { Colours, SchemeNames, Schemes } from "../types";

const schemes: Schemes = {
  lightblue: {
    highlight: "#6ab9c8",
    link: "#1f7a8c",
    text: "#333333",
    muted: "#666666",
    secondaryDivider: "#d3d3d3",
  },
};

export default (scheme: SchemeNames): Colours => {
  if (schemes[scheme]) return schemes[scheme];
  // eslint-disable-next-line no-console
  console.warn(`Color scheme ${scheme} is not registered. Please use one of ${Object.keys(schemes).join(', ')}`)
  return schemes[scheme] || schemes.lightblue;
};
