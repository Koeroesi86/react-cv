import { RevivableComponent } from "@app-types";

const createRailBlock = (railColor: string, children?: RevivableComponent[], isEnd?: boolean, height?: number): RevivableComponent => ({
  type: "block",
  props: {
    flexDirection: "row",
    flexWrap: "nowrap",
    height,
    flexGrow: isEnd ? 0 : 1,
  },
  children: [
    { type: "block", props: { flexGrow: 0, width: 10 } },
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
      props: { flexGrow: 1 , flexWrap: "nowrap" },
      children: [
        { type: "block", props: { height: 10 } },
        ...(children || []),
        { type: "block", props: { height: 10 } },
      ]
    },
    { type: "block", props: { flexGrow: 0, width: 10 } },
  ],
});

export default createRailBlock;
