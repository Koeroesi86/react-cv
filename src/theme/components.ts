import { ComponentRegistry } from "@koeroesi86/react-reviver";
import {
  Block,
  Document,
  Fragment,
  IconArrowRight,
  IconBag,
  IconCheck,
  IconFlame,
  IconFlower,
  IconFolder,
  IconGithub,
  IconGraduation,
  IconInfo,
  IconRing,
  IconStar,
  Link,
  Page,
  Rail,
  Text
} from "@koeroesi86/react-pdf-components";

const components: ComponentRegistry = {
  "rail": Rail,
  "document": Document,
  "page": Page,
  "block": Block,
  "text": Text,
  "link": Link,
  "fragment": Fragment,
  "icon-arrow-right": IconArrowRight,
  "icon-ring": IconRing,
  "icon-flame": IconFlame,
  "icon-check": IconCheck,
  "icon-bag": IconBag,
  "icon-graduation": IconGraduation,
  "icon-flower": IconFlower,
  "icon-star": IconStar,
  "icon-info": IconInfo,
  "icon-folder": IconFolder,
  "icon-github": IconGithub
};

export default components;
