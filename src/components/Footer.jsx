 import React from "react";
import "../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
 
        <div className="footer-col">
          <h4>About Us</h4>
          <p>
            eventa.com is a simple event registration platform
            helping students and teachers connect through workshops 🚀
          </p>
        </div>

        
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/register/sample">Register</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
 
        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/guidelines">Guidelines</a></li>
            <li><a href="/support">Support</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
    

 <div className="footer-col">
          <h4>Organizers</h4>
          <ul>
            <li><a href="/faq">qa </a></li>
            <li><a href="/guidelines">Guidelines</a></li>
            <li><a href="/support">Support</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

    
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} eventa.com | All Rights Reserved</p>
      </div>
    </footer>
  );
}