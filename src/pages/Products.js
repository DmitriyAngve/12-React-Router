import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

function ProductsPage() {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {/* <li>
          <Link to="/products/product-1">Product 1</Link>
        </li>
        <li>
          <Link to="/products/product-2">Product 2</Link>
        </li>
        <li>
          <Link to="/products/product-3">Product 3</Link>
        </li> */}
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={prod.id}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;

// 277 DEFINING & USING DYNAMIC ROUTES
// STEP 1:
// 1.1 Add Fragment arounf <h1>...</h1>.
// 1.2 Add a list of Products on the page.
// 1.3 For demonstration i created a ProductDetail.js file.
// 1.4 So we wanna load this page for our different products.
// For this GO TO App.js for adding new "path"
// GO TO --->>> App.js
// 277 DEFINING & USING DYNAMIC ROUTES

//

// 278 ADDING LINKS
// STEP 1:
// 1.1 use "Link" component from r-r-d.
// 1.2 Prop fo navigate to.
// 1.3 Add "const PRODUCTS = []" like an information from backend or database. The array contains of objects, where every has an ID and a title.
// "{PRODUCTS.map((prod) => (<li key={prod.id}><Link to={`/products/${prod.id}`}>{prod.title}</Link></li>))}" NOW "Link" should be constructed dynamically.
// 278 ADDING LINKS

//

// 279 UNDERSTANDING RELATIVE & ABSOLUTE PATHS
// STEP 1:
// 1.1 "<li key={prod.id}><Link to={prod.id} relative="">{prod.title}</Link></li>"
// 1.2 Add "relative" - actives route path or to the currently active path in the URL
// CAME FROM ProductDetail.js
// STEP 3:
// "relative" - removed.
// 279 UNDERSTANDING RELATIVE & ABSOLUTE PATHS
