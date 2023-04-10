import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
//   Route,
// } from "react-router-dom";

import HomePage from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetail";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";

// const routeDefinition = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinition);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, // path: ""
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// 269 DEFINING ROUTES

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

//

// 273 LAYOUTS AND NESTED ROUTES
//
// STEP 2:
// Let's add some layout that wraps all these routes, and that simply loads these route components inside of this wrapping layout component
// 2.1 We need add ab extra route to your route definitions and use a "path" of "/".
// 2.2 Add "element" that actually loads the layout wrapper that should be wrapped around the other routes. And we'll do the wrapping part in a second step. For the first step we need add "Root.js".
// GO TO Root.js --->>>
// 2.3 in Root.js rface.
// 2.4 Add key for "element". /// "{ path: "/", element: <RootLayout /> }" with import
// 2.5 Wrap these two routes with "<RootLayout />" me must add another property to this special route. The "children" property, that's takes an array of more routes definitions into this array.
// So the "HomePage" and "ProductsPage" should be rendered.
// 2.6 GO TO Root.js --->>>
// 273 LAYOUTS AND NESTED ROUTES

//

// 277 DEFINING & USING DYNAMIC ROUTES
// CAME FROM Products.js
// STEP 2:
// 2.1 Add new path for ProductsDetail.js. To avoid creating different "paths" for each product, we do this dynamically. React-router-dom supports dynamic path segments or path parameters.
// 2.2 Let's add parameter to the path /// "path: "/products/:productId"". /// ":" - signals to react-router-dom that this part of the dynamic.
// After that GO TO ProductDetail.js
// 277 DEFINING & USING DYNAMIC ROUTES

//

// 280
// "{ index: true..." - turns this route into a so-called index route, which simply means it's the default route that should be displayed if the parent route's path ("path: "/",") is currently active. So if will not be loaded for "products" or "products/productId" But if we're on just "/nothing" in this case, this index route will be activated
// 280
