import { CV, RevivableComponent } from "@app-types";
import { PageSizes } from "@koeroesi86/react-pdf-components";
import { Colours } from "../types";
import createFirstPage from "./createFirstPage";
import createPageNumber from "../elements/createPageNumber";
import createStudies from "./createStudies";
import createInterests from "./createInterests";
import createFavorites from "./createFavorites";
import createPlusInfo from "./createPlusInfo";
import createExperienceBlock from "./createExperienceBlock";

const createPages = (cv: CV, colours: Colours, pageSize: PageSizes): RevivableComponent[] => {
  const pages: RevivableComponent[] = [];

  pages.push(createFirstPage(cv, pageSize, colours, "Open-Sans"));

  cv.experiences.splice(0, 1);

  let hasStudiesRendered = false;
  let hasInterestsRendered = false;
  let hasFavoritesRendered = false;
  let hasPlusInfoRendered = false;

  if (cv.information.length === 0) {
    hasPlusInfoRendered = true;
  }

  while (cv.experiences.length > 0) {
    const currentExperiences = cv.experiences.splice(0, 4).filter(Boolean);
    const isExperienceOnly = currentExperiences.length === 4;

    if (!isExperienceOnly) {
      hasStudiesRendered = true;
    }

    if (currentExperiences.length < 3) {
      hasInterestsRendered = true;
    }

    if (currentExperiences.length < 2) {
      hasFavoritesRendered = true;
    }

    pages.push({
      type: "page",
      props: { size: pageSize, fontFamily: "Open-Sans" },
      children: [
        { type: "block", props: { height: 40 } },
        ...currentExperiences.map((experience, index): RevivableComponent => (
          createExperienceBlock(
            experience, colours,
            cv.experiences.length === 0 && index === currentExperiences.length - 1,
            isExperienceOnly)
        )),
        { type: "block", props: { flexGrow: 1 } },
        ...(hasStudiesRendered ? createStudies(cv, colours) : []),
        { type: "block", props: { flexGrow: 1 } },
        ...(hasInterestsRendered ? createInterests(cv, colours) : []),
        { type: "block", props: { flexGrow: 1 } },
        ...(hasFavoritesRendered ? createFavorites(cv, colours) : []),
        { type: "block", props: { height: 10 } },
        ...createPageNumber(pages.length + 1, colours),
      ],
    });
  }

  if (!hasStudiesRendered || !hasInterestsRendered || !hasFavoritesRendered) {
    pages.push({
      type: "page",
      props: { size: pageSize, justifyContent: "flex-start", fontFamily: "Open-Sans" },
      children: [
        { type: "block", props: { height: 40 } },
        ...(!hasStudiesRendered ? [
          ...createStudies(cv, colours),
          { type: "block", props: { height: 20 } },
        ] as RevivableComponent[] : []),
        ...(!hasInterestsRendered ? [
          ...createInterests(cv, colours),
          { type: "block", props: { height: 20 } },
        ] as RevivableComponent[] : []),
        ...(!hasFavoritesRendered ? [
          ...createFavorites(cv, colours),
          { type: "block", props: { height: 20 } },
        ] as RevivableComponent[] : []),
        ...(!hasPlusInfoRendered ? createPlusInfo(cv, colours) : []),
        { type: "block", props: { flexGrow: 1 } },
        ...createPageNumber(pages.length + 1, colours),
      ]
    });
  }

  return pages;
};

export default createPages;
