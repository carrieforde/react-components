import React, { ReactElement } from "react";
import PageTitle from "./PageTitle";
import { PageTitleProps } from "./PageTitle.interface";

export default {
  title: "Page Title",
  component: PageTitle,
};

const Template = (args: PageTitleProps): ReactElement => (
  <PageTitle {...args} />
);

export const ShortTitle = Template.bind({});
export const LongTitle = Template.bind({});

ShortTitle.args = {
  text: "Hello, I'm Carrie 👋",
};

LongTitle.args = {
  text: "How to build an interactive web component with LitElement",
};
