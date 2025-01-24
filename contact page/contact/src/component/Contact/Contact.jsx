import React from 'react'
import './Contact.css'


const Contact = () => {

  return (
    <div className='all'>
    
    <section className="student-info-section">
      <div className="student-info-content">
        <button className="contact-form-button">Contact Form</button>
        <h2>Student Information</h2>
        <p>If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs</p>
      </div>
    </section>
    <section className="registration-form-section">
      <div className="social-icons">
        <a href="#" className="social-icon"></a> {/* Facebook */}
        <a href="#" className="social-icon"></a> {/* Twitter */}
        <a href="#" className="social-icon"></a> {/* LinkedIn */}
      </div>
      <div className="registration-form-container">
        <form className="registration-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="parentName">Parent Name</label>
              <input type="text" id="parentName" placeholder="Enter Parent Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter Email Address" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="Enter Phone Number" />
            </div>
            <div className="form-group">
              <label htmlFor="studentName">Student Name</label>
              <input type="text" id="studentName" placeholder="Enter Student Name" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="studentAge">Student Age</label>
              <input type="number" id="studentAge" placeholder="Enter Student Age" min="0" />
            </div>
            <div className="form-group">
              <label htmlFor="program">Program of Interest</label>
              <select id="program">
                <option value="">Select Program</option>
                <option value="program1">Program 1</option>
                <option value="program2">Program 2</option>
                
              </select>
            </div>
          </div>
          <div className="form-group full-width">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Enter your Message"></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </section>
   

    </div>
  )
}

export default Contact
