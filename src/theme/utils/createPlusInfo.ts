import { CV, RevivableComponent } from "@app-types";
import { Colours } from "../types";
import createBlockTitle from "./createBlockTitle";
import createBulletpoint from "./createBulletpoint";

const createPlusInfo = (cv: CV, colours: Colours): RevivableComponent[] => [
  ...createBlockTitle("Plus info", colours, "icon-info"),
  { type: "block", props: { height: 10 } },
  ...cv.information.map((information) => createBulletpoint(
    { type: "icon-arrow-right", props: { width: 8, height: 8, color: colours.text } },
    [
      { type: "text", props: { text: `${information}`, color: colours.text } },
      { type: "block", props: { height: 3 } },
    ],
  )),
];

export default createPlusInfo;
