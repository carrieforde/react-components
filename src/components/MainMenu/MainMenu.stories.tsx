import React, { ReactElement } from "react";
import MainMenu from "./MainMenu";
import { MainMenuProps } from "./MainMenu.interface";

export default {
  title: "Main Menu",
  component: MainMenu,
};

const Template = (args: MainMenuProps): ReactElement => <MainMenu {...args} />;

export const Menu = Template.bind({});

Menu.args = {
  menuItems: [
    <MenuItem key="About" link="/#about" text="About" />,
    <MenuItem key="Experience" link="/#experience" text="Experience" />,
    <MenuItem key="Blog" link="/blog" text="Blog" />,
  ],
};

interface MenuItemProps {
  link: string;
  text: string;
}

function MenuItem({ link, text }: MenuItemProps): ReactElement {
  return (
    <a href={link} className="">
      {text}
    </a>
  );
}
