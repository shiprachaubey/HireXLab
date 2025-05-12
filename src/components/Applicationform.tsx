import React from 'react';
import '../styles/applicationform.css';

export default function Form() {
  return (
    <div className="form-wrapper">
          <div className="form-container-aligned">
      <h1 className="form-title">Industrial <br /> <span>Training Program</span></h1>
       
      {/* <p className="form-instructions">Kindly fill the form and schedule your interview slot.</p> */}

      </div>
      <div className="form-greeting">Hi &lt;name&gt; &lt;email_id&gt; !</div>

      <form className="form-container">
        <h2 className="section-title">Personal Information</h2>

        <div className="form-grid">
          <div className="form-group">
            <label>First Name*</label>
            <input type="text" placeholder="Enter first name" />
          </div>

          <div className="form-group">
            <label>Last Name*</label>
            <input type="text" placeholder="Enter last name" />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" defaultValue="cshipra@gmail.com" />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter phone number" />
          </div>

          <div className="form-group full-width">
            <label>Upload Resume</label>
            <div className="upload-box">
              <span>➕ Upload Resume</span>
            </div>
          </div>
        </div>
      </form>

    </div>
  );
}


