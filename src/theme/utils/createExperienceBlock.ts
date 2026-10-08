import { CVExperience, RevivableComponent } from "@app-types";
import { Colours } from "../types";
import createResponsibilities from "./createResponsibilities";
import createAchievements from "./createAchievements";
import createRailBlock from "../elements/createRailBlock";
import createSpacer from "../elements/createSpacer";
import createEntryHeader from "../elements/createEntryHeader";
import { body, small } from "../typography";

const stackPattern = /^stack:\s*/i;

const createExperienceBlock = (experience: CVExperience, colours: Colours, isLast: boolean = false, isFirst: boolean = false) => {
  const responsibilities = experience.responsibilities.filter(({ text }) => !stackPattern.test(text));
  const stack = experience.responsibilities
    .filter(({ text }) => stackPattern.test(text))
    .flatMap(({ text }) => text.replace(stackPattern, "").split(/,\s*/))
    .filter(Boolean);

  return createRailBlock(
    colours.highlight,
    [
      ...createEntryHeader(experience.title, `${experience.from} - ${experience.to}`, colours, experience.role),
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
      ...(stack.length > 0 ? [
        createSpacer(2),
        { type: "text", props: { text: stack.join("\u00a0· "), color: colours.muted, ...small } },
      ] satisfies RevivableComponent[] : []),
      ...(responsibilities.length > 0 ? [
        createSpacer(3),
        ...createResponsibilities(responsibilities, colours),
      ] satisfies RevivableComponent[] : []),
      ...(experience.achievements.length > 0 ? [
        createSpacer(3),
        ...createAchievements(experience.achievements, colours),
      ] satisfies RevivableComponent[] : []),
      createSpacer(20, 10)
    ],
    isLast,
    undefined,
    isFirst,
  );
};

export default createExperienceBlock;
