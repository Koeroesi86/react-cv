import { CV, CVFavorite, RevivableComponent } from "@app-types";
import { Colours } from "../types";
import createBlockTitle from "../elements/createBlockTitle";
import createSpacer from "../elements/createSpacer";
import { body, labelColumnWidth, small } from "../typography";

const toHost = (url: string) => new URL(url).hostname.replace(/^www\./, "");

const createFavorite = (favorite: CVFavorite, colours: Colours): RevivableComponent => {
  const host = toHost(favorite.url);
  const showHost = !favorite.name.includes(host);

  return {
    type: "block",
    props: { flexDirection: "row", flexWrap: "nowrap" },
    children: [
      {
        type: "block",
        props: { width: labelColumnWidth, flexWrap: "nowrap" },
        children: [
          {
            type: "link",
            props: { src: favorite.url, color: colours.link },
            children: [{ type: "text", props: { text: favorite.name, color: colours.link, weight: 600, ...body } }],
          },
        ],
      },
      {
        type: "block",
        props: { flexGrow: 1, flexBasis: 0, flexWrap: "nowrap" },
        children: [
          { type: "text", props: { text: favorite.description.replace(/^\((.*)\)$/, "$1"), color: colours.text, ...body } },
          ...(showHost ? [{ type: "text", props: { text: host, color: colours.muted, ...small } }] satisfies RevivableComponent[] : []),
          createSpacer(4),
        ],
      },
    ],
  };
};

const createFavorites = (cv: CV, colours: Colours): RevivableComponent[] => [
  ...createBlockTitle("Projects", colours, "icon-star"),
  createSpacer(10),
  ...cv.favorites.map((favorite) => createFavorite(favorite, colours)),
];

export default createFavorites;
