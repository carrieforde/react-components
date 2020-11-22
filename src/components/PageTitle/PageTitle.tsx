import React, { ReactElement } from "react";
import { PageTitleProps } from "./PageTitle.interface";

function PageTitle({ text }: PageTitleProps): ReactElement {
  return (
    <h1 className="font-light text-4xl md:text-6xl text-gray-500">{text}</h1>
  );
}

export default PageTitle;
