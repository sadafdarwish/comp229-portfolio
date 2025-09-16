/* File: src/App.jsx
   Student Name: Sadaf Darwish
   StudentID: 301493791
   Date: September 14, 2025
   Purpose: Top-level layout, routes, and page container.
*/
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <div className="app">
      {/* === Global Navigation === */}
      <Navbar />

      {/* === Main Content === */}
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* === Global Footer === */}
      <Footer />
    </div>
  )
}
