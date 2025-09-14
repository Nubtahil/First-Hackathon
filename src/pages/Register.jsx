 import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Register.css";

export default function Register() {
  const { eventId } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "Registrations"), {
        eventId: eventId,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        
      });

      setLoading(false);
      setFormData({ name: "", email: "", phone: "" }); // reset form
      toast.success("🎉 Registered Successfully!", {
        position: "top-center",
        autoClose: 2000,
      });
    } catch (error) {
      console.error("Error registering user: ", error);
      setLoading(false);
      toast.error("❌ Registration Failed. Try again.", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Register for Event</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
