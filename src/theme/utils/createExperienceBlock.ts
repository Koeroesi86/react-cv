import { CVExperience, RevivableComponent } from "@app-types";
import { Colours } from "../types";
import createResponsibilities from "./createResponsibilities";
import createAchievements from "./createAchievements";
import createRailBlock from "../elements/createRailBlock";
import createSpacer from "../elements/createSpacer";

const createExperienceBlock = (experience: CVExperience, colours: Colours, isLast: boolean = false, isExperienceOnly: boolean = false) =>
  createRailBlock(
    colours.highlight,
    [
      {
        type: "text",
        props: { color: colours.text, text: experience.title, weight: 700, lineHeight: 1.2 }
      },
      createSpacer(3),
      {
        type: "block",
        props: {
          backgroundColor: colours.secondaryDivider,
          height: 1,
          width: 400
        }
      },
      createSpacer(1),
      {
        type: "text",
        props: {
          color: colours.text,
          text: `${experience.from} - ${experience.to}`,
          lineHeight: 1.2
        }
      },
      ...(experience.details.link ? [
        createSpacer(3),
        {
          type: "block",
          props: { flexDirection: "row", flexWrap: "nowrap" },
          children: [
            {
              type: "text",
              props: { text: "", color: colours.text, lineHeight: 1.2, flexShrink: 1 },
              children: [
                {
                  type: "link",
                  props: { src: experience.details.link, color: colours.highlight },
                  children: [
                    { type: "fragment", props: { node: `${experience.details.company}` } }
                  ]
                },
                { type: "text", props: { text: experience.details.description, color: colours.text, lineHeight: 1.2 } }
              ]
            }
          ]
        }
      ] satisfies RevivableComponent[] : []),
      ...(experience.role ? [
        createSpacer(3),
        {
          type: "block",
          props: { flexDirection: "row", flexWrap: "nowrap" },
          children: [
            {
              type: "text",
              props: { text: "Role:", color: colours.text, weight: 700, lineHeight: 1.2 }
            },
            { type: "block", props: { width: 6 } },
            { type: "text", props: { text: experience.role, color: colours.text, lineHeight: 1.2, flexShrink: 1 } }
          ]
        },
      ] satisfies RevivableComponent[] : []),
      ...(experience.responsibilities.length > 0 ? [
        createSpacer(3),
        ...createResponsibilities(experience.responsibilities, colours),
      ] satisfies RevivableComponent[] : []),
      ...(experience.achievements.length > 0 ? [
        createSpacer(3),
        ...createAchievements(experience.achievements, colours),
      ] satisfies RevivableComponent[] : []),
      createSpacer(20)
    ],
    isLast,
    isExperienceOnly ? 190 : undefined
  );

export default createExperienceBlock;
