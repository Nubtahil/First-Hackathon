 import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      {/* Left Image Section */}
      <div className="home-image">
        <img
          src="./purple.jpeg" 
          alt="Event"
        />
      </div>

      {/* Right Content Section */}
      <div className="home-content">
        <h1>Welcome to Event Registration System</h1>
        <p>
          Easily register for upcoming workshops, seminars, and events.Events serve as powerful tools for community building, brand awareness, and knowledge sharing

        </p>
        <Link to="/events">
          <button className="view-events-btn">View Events</button>
        </Link>
      </div>
    </div>
  );
}
