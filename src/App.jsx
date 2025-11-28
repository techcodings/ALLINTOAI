import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard"; // ✅ new

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="industries" element={<Industries />} />
        <Route path="dashboard" element={<Dashboard />} /> {/* ✅ new */}
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
