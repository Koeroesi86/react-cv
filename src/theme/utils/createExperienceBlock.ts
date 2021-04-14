import { CVExperience } from "@app-types";
import { Colours } from "../types";
import createResponsibilities from "./createResponsibilities";
import createAchievements from "./createAchievements";
import createRailBlock from "./createRailBlock";

const createExperienceBlock = (experience: CVExperience, colours: Colours, isLast: boolean = false, isExperienceOnly: boolean = false) => createRailBlock(
  colours.highlight,
  [
    {
      type: "text",
      props: { color: colours.text, text: experience.title, weight: 700 }
    },
    { type: "block", props: { height: 3 } },
    {
      type: "block",
      props: {
        backgroundColor: colours.secondaryDivider,
        height: 1,
        width: 400
      }
    },
    { type: "block", props: { height: 3 } },
    {
      type: "text",
      props: {
        color: colours.text,
        text: `${experience.from} - ${experience.to}`
      }
    },
    { type: "block", props: { height: 6 } },
    {
      type: "block",
      props: { flexDirection: "row" },
      children: [
        {
          type: "text",
          props: { text: "Role:", color: colours.text, weight: 700 }
        },
        { type: "block", props: { width: 6 } },
        { type: "text", props: { text: experience.role, color: colours.text } }
      ]
    },
    { type: "block", props: { height: 6 } },
    ...createResponsibilities(experience.responsibilities, colours),
    { type: "block", props: { height: 6 } },
    ...createAchievements(experience.achievements, colours),
    { type: "block", props: { height: 20 } }
  ],
  isLast,
  isExperienceOnly ? 250 : undefined
);

export default createExperienceBlock;
