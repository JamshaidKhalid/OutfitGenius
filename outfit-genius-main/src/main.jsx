import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';
import {Home, Auth, Search, About, ContactPage,Product,Recommend} from "./pages";
import NavBar from "./components/common/NavBar";
import Logout from "./components/Auth/Logout";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Footer from "./components/common/Footer";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <Router>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/recommend" element={<Recommend />} />
      </Routes>
    </Router>
    <Footer/>

  </React.StrictMode>
);
