import {
  BlockComponentProps,
  DocumentComponentProps,
  FragmentComponentProps,
  LinkComponentProps,
  PageComponentProps,
  TextComponentProps,
  IconProps,
  RailComponentProps
} from "@koeroesi86/react-pdf-components";
import { RevivableComponentType } from "@koeroesi86/react-reviver";

export type IconAlias =
  | "icon-arrow-right"
  | "icon-ring"
  | "icon-flame"
  | "icon-check"
  | "icon-bag"
  | "icon-graduation"
  | "icon-flower"
  | "icon-star"
  | "icon-info"
  | "icon-folder"
  | "icon-github";

export type RevivableIcon = RevivableComponentType<IconAlias, IconProps, RevivableComponent>;

export type RevivableComponent =
  | RevivableComponentType<"block", BlockComponentProps, RevivableComponent>
  | RevivableComponentType<"document", DocumentComponentProps, RevivableComponent>
  | RevivableComponentType<"fragment", FragmentComponentProps, RevivableComponent>
  | RevivableComponentType<"page", PageComponentProps, RevivableComponent>
  | RevivableComponentType<"text", TextComponentProps, RevivableComponent>
  | RevivableComponentType<"link", LinkComponentProps, RevivableComponent>
  | RevivableComponentType<"rail", RailComponentProps, RevivableComponent>
  | RevivableIcon;

export interface CVSkill {
  title: string;
  list: string[];
}

export interface CVResponsibilityLink {
  text: string;
  url: string;
}

export interface CVResponsibility {
  text: string;
  links?: CVResponsibilityLink[];
}

export interface CVExperienceDetails {
  link?: string;
  company: string;
  description: string;
}

export interface CVExperience {
  title: string;
  from: string;
  to: string;
  role: string;
  details: CVExperienceDetails;
  responsibilities: CVResponsibility[];
  achievements: string[];
}

export interface CVStudyDetails {
  title: string;
  points: string[];
}

export interface CVStudy {
  title: string;
  from: string;
  to: string;
  details: CVStudyDetails[];
}

export type CVInterest = string;

export interface CVFavorite {
  url: string;
  name: string;
  description: string;
}

export interface CVLinks {
  github?: string;
  website?: string;
}

export interface CV {
  name: string;
  nick: string;
  role: string;
  links: CVLinks;
  desire: string;
  skills: CVSkill[];
  experiences: CVExperience[];
  studies: CVStudy[];
  interests: CVInterest[];
  favorites: CVFavorite[];
  information: string[];
}

