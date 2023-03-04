import { IconAlias, RevivableComponent } from "@app-types";
import { Colours } from "../types";

const createBlockTitle = (
  title: string,
  colors: Colours,
  icon: IconAlias,
): RevivableComponent[] => [
  {
    type: "block",
    props: { flexDirection: "row" },
    children: [
      { type: "block", props: { width: 6 } },
      {
        type: "block",
        props: { position: "relative", top: -3 },
        children: [
          { type: icon, props: { width: 16, height: 16, color: colors.text } },
        ]
      },
      { type: "block", props: { width: 6 } },
      { type: "text", props: { text: title, color: colors.text, size: 18, weight: 600, lineHeight: 1.6 } }
    ]
  },
  { type: "block", props: { width: 160, height: 3, backgroundColor: colors.highlight } }
];

export default createBlockTitle;
