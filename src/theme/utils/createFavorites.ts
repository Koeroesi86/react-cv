import { CV, RevivableComponent } from "@app-types";
import { Colours } from "../types";
import createBlockTitle from "../elements/createBlockTitle";
import createBulletpoint from "../elements/createBulletpoint";

const createFavorites = (cv: CV, colours: Colours): RevivableComponent[] => [
  ...createBlockTitle("Favorites", colours, "icon-star"),
  { type: "block", props: { height: 10 } },
  ...cv.favorites.map((favorite) => createBulletpoint(
    { type: "icon-arrow-right", props: { width: 8, height: 8, color: colours.text } },
    [
      {
        type: "block",
        props: { flexDirection: "row" },
        children: [
          {
            type: "link",
            props: { src: `${favorite.name}`, color: colours.highlight },
            children: [{ type: "text", props: { text: `${favorite.name}`, color: colours.highlight }}]
          },
          { type: "block", props: { width: 6 }},
          { type: "text", props: { text: `${favorite.description}`, color: colours.text }},
        ]
      },
    ],
  ))
];

export default createFavorites;
