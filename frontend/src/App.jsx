import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/styles/App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Form_Inscription />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/activites" element={<Activites_Globales />} />
        <Route path="/evenements" element={<Evenements_Globales />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
