import { RevivableComponent } from "@app-types";

// Spacers are the only blocks allowed to shrink, so fixed-height containers never compress text.
const createSpacer = (height: number): RevivableComponent => ({
  type: "block",
  props: { height, flexShrink: 1 },
});

export default createSpacer;
