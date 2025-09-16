/* File: src/pages/About.jsx
   Student Name: Sadaf Darwish
   StudentID: 301493791
   Date: September 14, 2025
   Purpose: About Me page with profile and resume link.
*/
export default function About() {
  return (
    <section className="section">
      <h2>About Me</h2>
      <div className="about">
        <img src="/SadafDarwishimage.jpg" alt="Sadaf Darwish" />
        <div>
          <p>
            Hello! My name is <strong>Sadaf Darwish</strong>, and I am a full time student in the 
            <strong> Software Engineering Technology – Artificial Intelligence program</strong> at 
            Centennial College. I have a strong interest in technology and I’m motivated to keep 
            learning and improving my skills.
          </p>
          <p>
            In 2024, I completed several projects and assignments that helped me practice the 
            fundamentals of <strong>web development, programming, databases, and software engineering</strong>. 
            From building multi page websites in HTML/CSS, to creating C# console applications, to 
            drawing UML diagrams and designing ER models, each course gave me valuable hands-on experience.
          </p>
          <p>
            My ambition is to continue building a strong foundation in software development while 
            exploring areas like <strong>React, Python, and databases</strong>. I’m excited to keep growing 
            my technical skills, contribute to real world projects, and build a career in the tech industry.
          </p>

          {/* Resume Link with Icon + Text */}
          <p>
            <a 
              href="/SadafDarwishResume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}
            >
              <img 
                src="/Resumelogo.png" 
                alt="Resume Logo" 
                style={{ width: "40px", height: "40px" }}
              />
              <span style={{ fontWeight: "bold", color: "#007bff" }}>
                View My Resume (PDF)
              </span>
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
