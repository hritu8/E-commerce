import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Customer/Components/Navigation/Navigation.jsx";
import HomePage from "./Customer/Components/Pages/HomePage/HomePage.jsx";
import Footer from "./Customer/Components/Footer/Footer.jsx";
import Product from "./Customer/Components/Product/Product.jsx";
import ProductDetails from "./Customer/Components/ProductDetails/ProductDetails.jsx";
import Cart from "./Customer/Components/Cart/Cart.jsx";
import Checkout from "./Customer/Components/Checkout/Checkout.jsx";
import Order from "./Customer/Components/Order/Order.jsx";
import OrderDetails from "./Customer/Components/Order/OrderDetails.jsx";
import { Route, Routes } from "react-router-dom";
import CustomerRouters from "./Routers/CustomerRouters.jsx";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRouters />}></Route>
      </Routes>
    </div>
  );
}

export default App;
