import { RevivableComponent, RevivableIcon } from "@app-types";

const createBulletpoint = (icon: RevivableIcon, children?: RevivableComponent[]): RevivableComponent => ({
  type: "block",
  props: { flexDirection: "row", flexWrap: "nowrap", paddingLeft: (icon.props?.width ?? 0) * 2 },
  children: [
    {
      type: "block",
      props: {
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "center",
        justifyContent: "flex-start",
        flexWrap: "nowrap",
        ...(icon.props && { width: (icon.props?.width ?? 1) * 2 }),
      },
      children: [
        { type: "block", props: icon.props ? { height: (icon.props?.height ?? 1) / 4 } : {} },
        icon
      ],
    },
    { type: "block", props: { flexGrow: 1, flexBasis: 0, flexWrap: "nowrap" }, children },
  ]
});

export default createBulletpoint;
