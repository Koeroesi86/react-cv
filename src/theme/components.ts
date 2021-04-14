import Document from "@components/document";
import Page from "@components/page";
import Block from "@components/block";
import Text from "@components/text";
import Fragment from "@components/fragment";
import IconFlame from "@components/icon-flame";
import IconArrowRight from "@components/icon-arrow-right";
import IconRing from "@components/icon-ring";
import IconCheck from "@components/icon-check";
import IconBag from "@components/icon-bag";
import Link from "@components/link";
import IconGraduation from "@components/icon-graduation";
import IconFlower from "@components/icon-flower";
import IconStar from "@components/icon-star";
import IconInfo from "@components/icon-info";
import { ComponentRegistry } from "@koeroesi86/react-reviver";
import IconFolder from "@components/icon-folder";
import IconGithub from "@components/icon-github";

const components: ComponentRegistry = {
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
  "icon-github": IconGithub,
};

export default components;
