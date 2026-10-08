import { CV, RevivableComponent } from "@app-types";
import { PageSizes } from "@pdf-components";
import { Colours } from "../types";
import createFirstPage from "./createFirstPage";
import createPageNumber from "../elements/createPageNumber";
import createStudies from "./createStudies";
import createInterests from "./createInterests";
import createFavorites from "./createFavorites";
import createPlusInfo from "./createPlusInfo";
import createExperienceBlock from "./createExperienceBlock";

const createPages = (cv: CV, colours: Colours, pageSize: PageSizes): RevivableComponent[] => {
  // Pages are built lazily so the footer can show the total page count.
  const pages: ((total: number) => RevivableComponent)[] = [];

  // snapshot: the first experience is spliced off below, before the pages are built
  const firstPageCv: CV = { ...cv, experiences: [...cv.experiences] };

  pages.push((total) => createFirstPage(firstPageCv, pageSize, colours, "Open-Sans", total));

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

    const pageNumber = pages.length + 1;
    const renderStudies = hasStudiesRendered;
    const renderInterests = hasInterestsRendered;
    const renderFavorites = hasFavoritesRendered;
    // built eagerly: they depend on how many experiences are left at this point
    const experienceBlocks = currentExperiences.map((experience, index): RevivableComponent => (
      createExperienceBlock(
        experience, colours,
        cv.experiences.length === 0 && index === currentExperiences.length - 1)
    ));

    pages.push((total) => ({
      type: "page",
      props: { size: pageSize, fontFamily: "Open-Sans" },
      children: [
        { type: "block", props: { height: 40 } },
        ...experienceBlocks,
        { type: "block", props: { flexGrow: 1 } },
        ...(renderStudies ? createStudies(cv, colours) : []),
        { type: "block", props: { flexGrow: 1 } },
        ...(renderInterests ? createInterests(cv, colours) : []),
        { type: "block", props: { flexGrow: 1 } },
        ...(renderFavorites ? createFavorites(cv, colours) : []),
        { type: "block", props: { height: 10 } },
        ...createPageNumber(pageNumber, total, colours),
      ],
    }));
  }

  if (!hasStudiesRendered || !hasInterestsRendered || !hasFavoritesRendered) {
    const pageNumber = pages.length + 1;

    pages.push((total) => ({
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
        ...createPageNumber(pageNumber, total, colours),
      ]
    }));
  }

  return pages.map((createPage) => createPage(pages.length));
};

export default createPages;
