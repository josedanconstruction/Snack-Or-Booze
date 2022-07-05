import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Work
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/permits">Permits</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contractors">Contractors</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
/*
<div>
<NavItem>
<NavLink to="/snacks">Snacks</NavLink>
</NavItem>

<NavItem>
<NavLink to="/drinks">Drinks</NavLink>
</NavItem>
</div>
*/