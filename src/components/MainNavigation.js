import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
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
