import { CV, RevivableComponent } from "@app-types";
import { PageSizes } from "@koeroesi86/react-pdf-components";
import { Colours } from "./types";
import createPages from "./utils/createPages";

const transformCv = (cv: CV, colours: Colours, pageSize: PageSizes): RevivableComponent[] => [
  {
    type: "document",
    props: { title: cv.name, author: cv.name, keywords: cv.skills.map(s => s.list.join(", ")).join(", ") },
    children: createPages(cv, colours, pageSize)
  }
];

export default transformCv;
