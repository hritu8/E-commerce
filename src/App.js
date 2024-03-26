import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Customer/Components/Navigation/Navigation.jsx";
import HomePage from "./Customer/Components/Pages/HomePage/HomePage.jsx";
import Footer from "./Customer/Components/Footer/Footer.jsx";
import Product from "./Customer/Components/Product/Product.jsx";
import ProductDetails from "./Customer/Components/ProductDetails/ProductDetails.jsx";

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* {  <HomePage />} */}
        <ProductDetails />
      </div>
      <Footer />
    </div>
  );
}

export default App;
