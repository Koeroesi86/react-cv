import { PageSizes } from "@koeroesi86/react-pdf-components";
import { CV, RevivableComponent } from "@app-types";
import createHeader from "./createHeader";
import createBlockTitle from "../elements/createBlockTitle";
import createPageNumber from "../elements/createPageNumber";
import { Colours } from "../types";
import createSkills from "./createSkills";
import createDesires from "./createDesires";
import createExperienceBlock from "./createExperienceBlock";

const createFirstPage = (cv: CV, pageSize: PageSizes, colours: Colours, fontFamily: string): RevivableComponent => ({
  type: "page",
  props: { size: pageSize, fontFamily },
  children: [
    ...createHeader(cv, colours),
    { type: "block", props: { flexGrow: 1 } },
    { type: "block", props: {}, children: createDesires(cv, colours) },
    { type: "block", props: { flexGrow: 1 } },
    { type: "block", props: {}, children: createSkills(cv, colours) },
    { type: "block", props: { flexGrow: 1 } },
    {
      type: "block",
      props: {},
      children: [
        ...createBlockTitle("Experiences", colours, "icon-bag"),
        createExperienceBlock(cv.experiences[0], colours),
      ]
    },
    ...createPageNumber(1, colours),
  ] as RevivableComponent[],
});

export default createFirstPage;

