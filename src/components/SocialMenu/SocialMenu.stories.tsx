import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React, { ReactElement } from "react";
import SocialMenu from "./SocialMenu";
import { SocialMenuProps } from "./SocialMenu.interface";

export default {
  title: "SocialMenu",
  component: SocialMenu,
};

export const Default = (args: SocialMenuProps): ReactElement => (
  <SocialMenu {...args} />
);

Default.args = {
  menuItems: [
    {
      name: "Email",
      link: "mailto:carrie@carrieforde.com",
      icon: ["fal", "paper-plane"] as IconProp,
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/carrieforde",
      icon: ["fab", "linkedin-in"] as IconProp,
    },
    {
      name: "Github",
      link: "https://github.com/carrieforde",
      icon: ["fab", "github"] as IconProp,
    },
    {
      name: "CodePen",
      link: "https://codepen.io/carrieforde",
      icon: ["fab", "codepen"] as IconProp,
    },
  ],
};
