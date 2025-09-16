/* File: src/pages/Projects.jsx
   Student Name: Sadaf Darwish
   StudentID: 301493791
   Date: September 14, 2025
   Purpose: Showcase at least three projects with images and short descriptions.
*/
const projects = [
  {
    title: "Restaurant Website (Multi-Page Static Site)",
    course: "COMP213 – Web Design",
    role: "Frontend Student Developer",
    tech: "HTML5, CSS3, Image Maps, Internal Links",
    outcome:
      "Built a multi-page restaurant site (index, menu, details, contact, location) with banner, navbar, background styling, and contact form. Deployed to studentweb.",
  },
  {
    title: "Depreciation Table Console App",
    course: "Programming Fundamentals (C#) – Lab 2",
    role: "C# Student Developer",
    tech: "C#, do-while loop, string interpolation",
    outcome:
      "Generated a 7-year depreciation table showing year, depreciation, accumulated depreciation, and remaining value; clean console formatting and input validation.",
  },
  {
    title: "Agility Principles & UML Diagrams (Visio)",
    course: "COMP120 – Software Engineering Fundamentals",
    role: "Modeling & Documentation",
    tech: "Microsoft Visio, UML (Use Case / Activity / Class)",
    outcome:
      "Created a three-page Visio file applying agility principles and producing clean UML diagrams with proper notation and labeling for submission.",
  },
  {
    title: "Python Data & Logic Exercises",
    course: "Python Lab Assignment 3",
    role: "Python Student Developer",
    tech: "Python, dict/list operations, basic analytics",
    outcome:
      "Implemented data structures and calculations (e.g., NFL data stats), a password-strength checker, and prompt-engineering tasks; organized scripts and doc file.",
  },
  {
    title: "Ticket Sales Calculator",
    course: "COMP100 – Programming Fundamentals",
    role: "C# Student Developer",
    tech: "C#, Console I/O, Currency format",
    outcome:
      "Calculated totals for adult and child tickets using string interpolation and currency formatting; reinforced input → processing → output (IPO) structure.",
  },
]

export default function Projects() {
  return (
    <section className="section">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p, i) => (
          <article className="card" key={i}>
            <div className="card-body">
              <h3 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "0.5rem" }}>
                {p.title}
              </h3>
              {p.course && <p><strong>Course:</strong> {p.course}</p>}
              <p><strong>Role:</strong> {p.role}</p>
              {p.tech && <p><strong>Tech:</strong> {p.tech}</p>}
              <p><strong>Outcome:</strong> {p.outcome}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}