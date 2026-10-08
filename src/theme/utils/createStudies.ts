import { CV, RevivableComponent } from "@app-types";
import { Colours } from "../types";
import createBlockTitle from "../elements/createBlockTitle";
import createBulletpoint from "../elements/createBulletpoint";
import createRailBlock from "../elements/createRailBlock";
import createEntryHeader from "../elements/createEntryHeader";
import formatPeriod from "./formatPeriod";
import { body } from "../typography";

const createStudies = (cv: CV, colours: Colours): RevivableComponent[] => [
  ...createBlockTitle("Education", colours, "icon-graduation"),
  ...cv.studies.map((study, index): RevivableComponent => createRailBlock(
    colours.highlight,
    [
      ...createEntryHeader(study.title, formatPeriod(study.from, study.to), colours),
      { type: "block", props: { height: 3 } },
      ...study.details.map((detail, detailIndex): RevivableComponent => ({
        type: "block",
        props: { },
        children: [
          // the first detail is the degree, shown in the accent colour like a role
          { type: "text", props: { text: detail.title, color: detailIndex === 0 ? colours.link : colours.text, weight: 600, ...body }},
          ...detail.points.map((point): RevivableComponent => createBulletpoint(
            { type: "icon-arrow-right", props: { width: 8, height: 8, color: colours.text } },
            [
              { type: "text", props: { text: `${point}`, color: colours.text, ...body }},
            ],
          )),
        ],
      }))
    ],
    index === cv.studies.length - 1,
    undefined,
    index === 0,
  )),
];

export default createStudies;
