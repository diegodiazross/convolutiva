import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigator from "./components/Navbar";
import Home from "./components/Home";
import Servicios from "./components/Servicios";
import QuienesSomos from "./components/QuienesSomos";
import Error from "./Error";
import Contacto from "./components/Contacto";

function App() {
  return (
    <BrowserRouter>
      <Navigator> </Navigator>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quienes-somos" element={<QuienesSomos />} />
        <Route path="servicios" element={<Servicios />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
