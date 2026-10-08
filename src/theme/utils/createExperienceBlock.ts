import { CVExperience, RevivableComponent } from "@app-types";
import { Colours } from "../types";
import createResponsibilities from "./createResponsibilities";
import createAchievements from "./createAchievements";
import createRailBlock from "../elements/createRailBlock";
import createSpacer from "../elements/createSpacer";
import { body, small } from "../typography";

const stackPattern = /^stack:\s*/i;

const createExperienceBlock = (experience: CVExperience, colours: Colours, isLast: boolean = false, isExperienceOnly: boolean = false) => {
  const responsibilities = experience.responsibilities.filter(({ text }) => !stackPattern.test(text));
  const stack = experience.responsibilities
    .filter(({ text }) => stackPattern.test(text))
    .flatMap(({ text }) => text.replace(stackPattern, "").split(/,\s*/))
    .filter(Boolean);

  return createRailBlock(
    colours.highlight,
    [
      {
        type: "text",
        props: { color: colours.text, text: experience.title, weight: 600, ...body }
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
          color: colours.muted,
          text: `${experience.from} - ${experience.to}`,
          ...body
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
              props: { text: "", color: colours.text, ...body, flexShrink: 1 },
              children: [
                {
                  type: "link",
                  props: { src: experience.details.link, color: colours.link },
                  children: [
                    { type: "fragment", props: { node: `${experience.details.company}` } }
                  ]
                },
                { type: "text", props: { text: experience.details.description, color: colours.text, ...body } }
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
              props: { text: "Role:", color: colours.text, weight: 600, ...body }
            },
            { type: "block", props: { width: 6 } },
            { type: "text", props: { text: experience.role, color: colours.text, ...body, flexShrink: 1 } }
          ]
        },
      ] satisfies RevivableComponent[] : []),
      ...(responsibilities.length > 0 ? [
        createSpacer(3),
        ...createResponsibilities(responsibilities, colours),
      ] satisfies RevivableComponent[] : []),
      ...(experience.achievements.length > 0 ? [
        createSpacer(3),
        ...createAchievements(experience.achievements, colours),
      ] satisfies RevivableComponent[] : []),
      ...(stack.length > 0 ? [
        createSpacer(3),
        { type: "text", props: { text: `Stack: ${stack.join(" · ")}`, color: colours.muted, ...small } },
      ] satisfies RevivableComponent[] : []),
      createSpacer(20)
    ],
    isLast,
    isExperienceOnly ? 190 : undefined
  );
};

export default createExperienceBlock;
