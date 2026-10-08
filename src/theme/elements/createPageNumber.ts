import { RevivableComponent } from "@app-types";
import { Colours } from "../types";
import { small } from "../typography";
import createSpacer from "./createSpacer";

const createPageNumber = (
  page: number,
  total: number,
  colors: Colours
): RevivableComponent[] => [
  createSpacer(6),
  {
    type: "block",
    props: { flexDirection: "row", justifyContent: "flex-end", flexWrap: "nowrap", paddingRight: 10 },
    children: [
      { type: "text", props: { text: `${page} / ${total} page`, color: colors.muted, ...small } },
    ]
  },
  createSpacer(8),
];

export default createPageNumber;
