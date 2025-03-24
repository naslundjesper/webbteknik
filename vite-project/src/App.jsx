import Index from "./pages/Index.jsx";
import Butik from "./pages/Butik.jsx";
import Tjanster from "./pages/Tjanster.jsx";
import Kontakt from "./pages/Kontakt.jsx";

import "./App.css";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/butik" element={<Butik />} />
                <Route path="/tjanster" element={<Tjanster />} />
                <Route path="/kontakt" element={<Kontakt />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;