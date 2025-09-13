import React, { useState } from 'react';
// Make sure to import the CSS file you created in Step 1
// For example: import './ContactPage.css';

export function ContactPage() {
  // Use a single state object for form data for better scalability
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // State to handle the submission process (loading and success)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // A single handler for all input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    // --- Simulate an API call ---
    // In a real application, you would send formData to your backend here.
    console.log("Form Submitted:", formData);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500); // Simulate a 1.5-second network delay
  };

  // The "Thank You" view, now with a fade-in animation
  if (submitted) {
    return (
      <div className="thank-you-container">
        <div className="card shadow-lg border-0">
          <div className="card-body p-5 text-center">
            <i className="bi bi-check-circle-fill display-1 text-success mb-3"></i>
            <h1 className="card-title mt-3">Thank You!</h1>
            <p className="lead text-muted">Your message has been received. We will get back to you shortly.</p>
          </div>
        </div>
      </div>
    );
  }

  // The main contact page view
  return (
    <div className="contact-page-container">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bolder">Get in Touch</h1>
        <p className="lead text-secondary">
          We'd love to hear from you. Reach out with any questions or partnership inquiries.
        </p>
      </div>
      
      <div className="card shadow-lg border-0">
        <div className="card-body p-lg-5">
          <div className="row g-5">
            
            {/* Left Column: The Contact Form */}
            <div className="col-lg-7">
              <h3 className="fw-light mb-4">Send us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" name="message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg px-5" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
            
            {/* Right Column: Business Information with enhanced styling */}
            <div className="col-lg-5">
              <div className="bg-light p-4 rounded-3 h-100 info-card">
                <h3 className="fw-light mb-4">Our Information</h3>
                <div className="d-flex align-items-start mb-4">
                  <i className="bi bi-geo-alt-fill fs-4 me-4 text-primary"></i>
                  <div>
                    <strong>Address:</strong><br />
                    FarmLink Headquarters<br />
                    123 Agri-Tech Park, Cyberabad<br />
                    Hyderabad, Telangana 500081
                  </div>
                </div>
                <div className="d-flex align-items-start mb-4">
                  <i className="bi bi-envelope-fill fs-4 me-4 text-primary"></i>
                  <div>
                    <strong>Email:</strong><br />
                    <a href="mailto:contact@farmlink-example.com" className="text-decoration-none">contact@farmlink-example.com</a>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-4">
                  <i className="bi bi-clock-fill fs-4 me-4 text-primary"></i>
                  <div>
                    <strong>Business Hours:</strong><br />
                    Monday - Friday: 9 AM - 6 PM
                  </div>
                </div>
                
                <hr className="my-4" />
                
                <h4 className="fw-light mt-4 mb-3">Follow Us</h4>
                <div>
                  <a href="#" className="text-secondary fs-3 me-3 social-icon"><i className="bi bi-twitter-x"></i></a>
                  <a href="#" className="text-secondary fs-3 me-3 social-icon"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="text-secondary fs-3 social-icon"><i className="bi bi-instagram"></i></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}