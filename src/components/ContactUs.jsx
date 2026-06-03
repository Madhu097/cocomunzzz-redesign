import React, { useState } from 'react';
import CurvedDivider from './CurvedDivider';
import contactGif from '../assets/contact video.gif';
import element4 from '../assets/elements/4.png';
import element6 from '../assets/elements/6.png';
import './Sections.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <span className="section-tagline">Get In Touch</span>
        <h2 className="section-title">Contact Us</h2>
        <p className="section-desc">
          Have a question about our menu, franchising opportunities, or event catering? 
          Drop us a line and let's start a conversation.
        </p>

        <div className="contact-grid">
          {/* Contact Video Left Column */}
          <div className="contact-video-column">
            <h3 className="contact-subtitle">Experience Coco Munzzz</h3>
            <p className="contact-info-text">
              Watch our brand showcase and see how we marry tropical coconut cream with craft coffee.
            </p>
            <div className="contact-video-wrapper hover-lift">
              <img 
                src={contactGif} 
                alt="Experience Coco Munzzz" 
                className="contact-video-player" 
                loading="lazy"
              />
              <div className="contact-video-overlay" />
            </div>
          </div>

          {/* Contact Form Right Column */}
          <div className="contact-form-column">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  rows="5"
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn-pill-group btn-send-message">
                <span className="btn-pill">Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Background hand-sketched coffee bean and coconut illustrations */}
      <img 
        src={element4} 
        alt="Coffee Bean Illustration" 
        className="contact-bg-bean reveal-fade delay-4" 
      />
      <img 
        src={element6} 
        alt="Coconut Illustration" 
        className="contact-bg-coconut reveal-fade delay-5" 
      />

      {/* Curve Transition to the Footer Section (bg-darker: #99432A) */}
      <div className="curved-divider-wrapper">
        <CurvedDivider type="deep-concave" fillColor="#99432A" bgColor="#FBF3E0" />
      </div>
    </section>
  );
}
