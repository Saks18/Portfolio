import React from "react";
import StarParticles from "./components/StarParticles";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import Projects from "./pages/Projects";
import "./App.css";

function App() {
  return (
    <Router>
      <StarParticles />
      <div style={{zIndex: 1, position: "relative"}}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            { <Route path="/projects" element={<Projects />} /> }
          </Routes>
        </main>
        <Footer />  
      </div>
    </Router>
  );
}

export default App;