import { RevivableComponent } from "@app-types";
import createSpacer from "./createSpacer";

const createRailBlock = (railColor: string, children?: RevivableComponent[], isEnd?: boolean, height?: number): RevivableComponent => ({
  type: "block",
  props: {
    flexDirection: "row",
    flexWrap: "nowrap",
    paddingLeft: 10,
    paddingRight: 10,
    height,
    flexGrow: isEnd ? 0 : 1,
  },
  children: [
    {
      type: "rail",
      props: {
        size: 20,
        color: railColor,
        orientation: "column",
        startSize: 15,
        iconSize: 10,
        endSize: isEnd ? 0 : "grow"
      },
    },
    { type: "block", props: { flexGrow: 0, width: 10 } },
    {
      type: "block",
      props: { flexGrow: 1, flexBasis: 0, flexWrap: "nowrap" },
      children: [
        createSpacer(10),
        ...(children || []),
        createSpacer(10),
      ]
    },
  ],
});

export default createRailBlock;
