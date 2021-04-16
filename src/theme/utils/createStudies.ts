import { CV, RevivableComponent } from "@app-types";
import { Colours } from "../types";
import createBlockTitle from "../elements/createBlockTitle";
import createBulletpoint from "../elements/createBulletpoint";
import createRailBlock from "../elements/createRailBlock";

const createStudies = (cv: CV, colours: Colours): RevivableComponent[] => [
  ...createBlockTitle("Studies", colours, "icon-graduation"),
  ...cv.studies.map((study, index): RevivableComponent => createRailBlock(
    colours.highlight,
    [
      { type: "text", props: { text: study.title, color: colours.text, weight: 600, lineHeight: 1.2 } },
      { type: "block", props: { backgroundColor: colours.secondaryDivider, height: 1, width: 400 } },
      { type: "text", props: { text: `${study.from ? `${study.from} - ` : ''}${study.to}`, color: colours.text, lineHeight: 1.2 } },
      { type: "block", props: { height: 3 } },
      ...study.details.map((detail): RevivableComponent => ({
        type: "block",
        props: { },
        children: [
          { type: "text", props: { text: detail.title, color: colours.text, weight: 600, lineHeight: 1.2 }},
          ...detail.points.map((point): RevivableComponent => createBulletpoint(
            { type: "icon-arrow-right", props: { width: 8, height: 8, color: colours.text } },
            [
              { type: "text", props: { text: `${point}`, color: colours.text, lineHeight: 1.2 }},
            ],
          )),
        ],
      }))
    ],
    index === cv.studies.length - 1,
  )),
];

export default createStudies;
