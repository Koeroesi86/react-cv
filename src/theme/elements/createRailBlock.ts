import { RevivableComponent } from "@app-types";

const createRailBlock = (railColor: string, children?: RevivableComponent[], isEnd?: boolean, height?: number): RevivableComponent => ({
  type: "block",
  props: { flexDirection: "row", height },
  children: [
    {
      type: "rail",
      props: { size: 40, color: railColor, orientation: "column", startSize: 15, iconSize: 10, endSize: isEnd ? 0 : "grow" },
    },
    {
      type: "block",
      props: { flexGrow: 1 },
      children: [
        { type: "block", props: { height: 10 } },
        ...(children || []),
        { type: "block", props: { height: 10 } },
      ]
    }
  ],
});

export default createRailBlock;
