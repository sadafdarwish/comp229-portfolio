/* File: src/components/Footer.jsx
   Student Name: Sadaf Darwish
   StudentID: 301493791
   Date: September 14, 2025
   Purpose: Footer with copyright.
*/
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Sadaf Darwish — All rights reserved.</p>
        <p>
          Contact: <a href="mailto:sdarwis1@my.centennialcollege.ca">sdarwis1@my.centennialcollege.ca</a> ·
          LinkedIn: <a href="https://www.linkedin.com/in/sadaf-darwish-b13aa3262/details/certifications//" target="_blank" rel="noreferrer">Sadaf Profile</a>
        </p>
      </div>
    </footer>
  )
}
