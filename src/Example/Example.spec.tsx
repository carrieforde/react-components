import React from "react";
import { render } from "@testing-library/react";
import { HelloWorld } from "./Example.stories";

describe("Example", () => {
  it("should return the correct salutation", () => {
    const { container } = render(<HelloWorld {...HelloWorld.args} />);
    expect(container.firstChild.textContent).toEqual("Hello World");
  });
});
