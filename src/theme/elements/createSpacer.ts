import { RevivableComponent } from "@app-types";

// Spacers are the only blocks allowed to shrink, so fixed-height containers never compress text.
// A higher shrink factor makes a spacer absorb more of the squeeze than its neighbours.
const createSpacer = (height: number, shrink: number = 1): RevivableComponent => ({
  type: "block",
  props: { height, flexShrink: shrink },
});

export default createSpacer;
