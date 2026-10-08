import { CV, IconAlias, RevivableComponent } from "@app-types";
import { Colours } from "../types";
import { body } from "../typography";
import createSpacer from "../elements/createSpacer";

const stripProtocol = (url: string) => url.replace(/^https?:\/\//, "");

const createContent = (colours: Colours, label: string, icon: IconAlias, textColor: string): RevivableComponent => ({
  type: "block",
  props: { flexDirection: "row", flexWrap: "nowrap" },
  children: [
    {
      type: "block",
      props: { position: "relative", top: -0.6 },
      children: [{ type: icon, props: { width: 11, height: 11, color: colours.link } }],
    },
    { type: "block", props: { width: 4 } },
    { type: "text", props: { text: label, color: textColor, ...body } },
  ],
});

const createContact = (colours: Colours, label: string, icon: IconAlias, src?: string): RevivableComponent => (
  src
    ? {
      type: "link",
      props: { src, color: colours.link, underline: false },
      children: [createContent(colours, label, icon, colours.link)],
    }
    : createContent(colours, label, icon, colours.text)
);

const createContactRow = (contacts: RevivableComponent[], colours: Colours): RevivableComponent => ({
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
});

const isDefined = (contact: RevivableComponent | undefined): contact is RevivableComponent => Boolean(contact);

const createHeader = (cv: CV, colours: Colours): RevivableComponent[] => {
  const { github, website, email, phone } = cv.links;
  const personal = [
    cv.location ? createContact(colours, cv.location, "icon-map-pin") : undefined,
    email ? createContact(colours, email, "icon-mail", `mailto:${email}`) : undefined,
    phone ? createContact(colours, phone, "icon-phone", `tel:${phone}`) : undefined,
  ].filter(isDefined);
  const online = [
    github ? createContact(colours, stripProtocol(github), "icon-github", github) : undefined,
    website ? createContact(colours, stripProtocol(website), "icon-folder", website) : undefined,
  ].filter(isDefined);

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
        ...[personal, online]
          .filter((contacts) => contacts.length > 0)
          .flatMap((contacts, index): RevivableComponent[] => [
            ...(index > 0 ? [createSpacer(2)] : []),
            createContactRow(contacts, colours),
          ]),
      ],
    },
  ];
};

export default createHeader;
