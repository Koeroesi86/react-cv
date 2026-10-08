import { CV, RevivableComponent } from "@app-types";
import createBlockTitle from "../elements/createBlockTitle";
import createBulletpoint from "../elements/createBulletpoint";
import createSpacer from "../elements/createSpacer";
import { Colours } from "../types";
import { body } from "../typography";

const createSkills = (cv: CV, colours: Colours): RevivableComponent[] => [
  ...createBlockTitle("Skills", colours, "icon-check"),
  createSpacer(10),
  ...cv.skills.map((skill) => createBulletpoint(
    { type: "icon-arrow-right", props: { width: 8, height: 8, color: colours.text } },
    [
      { type: "text", props: { text: skill.title, color: colours.text, weight: 600, ...body } },
      { type: "text", props: { text: skill.list.join(" · "), color: colours.text, ...body } },
      createSpacer(6),
    ],
  )),
];

export default createSkills;
