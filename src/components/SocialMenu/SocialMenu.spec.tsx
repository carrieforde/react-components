import React from "react";
import { render } from "@testing-library/react";
import { Default } from "./SocialMenu.stories";

describe("SocialMenu", () => {
  it("should display the social menu items correctly", () => {
    const { container } = render(<Default {...Default.args} />);
    const items = container.querySelectorAll("li");
    expect(items.length).toEqual(Default.args.menuItems.length);
    expect(items[0].firstElementChild).toHaveAttribute(
      "href",
      Default.args.menuItems[0].link
    );
  });
});
