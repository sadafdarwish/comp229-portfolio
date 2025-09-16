/* File: src/components/Navbar.jsx
   Student Name: Sadaf Darwish
   StudentID: 301493791
   Date: September 14, 2025
   Purpose: Primary navigation bar with links to all pages.
*/
// File: src/components/Navbar.jsx
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo + Site Title */}
      <Link to="/" className="logo">
        <img src="/Sadaflogo.png" alt="Sadaf Darwish Logo" className="logo-img" />
        <span className="logo-text">Sadaf Darwish</span>
      </Link>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><NavLink to="/" end className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink></li>
        <li><NavLink to="/about" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink></li>
        <li><NavLink to="/projects" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink></li>
        <li><NavLink to="/services" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Services</NavLink></li>
        <li><NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

