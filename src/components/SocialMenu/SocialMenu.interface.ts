import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface SocialMenuProps {
  menuItems: {
    name: string;
    link: string;
    icon: IconProp;
  }[];
}
