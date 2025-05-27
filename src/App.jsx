import "./App.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import TestComponet from "./TestComponet";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./NotFoundPage";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/product" element={<ProductPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </Router> 
      
    </>
  );
}

export default App;
