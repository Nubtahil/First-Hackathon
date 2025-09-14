import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
 
import {
// getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase"; // make sure firebase.js exports auth
import "../styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // for mobile toggle
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const provider = new GoogleAuthProvider();

  // login with Google
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  // logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">eventa.com</Link>
      </div>

      {/* Menu Links */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/register/sampleEvent">Register</Link></li>
        

        {/* Admin login/logout button */}
        <li>
          {user ? (
            <button className="btn" onClick={handleLogout}>
              Logout ({user.displayName?.split(" ")[0]})
            </button>
          ) : (
            <button className="btn" onClick={handleLogin}>
              Login Admin
            </button>
          )}
        </li>
      </ul>

      {/* Mobile Toggle */}
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
}
