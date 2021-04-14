import { RevivableComponent } from "@app-types";
import { Colours } from "../types";

const createPageNumber = (
  page: number,
  colors: Colours
): RevivableComponent[] => [
  { type: "block", props: { height: 6 } },
  {
    type: "block",
    props: { flexDirection: "row", justifyContent: "flex-end" },
    children: [
      { type: "text", props: { text: `${page}`, color: colors.text, weight: 600 } },
      { type: "block", props: { width: 3 } },
      { type: "text", props: { text: "|", color: colors.text }, },
      { type: "block", props: { width: 3 } },
      { type: "text", props: { text: "Page", color: colors.text }, },
      { type: "block", props: { width: 20 } },
    ]
  },
  { type: "block", props: { height: 8 } },
];

export default createPageNumber;
