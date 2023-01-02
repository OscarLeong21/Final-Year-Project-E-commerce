import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "react-scroll-to-top";

// Components
import Navbar from "./components/Nav.js";
import SideDrawer from "./components/SideDrawer.js";
import Backdrop from "./components/Backdrop.js";
import Footer from "./components/Footer.js";
import Search from "./components/Search.js";

// Screens
import HomeScreen from "./screens/HomeScreen.js";

import ProductScreen from "./screens/ProductScreen.js";

import CartScreen from "./screens/CartScreen.js";
import LikedScreen from "./screens/LikedScreen.js";

import AboutUs from "./screens/FooterScreens/AboutUs.js";
import Terms from "./screens/FooterScreens/Terms.js";
import ShippingAndPickUp from "./screens/FooterScreens/ShippingandPicking.js";

import LoginScreen from "./screens/LoginScreen.js";
import RegisterScreen from "./screens/RegisterScreen.js";

import PuzzlePage from "./screens/PuzzlePage.js";
import FigurePage from "./screens/FigurePage.js";
import StitchPage from "./screens/StitchPage.js";
import WinniethepoohPage from "./screens/WinniethepoohPage.js";

import SearchproductScreeen from "./screens/SearchproductScreeen.js";
import ShippingScreen from "./screens/ShippingScreen.js";
import FirmOrderScreen from "./screens/FirmOrderScreen.js";
import PaymentScreen from "./screens/PaymentScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import Myorder from "./screens/Myorder.js";
import Success from "./screens/SuccessPayment.js";

//Admin Page
import AdminPage from "./screens/AdminPage/AdminPage.js";
import ProductList from "./screens/AdminPage/ProductList.js";
import OrderList from "./screens/AdminPage/OrderList.js";
import UserList from "./screens/AdminPage/UserList.js";
import AddProduct from "./screens/AdminPage/AddProduct.js";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <div className="main">
        <ScrollToTop smooth />
        <Navbar click={() => setSideToggle(true)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <main className="app">
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />

            <Route exact path="/product/:id" element={<ProductScreen />} />

            <Route exact path="/puzzle" element={<PuzzlePage />} />
            <Route exact path="/figure" element={<FigurePage />} />
            <Route exact path="/winnie" element={<WinniethepoohPage />} />
            <Route exact path="/stitch" element={<StitchPage />} />

            <Route exact path="/cart" element={<CartScreen />} />
            <Route exact path="/like" element={<LikedScreen />} />

            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/terms" element={<Terms />} />
            <Route
              exact
              path="/shippingandpickup"
              element={<ShippingAndPickUp />}
            />

            <Route exact path="/login" element={<LoginScreen />} />
            <Route exact path="/register" element={<RegisterScreen />} />
            <Route exact path="/profile" element={<ProfileScreen />} />

            <Route exact path="/shipping" element={<ShippingScreen />} />

            <Route exact path="/order/firm" element={<FirmOrderScreen />} />
            <Route exact path="/process/payment" element={<PaymentScreen />} />
            <Route exact path="/orders" element={<Myorder />} />
            <Route exact path="/success" element={<Success />} />

            <Route exact path="/admin/adminpage" element={<AdminPage />} />
            <Route exact path="/admin/productlist" element={<ProductList />} />
            <Route exact path="/admin/orderlist" element={<OrderList />} />
            <Route exact path="/admin/userlist" element={<UserList />} />
            <Route exact path="/admin/addproduct" element={<AddProduct />} />

            <Route exact path="/search" element={<Search />} />
            <Route
              exact
              path="/SearchproductScreeen"
              element={<SearchproductScreeen />}
            />
            <Route
              exact
              path="/SearchproductScreeen/:keyword"
              element={<SearchproductScreeen />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
