// import { Link, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import MainNavigation from "../components/MainNavigation";

const HomePage = () => {
  // const navigate = useNavigate();

  // function navigateHandler() {
  //   navigate("/products");
  // }

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>.
      </p>
      {/* <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p> */}
    </>
  );
};

export default HomePage;

// 269 DEFINING ROUTES
// STEP 2:
//
// 2.1 That file contains our homepage component /// "function HomePage() {}"
// 2.2 Let's export this function.
// 2.3 Inside of HomePage() add a title /// "return <h1>My Home Page</h1>;" it's a simple dummy component.
// 2.4 Now we wanna load this component, when this route "{path: "/",}," from App.js is active.
// 2.5 To establish this connection => GO TO App.js --->>>
// 269 DEFINING ROUTES

// 272 NAVIGATING BETWEEN PAGES WITH LINKS
// STEP 1:
// 1.1 If I could add some text below the title with links ("<a href="/products">The list of products</a>").
// With this approach, if I clink on the link, I will see that if briefly flashes and turns to a cross and back a refresh icon. Reasin for that is that technically, we're sending a new request to server that's serving this website. Now, that server will serve back that single HTML page that makes up this single page application. Under the hood we load all the JavaScript code again, load the entire React application again and restart the React application. Let's avoid that.
// To avoid this problem, we can import from react-router-dom
// 1.2 "import { Link } from "react-router-dom""
// 1.3 Some changes: "Go to <Link to="/products">The list of products</Link>".
// But there we then still specify the path we wanna go to. "Link" component is it does render an anchor element but it basically listens for clicks on that element, prevents the browser default of sending a HTTP request if the link is clicked, and instead simply takes a look at the route definitions to upgrade the page accordingly and load the appropriate content. Simply it will also change the URL but without sending a new HTTP request.
// 272 NAVIGATING BETWEEN PAGES WITH LINKS

// 276 NAVIGATING PROGRAMMATICALLY
// STEP 1:
// You might want to trigger a navigation action from inside Code, and you can do this by using another special feature provided by react-router-dom.
// 1.1 You can import "useNavigate" hook, and call that in your functional components to get access to navigate function.
// This navigate function can be call to trigger a navigation action, so to switch to a different route from inside your code programatically.
// 1.2 Add "function navigateHandler() {}" and connect that to a button.
// 1.3 Create button with "onClick = {navigateHandler}".
// 1.4 Add "navigate" function inside of "navigateHandler" with "/products"
// Button click only triggered a function, and inside that function. we then had the actual code, the programmatic imperative navigation code for mobing to different page
// 276 NAVIGATING PROGRAMMATICALLY
