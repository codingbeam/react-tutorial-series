import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <NavLink to="/">
            <li>Products</li>
          </NavLink>
          <NavLink to="/home">
            <li>Home</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
