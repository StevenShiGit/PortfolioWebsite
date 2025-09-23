import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-left">
            <p className="contact-email">
              
              <a href="mailto:s67shi@uwaterloo.ca" className="email-link">
                s67shi@uwaterloo.ca
              </a>
            </p>
          </div>
          <div className="contact-right">
            <a 
              href="https://github.com/stevenshigit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <img src="/logos/github3.webp" alt="GitHub" className="social-logo" />
            </a>
            <a 
              href="www.linkedin.com/in/steven-shi-ba64aa30b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <img src="/logos/linkedin.webp" alt="LinkedIn" className="social-logo" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
