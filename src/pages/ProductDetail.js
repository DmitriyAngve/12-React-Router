import { useParams, Link } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}

export default ProductDetailPage;

// 277 DEFINING & USING DYNAMIC ROUTES
// CAME FROM App.js

// STEP 2:
// Here we wanna know for which exact product this page was loaded. We wanna know which product Id was used
// 2.1 Let's import "import { useParams } from "react-router-dom"". That tool which we get from r-r-d. This hook give us a params object, if we call it.
// 2.2 Call "useParams()". /// "const params = useParams();"
// This "params" is a simple JS object, which contains every dynamic path segment we define in our route definition as a property.
// In this case I got a property called "productId" on this params object, because in my route definition I chose "productId" (from App.js) as an identifier for this placeholder, for dynaic path segment
// Add in JSX /// "<p>{params.productId}</p>"
// 277 DEFINING & USING DYNAMIC ROUTES

//

// 279 UNDERSTANDING RELATIVE & ABSOLUTE PATHS
// STEP 2:
// 2.1 Adding "<p><Link to="..">Back</Link></p>" - this is a special identifier, means "go up one level" with this I can remove "relative" prop from Product.js
// GO TO Product.js
// CAME FROM Product.js
// STEP 4:
// 4.1 Adding "relative="path">" - if we set this to "path", r-r-d will instead take a look at the currently active "path" and simply remove one segment from that "path" (with this prop just the ID of that product was removed from the currently active path)
// 279 UNDERSTANDING RELATIVE & ABSOLUTE PATHS
