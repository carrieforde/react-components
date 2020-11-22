import React from "react";
import { Menu } from "./MainMenu.stories";
import { render } from "@testing-library/react";

describe("MainMenu", () => {
  it("should render the correct number of items", () => {
    const { container } = render(<Menu {...Menu.args} />);
    const li = container.querySelectorAll("li");
    expect(li.length).toEqual(Menu.args.menuItems.length);
  });
});
