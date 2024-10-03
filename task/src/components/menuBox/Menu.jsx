import React from "react";

import "../../styles/index.css";
import { Link, NavLink } from "react-router-dom";
export default function Menu() {
  return (
    <div className="menu_links">
      <ul>
        <li>
          <NavLink to={"form"}>Form</NavLink>
        </li>
        <li>
          <NavLink to={"email"}>Email</NavLink>
        </li>
        <li>
          <NavLink to={"review"}>Review</NavLink>
          
        </li>
      </ul>
    </div>
  );
}
