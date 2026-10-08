import { PageSizes } from "@pdf-components";
import { CV, RevivableComponent } from "@app-types";
import createHeader from "./createHeader";
import createBlockTitle from "../elements/createBlockTitle";
import createPageNumber from "../elements/createPageNumber";
import { Colours } from "../types";
import createSkills from "./createSkills";
import createDesires from "./createDesires";
import createExperienceBlock from "./createExperienceBlock";

const createFirstPage = (cv: CV, pageSize: PageSizes, colours: Colours, fontFamily: string, total: number): RevivableComponent => ({
  type: "page",
  props: { size: pageSize, fontFamily },
  children: [
    ...createHeader(cv, colours),
    { type: "block", props: { flexGrow: 1 } },
    { type: "block", props: { flexWrap: "nowrap" }, children: createDesires(cv, colours) },
    { type: "block", props: { flexGrow: 1 } },
    { type: "block", props: { flexWrap: "nowrap" }, children: createSkills(cv, colours) },
    { type: "block", props: { flexGrow: 1 } },
    {
      type: "block",
      props: { flexWrap: "nowrap" },
      children: [
        ...createBlockTitle("Experience", colours, "icon-bag"),
        createExperienceBlock(cv.experiences[0], colours, false, true),
      ]
    },
    { type: "block", props: { height: 10 } },
    ...createPageNumber(1, total, colours),
  ] as RevivableComponent[],
});

export default createFirstPage;

