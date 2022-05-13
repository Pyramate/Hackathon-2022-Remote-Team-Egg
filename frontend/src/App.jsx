import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "../src/styles/App.css";
import FormInscription from "./pages/Form_Inscription";
import FormActivity from "./components/FormActivity";
import FormEvents from "./components/FormEvents";
import ActivitesGlobales from "./pages/ActivitesGlobales";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormInscription />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/form-activity" element={<FormActivity />} />
        <Route path="/form-events" element={<FormEvents />} />
        <Route path="/activites" element={<ActivitesGlobales />} />
        {/* <Route path="/evenements" element={<Evenements_Globales />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
