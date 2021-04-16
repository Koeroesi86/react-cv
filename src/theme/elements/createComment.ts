import { RevivableComponent } from "@app-types";

const createComment = (color: string, children: RevivableComponent[]): RevivableComponent => ({
  type: "block",
  props: { flexDirection: "row", justifyContent: "flex-start" },
  children: [
    { type: "text", props: { text: "/**", color, lineHeight: 1.2 } },
    { type: "block", props: { width: 6 } },
    ...children,
    { type: "block", props: { width: 6 } },
    { type: "text", props: { text: "*/", color, lineHeight: 1.2 } },
  ]
});

export default createComment;
