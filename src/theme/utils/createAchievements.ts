import { RevivableComponent } from "@app-types";
import { Colours } from "../types";
import createBulletpoint from "../elements/createBulletpoint";
import { body } from "../typography";

export const createAchievements = (achievements: string[], colours: Colours): RevivableComponent[] => [
  { type: "text", props: { text: "Achievements", color: colours.text, weight: 600, ...body } },
  ...achievements.map((achievement) => createBulletpoint(
    { type: "icon-arrow-right", props: { width: 8, height: 8, color: colours.text } },
    [
      { type: "text", props: { text: achievement, color: colours.text, ...body } }
    ],
  )),
];

export default createAchievements;
