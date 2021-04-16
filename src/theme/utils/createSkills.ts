import { CV, RevivableComponent } from "@app-types";
import createBlockTitle from "../elements/createBlockTitle";
import { Colours } from "../types";
import createBulletpoint from "../elements/createBulletpoint";

const createSkills = (cv: CV, colours: Colours): RevivableComponent[] => [
  ...createBlockTitle("Skills", colours, "icon-check"),
  { type: "block", props: { height: 10 } },
  ...cv.skills.map((skill) => createBulletpoint(
    { type: "icon-arrow-right", props: { width: 8, height: 8, color: colours.text } },
    [
      { type: "text", props: { text: `${skill.title}`, color: colours.text, weight: 700, lineHeight: 1.2 } },
      { type: "block", props: { height: 2 } },
      {
        type: "text",
        props: { text: "", color: colours.text, lineHeight: 1.2 },
        children: skill.list.map((item, i): RevivableComponent => ({
          type: "fragment",
          props: {
            node: `${item}${i < skill.list.length - 1 ? ", " : ""}`
          }
        })),
      },
      { type: "block", props: { height: 6 } },
    ],
  )),
];

export default createSkills;
