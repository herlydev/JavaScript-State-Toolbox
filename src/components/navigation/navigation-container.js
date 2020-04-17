import React from "react";
import { NavLink } from "react-router-dom";

export default function NavigationContainer() {
  return (
    <div className="navigation-wrapper">
      <div className="navigation-link">
        <NavLink exact to="/">
          Home
        </NavLink>
      </div>
      <div className="navigation-link">
        <NavLink to="/align">Align</NavLink>
      </div>
      <div className="navigation-link">
        <NavLink to="/change-color">Change Color</NavLink>
      </div>
      <div className="navigation-link">
        <NavLink to="/clock">Clock</NavLink>
      </div>
      <div className="navigation-link">
        <NavLink to="/counter">Counter</NavLink>
      </div>
      <div className="navigation-link">
        <NavLink to="/font-sizer">FontSizer</NavLink>
      </div>
      <div className="navigation-link">
        <NavLink to="/show-hide">ShowHide</NavLink>
      </div>
      <div className="navigation-link">
        <NavLink to="/toggle">Toggle</NavLink>
      </div>
    </div>
  );
}
