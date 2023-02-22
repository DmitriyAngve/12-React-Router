import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <h1>Root Layout</h1>
      <Outlet />
    </>
  );
};

export default RootLayout;

// 273 LAYOUTS AND NESTED ROUTES
//
// STEP 3:
// 3.1 Import another special component from react-router-dom. /// "import { Outlet } from "react-router-dom""
// 3.2 Add empty Fragment and "Outlet". - this is the marker, the place, where the child routes should be rendered to. In my case, that would be the homepage amd the productspage.
// 3.3
// 273 LAYOUTS AND NESTED ROUTES
