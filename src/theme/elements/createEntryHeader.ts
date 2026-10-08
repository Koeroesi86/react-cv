import { RevivableComponent } from "@app-types";
import { Colours } from "../types";
import { body } from "../typography";

const titlePattern = /^(.*?)\s*\((.*)\)\s*$/;

/**
 * Header of an experience or education entry: the name with its city, the dates on the right
 * and an optional role or degree line below in the accent colour.
 */
const createEntryHeader = (
  title: string,
  dates: string,
  colours: Colours,
  subtitle?: string,
): RevivableComponent[] => {
  const [, name = title, city] = title.match(titlePattern) ?? [];

  return [
    {
      type: "block",
      props: { flexDirection: "row", flexWrap: "nowrap" },
      children: [
        {
          type: "block",
          props: { flexGrow: 1, flexBasis: 0, flexWrap: "nowrap" },
          children: [
            {
              type: "text",
              props: { text: name, color: colours.text, weight: 600, ...body },
              children: city
                ? [{ type: "text", props: { text: ` · ${city}`, color: colours.muted, ...body } }]
                : [],
            },
          ],
        },
        { type: "block", props: { width: 8 } },
        { type: "text", props: { text: dates, color: colours.muted, ...body } },
      ],
    },
    ...(subtitle ? [
      { type: "text", props: { text: subtitle, color: colours.link, weight: 600, ...body } },
    ] satisfies RevivableComponent[] : []),
  ];
};

export default createEntryHeader;
