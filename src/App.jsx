import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./GlobalComponents/Footer/Footer";
import Navbar from "./GlobalComponents/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Careers from "./pages/Careers/Careers";
import Products from "./pages/Products/Products";
import { useState } from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Product1 from "./pages/Products/Product1";
import ScrollToHashElement from "./utils/ScrollToHashElement";
import { ToastContainer } from "react-toastify";
import NotFound from "./pages/NotFound/NotFound";
import Product2 from "./pages/Products/Product2";
import Product3 from "./pages/Products/Product3";
import Product4 from "./pages/Products/Product4";
import Product5 from "./pages/Products/Product5";
import ContactForm from "./pages/Contact/contact";
import DataMap from "./pages/DataMap/DataMap";
import About from "./pages/About/About";

function App() {
  const [toggle, setToggle] = useState(false);
  const [userExists, setUserExists] = useState(null);
  return (
    <Router>
      <Navbar userExists={userExists} />
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product1" element={<Product1 />} />
        <Route path="/product2" element={<Product2 />} />
        <Route path="/product3" element={<Product3 />} />
        <Route path="/product4" element={<Product4 />} />
        <Route path="/product5" element={<Product5 />} />
        <Route path="/datamap" element={<DataMap />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route
          path="/login"
          element={<Login setUserExists={setUserExists} />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard setUserExists={setUserExists} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Router>
  );
}

export default App;
