import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";

const router = createBrowserRouter({
  path: "/",
  element: <HomePage />,
});

function App() {
  // return <RouterProvider router={router} />;
  return <RouterProvider router={router} />;
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
//
// STEP 3:
// 3.1 For establish this connection we ad danother key property: "element: " we define the element, so in the end the JSX code that should be loaded, when this "path: "/"" is active. So for element, you now define some JSX code, that should be rendered to the screen when this route is active. /// "element: <HomePage />"
// I could add any JSX code here in "element".
// Let's stick to thus single route here in this router and let's see how we can now use this router.
// 3.2 To use it, we must store the returned value of the create browser router function, in a variable or constant.
// We need this constant ("router") to then tell React that this router should be rendered to the screen, or that router should be loaded and should render the appropriate pages to the screen. To tell React that this "router" should be used, we need to import another thing from react-router-dom.
// Import "RouterProvider" component. This component is a regular component which we can use like this in our JSX code, and wrap it with other JSX code or add more JSX code to this "App" component. /// "return <RouterProvider />"
// 3.3 This "RouterProvider" Component has a special prop: "router={}" and pass into this prop "createBrowserRouter" stored in "router" /// "router={router}".
// 3.4
// 269 DEFINING ROUTES
