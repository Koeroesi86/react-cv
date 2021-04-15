import { RevivableComponent, RevivableIcon } from "@app-types";

const createBulletpoint = (icon: RevivableIcon, children?: RevivableComponent[]): RevivableComponent => ({
  type: "block",
  props: { flexDirection: "row" },
  children: [
    {
      type: "block",
      props: { flexGrow: 0, width: (icon.props.width) * 2 },
      children: [
        {
          type: "block",
          props: { position: "absolute", top: icon.props.height / 4, left: icon.props.width / 2 },
          children: [ icon ],
        }
      ],
    },
    { type: "block", props: { flexGrow: 1 }, children },
  ]
});

export default createBulletpoint;
