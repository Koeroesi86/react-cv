import { RevivableComponent } from "@app-types";

const createRailBlock = (railColor: string, children?: RevivableComponent[], isEnd?: boolean, height?: number): RevivableComponent => ({
  type: "block",
  props: { flexDirection: "row", height },
  children: [
    {
      type: "block",
      props: { width: 40, flexDirection: "column", alignItems: "center" },
      children: [
        { type: "block", props: { width: 2, height: 15, flexGrow: 0, backgroundColor: railColor } },
        { type: "block", props: {}, children: [{ type: "icon-ring", props: { width: 10, height: 10, color: railColor }}]},
        ...(!isEnd ? [
          { type: "block", props: { width: 2, flexGrow: 1, backgroundColor: railColor } }
        ] as RevivableComponent[] : []),
      ]
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
