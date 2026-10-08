import { CV, RevivableComponent } from "@app-types";
import { PageSizes } from "@pdf-components";
import { Colours } from "./types";
import createPages from "./utils/createPages";

const transformCv = (cv: CV, colours: Colours, pageSize: PageSizes): RevivableComponent[] => [
  {
    type: "document",
    props: { title: `${cv.name} – CV`, author: cv.name, subject: cv.role, language: "en", keywords: cv.skills.map(s => s.list.join(", ")).join(", ") },
    children: createPages(cv, colours, pageSize)
  }
];

export default transformCv;
