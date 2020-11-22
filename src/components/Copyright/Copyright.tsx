import React, { ReactElement } from "react";

function Copyright(): ReactElement {
  return (
    <p className="text-center text-sm text-gray-500">
      <small>
        Copyright &copy; 2013 &ndash; {new Date().getFullYear()} Carrie Forde.
      </small>
    </p>
  );
}

export default Copyright;
