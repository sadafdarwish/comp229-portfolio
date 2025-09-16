/* File: src/pages/Contact.jsx
   Student Name: Sadaf Darwish
   StudentID: 301493791
   Date: September 14, 2025
   Purpose: Contact info + interactive form that captures input and redirects to Home.
*/
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Capture to localStorage (demo only)
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]')
    submissions.push({ ...form, submittedAt: new Date().toISOString() })
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions))

    // Redirect to Home
    navigate('/')
  }

  return (
    <section className="section">
      <h2>Contact</h2>

      <div className="contact-grid">
        {/* -- Contact Panel -- */}
        <div className="panel">
          <h3>Get in touch</h3>
          <p><strong>Email:</strong> sdarwis1@my.centennialcollege.ca</p>
          <p><strong>Phone:</strong> (416) 289-5000</p>
          <p><strong>Location:</strong> 941 Progress Ave, Scarborough, ON M1G 3T8</p>
        </div>

        {/* -- Contact Form -- */}
        <form className="panel" onSubmit={handleSubmit}>
          <div className="row">
            <div className="field">
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" name="firstName" value={form.firstName} onChange={handleChange} required />
            </div>
            <div className="field">
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" name="lastName" value={form.lastName} onChange={handleChange} required />
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label htmlFor="phone">Contact Number</label>
              <input id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="(555) 123-4567" />
            </div>
            <div className="field">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
            </div>
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} required />
          </div>

          <button className="btn" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}
