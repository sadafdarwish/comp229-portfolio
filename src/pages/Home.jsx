/* File: src/pages/Home.jsx
   Student Name: Sadaf Darwish
   StudentID: 301493791
   Date: September 14, 2025
   Purpose: Home page with welcome and mission.
*/
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="section">
      {/* -- Hero -- */}
      <div className="hero">
        <h1>Welcome, I’m <span className="accent">Sadaf Darwish</span></h1>
        <p className="lead">
          A full time student in the <strong>Software Engineering Technology – Artificial Intelligence</strong> program at 
          Centennial College, passionate about learning and growing in the technology field.
        </p>
        <p className="mission">
          <strong>Mission:</strong> To build a strong foundation in software development by exploring modern tools like 
          React, Node.js, and cloud deployment — with the ambition to contribute to innovative projects and make 
          a long-term impact in the tech industry.
        </p>
        <div className="cta-row">
          <Link to="/about" className="btn">About Me</Link>
          <Link to="/projects" className="btn-outline">See Projects</Link>
        </div>
      </div>
    </section>
  )
}