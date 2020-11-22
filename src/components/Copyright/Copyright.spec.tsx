import React from "react";
import Copyright from "./Copyright";
import { render } from "@testing-library/react";

describe("Copyright", () => {
  it("should render correctly", () => {
    const { container } = render(<Copyright />);
    const text = container.querySelector("small");
    expect(text.textContent).toContain(new Date().getFullYear());
  });
});
