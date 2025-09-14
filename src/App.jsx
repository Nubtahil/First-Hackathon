 import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Pages
import HomePage from "./pages/HomePage";
import EventList from "./pages/EventsList";
  import Register from "./pages/Register";
 

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventList />} />
      <Route path="/register/:eventId" element={<Register />} />
         
      </Routes>
      <Footer></Footer>
    </Router>
  );
}
