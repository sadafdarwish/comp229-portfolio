/* File: src/pages/Services.jsx
   Student Name: Sadaf Darwish
   StudentID: 301493791
   Date: September 14, 2025
   Purpose: List of services offered.
*/
const services = [
  { 
    title: "Web Development (Basics)", 
    desc: "Built multi-page websites using HTML5 and CSS3, applied internal links, image maps, and basic responsive layouts." 
  },
  { 
    title: "Programming Fundamentals", 
    desc: "Learned structured programming in C# and Python, including loops, conditional logic, and input/output formatting." 
  },
  { 
    title: "Database Fundamentals", 
    desc: "Created ER diagrams and wrote SQL queries for assignments, focusing on relational tables and data integrity." 
  },
  { 
    title: "Software Engineering Basics", 
    desc: "Prepared UML diagrams, Software Requirement Specifications (SRS), and practiced teamwork with agile concepts." 
  },
  { 
    title: "Client-Side Scripting (Intro)", 
    desc: "Used JavaScript for simple validation and interaction on forms; practiced working with HTML5 forms and regex." 
  },
]

export default function Services() {
  return (
    <section className="section">
      <h2>Services</h2>
      <div className="grid">
        {services.map((s, i) => (
          <article className="card" key={i}>
            <div className="card-body">
              <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "0.5rem" }}>
                {s.title}
              </h3>
              <p>{s.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
