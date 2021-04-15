import { RevivableComponent } from "@app-types";

const createComment = (color: string, children: RevivableComponent[]): RevivableComponent => ({
  type: "block",
  props: { flexDirection: "row", justifyContent: "flex-start" },
  children: [
    { type: "text", props: { text: "/**", color } },
    { type: "block", props: { width: 6 } },
    ...children,
    { type: "block", props: { width: 6 } },
    { type: "text", props: { text: "*/", color } },
  ]
});

export default createComment;
