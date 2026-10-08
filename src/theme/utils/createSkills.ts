import { CV, RevivableComponent } from "@app-types";
import createBlockTitle from "../elements/createBlockTitle";
import createSpacer from "../elements/createSpacer";
import { Colours } from "../types";
import { body } from "../typography";

const createSkills = (cv: CV, colours: Colours): RevivableComponent[] => [
  ...createBlockTitle("Skills", colours, "icon-check"),
  createSpacer(10),
  ...cv.skills.map((skill): RevivableComponent => ({
    type: "block",
    props: { flexDirection: "row", flexWrap: "nowrap" },
    children: [
      {
        type: "block",
        props: { width: 172, flexWrap: "nowrap" },
        children: [
          { type: "text", props: { text: skill.title, color: colours.text, weight: 600, ...body } },
        ],
      },
      {
        type: "block",
        props: { flexGrow: 1, flexBasis: 0, flexWrap: "nowrap" },
        children: [
          { type: "text", props: { text: skill.list.join("\u00a0· "), color: colours.text, ...body } },
          createSpacer(6),
        ],
      },
    ],
  })),
];

export default createSkills;
