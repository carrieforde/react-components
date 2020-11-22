import React, { ReactElement } from "react";
import PageExcerpt from "./PageExcerpt";
import { PageExcerptProps } from "./PageExcerpt.interface";

export default {
  title: "Page Excerpt",
  component: PageExcerpt,
};

const Template = (args: PageExcerptProps): ReactElement => (
  <PageExcerpt {...args} />
);

export const TextOnly = Template.bind({});
export const WithLink = Template.bind({});

TextOnly.args = {
  text:
    "With the rise of React in WordPress, there are more and more developers turning to webpack for managing and bundling front end assets.",
};

WithLink.args = {
  text:
    'Send me a message <a href="mailto:carrie@carrieforde.com">carrie@carrieforde.com</a>',
};
