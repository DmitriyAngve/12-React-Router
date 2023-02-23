import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();

  return <h1>Product Details!</h1>;
}

export default ProductDetailPage;

// 277 DEFINING & USING DYNAMIC ROUTES
// CAME FROM App.js

// STEP 2:
// Here we wanna know for which exact product this page was loaded. We wanna know which product Id was used
// 2.1 Let's import "import { useParams } from "react-router-dom"". That tool which we get from r-r-d. This hook give us a params object, if we call it.
// 2.2 Call "useParams()". /// "const params = useParams();"
// This "params" is a simple JS object, which contains every dynamic path segment we define in our route definition as a property.
// In this case I got a property called "productId" on this params object
// 277 DEFINING & USING DYNAMIC ROUTES
