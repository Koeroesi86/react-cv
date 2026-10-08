import { CV, RevivableComponent } from "@app-types";
import { Colours } from "../types";
import createBlockTitle from "../elements/createBlockTitle";
import createBulletpoint from "../elements/createBulletpoint";
import createSpacer from "../elements/createSpacer";
import { body } from "../typography";

const createFavorites = (cv: CV, colours: Colours): RevivableComponent[] => [
  ...createBlockTitle("Projects", colours, "icon-star"),
  createSpacer(10),
  ...cv.favorites.map((favorite) => createBulletpoint(
    { type: "icon-arrow-right", props: { width: 8, height: 8, color: colours.text } },
    [
      {
        type: "text",
        props: { text: "", color: colours.text, ...body },
        children: [
          {
            type: "link",
            props: { src: favorite.url, color: colours.link },
            children: [{ type: "fragment", props: { node: favorite.name } }],
          },
          { type: "fragment", props: { node: ` ${favorite.description}` } },
        ],
      },
      createSpacer(3),
    ],
  )),
];

export default createFavorites;
