import { CV, RevivableComponent } from "@app-types";
import { Colours } from "../types";
import createBlockTitle from "../elements/createBlockTitle";
import createBulletpoint from "../elements/createBulletpoint";
import { body } from "../typography";

const createInterests = (cv: CV, colours: Colours): RevivableComponent[] => [
  ...createBlockTitle("Interests", colours, "icon-flower"),
  { type: "block", props: { height: 10 } },
  ...cv.interests.map((interest) => createBulletpoint(
    { type: "icon-arrow-right", props: { width: 8, height: 8, color: colours.text } },
    [
      { type: "text", props: { text: `${interest}`, color: colours.text, ...body }},
    ],
  )),
];

export default createInterests;
