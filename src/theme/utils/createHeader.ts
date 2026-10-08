import { CV, IconAlias, RevivableComponent } from "@app-types";
import { Colours } from "../types";
import { body } from "../typography";
import createSpacer from "../elements/createSpacer";

const stripProtocol = (url: string) => url.replace(/^https?:\/\//, "");

const createContact = (
  colours: Colours,
  src: string,
  label: string,
  icon?: IconAlias,
): RevivableComponent => ({
  type: "link",
  props: { src, color: colours.link, underline: false },
  children: [
    {
      type: "block",
      props: { flexDirection: "row", flexWrap: "nowrap" },
      children: [
        ...(icon ? [
          {
            type: "block",
            props: { position: "relative", top: -2 },
            children: [{ type: icon, props: { width: 11, height: 11, color: colours.link } }],
          },
          { type: "block", props: { width: 4 } },
        ] satisfies RevivableComponent[] : []),
        { type: "text", props: { text: label, color: colours.link, ...body } },
      ],
    },
  ],
});

const createHeader = (cv: CV, colours: Colours): RevivableComponent[] => {
  const contacts = [
    cv.links.github && createContact(colours, cv.links.github, stripProtocol(cv.links.github), "icon-github"),
    cv.links.website && createContact(colours, cv.links.website, stripProtocol(cv.links.website), "icon-folder"),
    cv.links.phone && createContact(colours, `tel:${cv.links.phone}`, cv.links.phone),
  ].filter((contact): contact is RevivableComponent => Boolean(contact));

  return [
    {
      type: "block",
      props: {},
      children: [
        createSpacer(20),
        { type: "text", props: { color: colours.text, text: cv.name, size: 26, weight: 600, lineHeight: 1.2 } },
        createSpacer(3),
        { type: "text", props: { color: colours.muted, text: cv.role, size: 13, lineHeight: 1.35 } },
        createSpacer(6),
        {
          type: "block",
          props: { flexDirection: "row", flexWrap: "nowrap" },
          children: contacts.flatMap((contact, index): RevivableComponent[] => [
            ...(index > 0 ? [
              { type: "block", props: { width: 8 } },
              { type: "text", props: { text: "·", color: colours.muted, ...body } },
              { type: "block", props: { width: 8 } },
            ] satisfies RevivableComponent[] : []),
            contact,
          ]),
        },
      ],
    },
  ];
};

export default createHeader;
