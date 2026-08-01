import type { ComponentType, SVGProps } from "react";

export type TechIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type ExperienceItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  techStack: TechIcon[];
};