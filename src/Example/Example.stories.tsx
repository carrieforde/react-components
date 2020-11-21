import React from "react";
import Example from "./Example";
import { ExampleProps } from "./Example.interface";

export default {
  title: "Example",
  component: Example,
};

const Template = (args: ExampleProps) => <Example {...args} />;

export const HelloWorld = Template.bind({});

HelloWorld.args = {
  param: "World",
};
