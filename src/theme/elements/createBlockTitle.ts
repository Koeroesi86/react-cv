import { IconAlias, RevivableComponent } from "@app-types";
import { Colours } from "../types";
import createSpacer from "./createSpacer";

const iconSize = 12;
const titleSize = 14;
const titleOptical = 0.11;

const createBlockTitle = (
  title: string,
  colors: Colours,
  icon: IconAlias,
): RevivableComponent[] => [
  {
    type: "block",
    props: { flexDirection: "row", flexWrap: "nowrap", alignItems: "center" },
    children: [
      {
        type: "block",
        // the icons shift themselves down by a quarter of their height, undo it so they sit on the row centre
        props: { position: "relative", top: -iconSize / 4 },
        children: [
          { type: icon, props: { width: iconSize, height: iconSize, color: colors.highlight } },
        ]
      },
      { type: "block", props: { width: 6 } },
      {
        type: "block",
        // the cap-height centre of the text sits below the centre of its line box, lift it to meet the icon and rule
        props: { position: "relative", top: -titleSize * titleOptical },
        children: [
          { type: "text", props: { text: title, color: colors.text, size: titleSize, weight: 600, lineHeight: 1.2 } },
        ],
      },
      { type: "block", props: { width: 8 } },
      { type: "block", props: { flexGrow: 1, flexBasis: 0, height: 1, backgroundColor: colors.highlight } },
    ]
  },
  createSpacer(4),
];

export default createBlockTitle;
