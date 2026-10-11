import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./components/Layout";
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import News from "./pages/News";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
        <Route path="/testimonials" element={<Layout><Testimonials /></Layout>} />
        <Route path="/news" element={<Layout><News /></Layout>} />
        <Route path="/careers" element={<Layout><Careers /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;