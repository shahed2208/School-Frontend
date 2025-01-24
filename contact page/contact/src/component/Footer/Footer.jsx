import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
       <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <img alt="Little Learners Logo" />
            <p>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
          </div>
          <div className="contact-info">
            <p>✉ hello@littlelearners.com</p>
            <p>✆ +91 91813 23 2309</p>
            <p>⌖ Somewhere in the World</p>
          </div>
        </div>
        <div className="footer-middle">
          <div className="footer-column">
            <h3>Information</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Our Testimonials</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>About Us</h3>
            <ul>
              <li><a href="#">Our Mission</a></li>
              <li><a href="#">Our Vision</a></li>
              <li><a href="#">Awards and Recognitions</a></li>
              <li><a href="#">History</a></li>
              <li><a href="#">Teachers</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul>
              <li><a href="#">Special Features</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Map & Direction</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
            <div className="footer-bottom-content">
                <div className="footer-bottom-left">
                    <a href="#">Terms of Service</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookie Policy</a>
                </div>
                <div className="footer-bottom-right">
                    <a href="#" className="social-icon"></a> {/* Facebook  */}
                    <a href="#" className="social-icon"></a> {/* Twitter  */}
                    <a href="#" className="social-icon"></a> {/* LinkedIn  */}
                </div>
            </div>
          <p>&copy; {new Date().getFullYear()} Little Learners Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
