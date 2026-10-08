import { CV, RevivableComponent } from "@app-types";
import { Colours } from "../types";
import createBlockTitle from "../elements/createBlockTitle";
import { body } from "../typography";

const createDesires = (cv: CV, colours: Colours): RevivableComponent[] => [
  ...createBlockTitle("Summary", colours, "icon-flame"),
  { type: "block", props: { height: 10 } },
  {
    type: "block",
    props: { flexDirection: "row" },
    children: [
      { type: "block", props: { width: 20 } },
      {
        type: "block",
        props: { flexGrow: 1 },
        children: [
          { type: "text", props: { text: cv.desire, color: colours.text, ...body } }
        ],
      },
    ]
  }
];

export default createDesires;
