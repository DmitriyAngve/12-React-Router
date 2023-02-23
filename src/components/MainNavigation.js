import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              // style={({ isActive }) => ({
              //   textAlign: isActive ? "center" : "left",
              // })}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

// 273 LAYOUTS AND NESTED ROUTES
//
// Let's add a Navigation Bar
// STEP 1:
// 1.1 Import "Link" /// "import { Link } from "react-router-dom""
// 1.2 JSX
// 1.3 Add "to="/"" and "to="/products""
//
// GO TO App.js --->>>
// 273 LAYOUTS AND NESTED ROUTES

// 275 WORKING WITH NAVIGATION LINKS (NAVLINKS)
// STEP 1:
// 1.1 Add css styles for links
// 1.2 To support links that should show us whether they led to the currently active page or not, react-router-dom has an alternative to the link component - the "NavLink" component.
// 1.3 "NavLink" - replace "Link".
// "NavLink" has one special behavior. If Ypu add className prop to it, not a regular prop, it's a prop, that takes a function. And function should return the class name, the CSS class name that should be added to the anchor tag. That function also automatically receives an object from which we can de-structure the "isActive" property. Objects with the "isActive" property is provided by react-router-dom and is active as a Boolean, that's true if this link is currently active. We can use "isActive" to conditionally return CSS class "a", if this link is active, and "b", otherwise, or in our case, we wanna add the active class from our imported CSS classes if the link is active and otherwise return undefined (no class if it's not active). /// "className={({ isActive }) =>     isActive ? classes.active : undefined".
// 1.4 Do it for another "NavLink".
// 1.5  "to="/"" - always be active for all routes (all starts with "/"). For solving that react-router-dom gives us another prop: "end". End indicates that this link should only be considered active if the currently active route ends with this "path" after the URL
// 275 WORKING WITH NAVIGATION LINKS (NAVLINKS)
