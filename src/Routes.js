import React from "react";
import Homepage from "pages/Homepage";
import Shippingaddress from "pages/Shippingaddress";
import Checkout from "pages/Checkout";
import Orderonline from "pages/Orderonline";
import Contact from "pages/Contact";
import Reservation from "pages/Reservation";
import Aboutus from "pages/Aboutus";
import Menu from "pages/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/orderonline" element={<Orderonline />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shippingaddress" element={<Shippingaddress />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
