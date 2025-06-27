import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Blog = {
  id: string;
  title: string;
  content: string;
  image: string;
};