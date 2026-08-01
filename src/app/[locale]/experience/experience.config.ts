import {
  MaterialUiIcon,
  NodeJsIcon,
  OpenAiIcon,
  PostgreIcon,
  ReactIcon,
  StyledComponentsIcon,
  TanstackIcon,
  TypescriptIcon
} from '../../../../public/icons';

export const EXPERIENCE_CONFIG = [
  {
    id: "santander",
    image: "/images/credit-assessment.png",
    techStack: [
      OpenAiIcon,
      ReactIcon,
      TypescriptIcon,
      TanstackIcon,
      StyledComponentsIcon,
    ],
  },
  {
    id: "libertas",
    image: "/images/project-fintech.jpeg",
    techStack: [
      ReactIcon,
      TypescriptIcon,
      MaterialUiIcon,
      NodeJsIcon,
      PostgreIcon,
    ],
  },
] as const;

export type ExperienceId = (typeof EXPERIENCE_CONFIG)[number]["id"];