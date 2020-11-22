import React, { ReactElement } from "react";
import { PageExcerptProps } from "./PageExcerpt.interface";
import ReactHtmlParser from "react-html-parser";

function PageExcerpt({ text }: PageExcerptProps): ReactElement {
  return (
    <p className="font-semibold text-lg md:text-xl text-gray-600">
      {ReactHtmlParser(text)}
    </p>
  );
}

export default PageExcerpt;
