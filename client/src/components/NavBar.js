import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "#F3EE18",
  textDecoration: "none",
  color: "#969696",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "white",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/menus"
        exact
        style={linkStyles}
        activeStyle={{
          background: "white",
        }}
      >
        Menus
      </NavLink>
      
      <NavLink
        to="/reviews"
        exact
        style={linkStyles}
        activeStyle={{
          background: "white",
        }}
      >
        Reviews
      </NavLink>

      <NavLink
        to="/restaurant"
        exact
        style={linkStyles}
        activeStyle={{
          background: "white" ,
        }}
      >
        Restaurant
      </NavLink>
    </div>
  );
}

export default NavBar;