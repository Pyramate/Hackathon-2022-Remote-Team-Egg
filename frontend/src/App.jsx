import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "../src/styles/App.css";
import FormInscription from "./pages/Form_Inscription";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormInscription />} />
        <Route path="/accueil" element={<Home />} />
        {/* <Route path="/activites" element={<Activites_Globales />} />
        <Route path="/evenements" element={<Evenements_Globales />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
