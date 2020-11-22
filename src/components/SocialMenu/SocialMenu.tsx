import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactElement } from "react";
import { SocialMenuProps } from "./SocialMenu.interface";

function SocialMenu({ menuItems }: SocialMenuProps): ReactElement {
  return (
    <nav className="social-menu text-center">
      <ul className="inline-flex">
        {menuItems.map((item) => (
          <li key={item.name} className="ml-2 first:ml-0">
            <a href={item.link} title={item.name} className="text-purple-700">
              <FontAwesomeIcon icon={item.icon} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SocialMenu;
