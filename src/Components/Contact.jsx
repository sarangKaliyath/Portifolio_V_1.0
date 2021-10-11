import React from "react";
import { saveAs } from "file-saver";
import "./Contact.css";
import { Link } from 'react-router-dom';

export const Contact = () => {
  return (
    <div className="contact_container" id="contact_me">
      <div className="reach_out">
        <div className="say_hello">
          <h1 style={{ color: "#1E2022" }}>SAY HELLO</h1>
        </div>
        <div>Feel Free to Reach out</div>
        <div className="temp_header">Email</div>
        <div>sarang1221@gmail.com</div>
        <div className="temp_header">Phone</div>
        <div>+91 7588303199</div>
      </div>
      <div className="contact_input">
        <input
          className="contact_name"
          type="text"
          placeholder="Name"
          required
        />
        <input
          className="contact_email"
          type="email"
          placeholder="Email"
          required
        />
        <textarea
          className="contact_message"
          type="text"
          placeholder="Enter Message"
        />
        <button className="submit_button" disabled>
          Submit
        </button>
      </div>
    </div>
  );
};
