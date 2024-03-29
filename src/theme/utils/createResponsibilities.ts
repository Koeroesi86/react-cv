import { CVResponsibility, RevivableComponent } from "@app-types";
import { Colours } from "../types";
import createBulletpoint from "../elements/createBulletpoint";

const createResponsibilities = (responsibilities: CVResponsibility[], colours: Colours): RevivableComponent[] => [
  { type: "text", props: { text: "Responsibilities", color: colours.text, weight: 700, lineHeight: 1.2 } },
  ...responsibilities.map((responsibility) => createBulletpoint(
    { type: "icon-arrow-right", props: { width: 8, height: 8, color: colours.text } },
    [
      {
        type: "text",
        props: { text: "", color: colours.text, lineHeight: 1.2 },
        children: [
          { type: "fragment", props: { node: `${responsibility.text}` } },
          ...(responsibility.links ? responsibility.links.map((link, index): RevivableComponent => ({
            type: "text",
            props: { text: "", color: colours.text, lineHeight: 1.2 },
            children: [
              {
                type: "link",
                props: { src: `${link.url}`, color: colours.highlight },
                children: [
                  { type: "fragment", props: { node: `${link.text}` } }
                ]
              },
              ...(index < responsibility.links.length - 1 ? [{ type: "fragment", props: { node: ", " } }] as RevivableComponent[] : [])
            ]
          })) : []),
        ],
      }
    ]
  )),
];

export default createResponsibilities;
