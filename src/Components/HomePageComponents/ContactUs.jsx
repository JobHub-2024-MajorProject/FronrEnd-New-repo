import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();

    const templateParams = {
      from_email: email,
      message: description,
    };

    // 1️⃣ Send the contact form message to the admin
    emailjs
      .send(
        "service_pejj7lc", // Your EmailJS Service ID
        "template_jp62zjs", // Your EmailJS Template ID (Admin Notification)
        templateParams,
        "sVCbEROQoeMSJ_z-U" // Your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS! Message sent to admin:", response.status, response.text);
          
          // 2️⃣ After admin email is sent, send the auto-reply to the user
          emailjs
            .send(
              "service_pejj7lc", // Your EmailJS Service ID (Same as above)
              "template_pnh4vtn", // Your Auto-Reply EmailJS Template ID
              templateParams, // Send the same user email & message
              "sVCbEROQoeMSJ_z-U" // Your EmailJS Public Key
            )
            .then(
              (autoReplyResponse) => {
                console.log("SUCCESS! Auto-reply sent:", autoReplyResponse.status, autoReplyResponse.text);
                setMessage("Message sent successfully! Check your email for confirmation.");
              },
              (autoReplyError) => {
                console.log("FAILED... Auto-reply error:", autoReplyError);
                setMessage("Message sent, but auto-reply failed.");
              }
            );
        },
        (error) => {
          console.log("FAILED... Error sending to admin:", error);
          setMessage("Failed to send message. Try again.");
        }
      );

    setEmail("");
    setDescription("");
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
        {message && <p className="status-message">{message}</p>}
      </div>
    </section>
  );
};

export default ContactUs;
