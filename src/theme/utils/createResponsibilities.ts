import { CVResponsibility, RevivableComponent } from "@app-types";
import { Colours } from "../types";
import createBulletpoint from "../elements/createBulletpoint";
import { body, small } from "../typography";
import { getLinkHost, isHostVisible } from "./getLinkHost";

const createResponsibilities = (responsibilities: CVResponsibility[], colours: Colours): RevivableComponent[] => [
  { type: "text", props: { text: "Responsibilities", color: colours.text, weight: 600, ...body } },
  ...responsibilities.map((responsibility) => createBulletpoint(
    { type: "icon-arrow-right", props: { width: 8, height: 8, color: colours.text } },
    [
      {
        type: "text",
        props: { text: "", color: colours.text, ...body },
        children: [
          { type: "fragment", props: { node: `${responsibility.text}` } },
          ...(responsibility.links ? responsibility.links.map((link, index, links): RevivableComponent => {
            const host = getLinkHost(link.url);
            // consecutive links to the same site share one printed address, after the last of them
            const isGroupEnd = getLinkHost(links[index + 1]?.url ?? "https://-") !== host;

            return {
              type: "text",
              props: { text: "", color: colours.text, ...body },
              children: [
                {
                  type: "link",
                  props: { src: `${link.url}`, color: colours.link },
                  children: [
                    { type: "fragment", props: { node: `${link.text}` } }
                  ]
                },
                ...(isGroupEnd && !isHostVisible(link.text, host)
                  ? [{ type: "text", props: { text: ` (${host})`, color: colours.muted, ...small } }] satisfies RevivableComponent[]
                  : []),
                ...(index < links.length - 1 ? [{ type: "fragment", props: { node: ", " } }] as RevivableComponent[] : [])
              ]
            };
          }) : []),
        ],
      }
    ]
  )),
];

export default createResponsibilities;
