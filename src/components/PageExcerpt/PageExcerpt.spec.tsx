import React from "react";
import { TextOnly, WithLink } from "./PageExcerpt.stories";
import { render } from "@testing-library/react";

describe("PageExcerpt", () => {
  it("should render an excerpt", () => {
    const { container } = render(<TextOnly {...TextOnly.args} />);
    const p = container.querySelector("p");
    expect(p.textContent).toEqual(TextOnly.args.text);
  });

  it("should render a link within an excerpt", () => {
    const { container } = render(<WithLink {...WithLink.args} />);
    const p = container.querySelector("p");
    expect(p).toContainHTML(
      '<a href="mailto:carrie@carrieforde.com">carrie@carrieforde.com</a>'
    );
  });
});
