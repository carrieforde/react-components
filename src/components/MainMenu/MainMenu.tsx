import React, { ReactElement } from "react";
import { MainMenuProps } from "./MainMenu.interface";
import "./MainMenu.css";

function MainMenu({ menuItems }: MainMenuProps): ReactElement {
  return (
    <nav className="main-menu font-light uppercase text-sm md:fixed">
      <ul className="inline-flex">
        {menuItems.map((item, i) => {
          return (
            <li key={i} className="ml-2 first:ml-0 md:ml-0 md:mt-2 first:md-0">
              {item}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default MainMenu;
