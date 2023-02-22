import React from "react";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Products</Link>
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
// 1.2
// 273 LAYOUTS AND NESTED ROUTES
