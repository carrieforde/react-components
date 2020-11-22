import React from "react";
import { ShortTitle } from "./PageTitle.stories";
import { render } from "@testing-library/react";

describe("PageTitle", () => {
  it("should correctly render the page title", () => {
    const { container } = render(<ShortTitle {...ShortTitle.args} />);
    const title = container.querySelector("h1");
    expect(title.textContent).toEqual(ShortTitle.args.text);
  });
});
