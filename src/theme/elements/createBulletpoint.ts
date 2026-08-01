import { RevivableComponent, RevivableIcon } from "@app-types";

const createBulletpoint = (icon: RevivableIcon, children?: RevivableComponent[]): RevivableComponent => ({
  type: "block",
  props: { flexDirection: "row", flexWrap: "nowrap" },
  children: [
    {
      type: "block",
      props: {
        flexGrow: 0,
        alignItems: "center",
        justifyContent: "flex-start",
        flexWrap: "nowrap",
        ...(icon.props && { width: (icon.props.width) * 2 }),
      },
      children: [
        { type: "block", props: icon.props ? { height: icon.props.height / 4 } : {} },
        icon
      ],
    },
    { type: "block", props: { flexGrow: 1, flexWrap: "nowrap" }, children },
  ]
});

export default createBulletpoint;
