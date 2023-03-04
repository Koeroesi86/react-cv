import { CV, RevivableComponent } from "@app-types";
import { Colours } from "../types";
import createComment from "../elements/createComment";

const createHeader = (cv: CV, colours: Colours): RevivableComponent[] => [
  {
    type: "block",
    props: {},
    children: [
      { type: "block", props: { height: 20 } },
      createComment(colours.highlight, [
        {
          type: "link",
          props: { src: `${cv.links.github}`, underline: false },
          children: [
            {
              type: "block",
              props: { flexDirection: "row" },
              children: [
                { type: "text", props: { text: "@links:", color: colours.highlight, lineHeight: 1.2 } },
                { type: "block", props: { width: 6 } },
                {
                  type: "block",
                  props: { position: "relative", top: -3 },
                  children: [
                    { type: "icon-github", props: { width: 12, height: 12, color: colours.highlight } },
                  ]
                },
                { type: "block", props: { width: 3 } },
                { type: "text", props: { text: `${cv.links.github}`.replace(/^https?:\/\//, ""), color: colours.highlight, lineHeight: 1.2 } },
              ],
            },
          ],
        },
        { type: "block", props: { width: 6 } },
        { type: "text", props: { text: "||", color: colours.highlight, lineHeight: 1.2 } },
        { type: "block", props: { width: 6 } },
        {
          type: "link",
          props: { src: `${cv.links.website}`, underline: false },
          children: [
            {
              type: "block",
              props: { flexDirection: "row" },
              children: [
                {
                  type: "block",
                  props: { position: "relative", top: -3 },
                  children: [
                    { type: "icon-folder", props: { width: 12, height: 12, color: colours.highlight } },
                  ]
                },
                { type: "block", props: { width: 3 } },
                { type: "text", props: { text: `${cv.links.website}`.replace(/^https?:\/\//, ""), color: colours.highlight, lineHeight: 1.2 } },
              ],
            },
          ],
        },
      ]),
      { type: "block", props: { height: 2 } },
      createComment(colours.highlight, [
        { type: "text", props: { color: colours.highlight, text: "@var", size: 12, lineHeight: 1.2 } },
        { type: "block", props: { width: 6 } },
        { type: "text", props: { color: colours.highlight, text: `{${cv.role}} ${cv.nick}`, size: 12, lineHeight: 1.2 } },
      ]),
      { type: "block", props: { height: 6 } },
      { type: "text", props: { color: colours.text, text: `${cv.name}`, size: 24, lineHeight: 1.2 } },
    ],
  },
];

export default createHeader;
