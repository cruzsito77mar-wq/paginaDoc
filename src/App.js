import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Páginas usadas en el Navbar
import Home from "./pages/Home";
import About from "./pages/About";
import Servicios from "./pages/Servicios";
import Proceso from "./pages/Proceso";
import FAQ from "./pages/FAQ";
import Analisis from "./pages/Analisis";
import Antiplagio from "./pages/Antiplagio";

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar siempre visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<About />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/proceso" element={<Proceso />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/analisis" element={<Analisis />} />
        <Route path="/antiplagio" element={<Antiplagio />} />
      </Routes>
      <Footer /> {/* Footer siempre visible */}
    </Router>
  );
}

export default App;
