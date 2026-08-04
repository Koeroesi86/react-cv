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
        width: (icon.props?.width ?? 1) * 2,
      },
      children: [
        { type: "block", props: { height: (icon.props?.height ?? 1) / 4 } },
        icon
      ],
    },
    { type: "block", props: { }, children },
  ]
});

export default createBulletpoint;
