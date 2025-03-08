import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:jobhub.ac.in@gmail.com?subject=Contact Form Submission&body=From: ${email}%0D%0A%0D%0AMessage: ${description}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="contact">
      <div className="contact-image">
      <img src="/Contact.png" alt="Contact Us" />
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSendMessage}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter your message"
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
