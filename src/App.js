import { createBrowserRouter } from "react-router-dom";

createBrowserRouter(
  {
    path: "/",
  },
  {}
);

function App() {
  return <div></div>;
}

export default App;

// 269 DEFINING ROUTES
//
// Start from here, in App.js - in my root Component.
// STEP 1:
// 1.1 First of all: "import { createBrowserRouter } from "react-router-dom"", function which allows us to define our routes that we wanna support in this application
// 1.2 Call this function outside from "App" and to this function we pass an array of route definition objects. I proved a couple of objects, where every object represents ony route.
// 1.3 And we add some properties to define the route characteristics ("path" for which this route should be activated). So here we define our route objects, and these route objects take a couple of properties with which we configure the routes.
// There are one key, which you will almost always add, is the "path" property. This "path" define for which this route should be active
// https://example/products /// https: - protocol; example.com - domain name; /products - path
// 1.4 "path: "/"" - path is /"nothing" - if we see this, then this route should be activated.
// 1.5 Now is the second peace of information we typically want to add to our route objects is which Component should be loaded, when that route is active. => We might wnat to add a new component. First of all add new folder "pages" to hold the components that will be loaded as pages by the router.
// 1.6 Create Hpme.js file in that folder (pages)
// GO TO Home.js --->>>
// 269 DEFINING ROUTES
