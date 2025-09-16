/* File: src/components/Logo.jsx
   Student Name: Sadaf Darwish
   StudentID: 301493791
   Date: September 14, 2025
   Purpose: Custom logo component (simple SVG with initials).
*/
export default function Logo() {
  return (
    <span className="logo" aria-hidden="true" title="SD">
      <svg width="28" height="28" viewBox="0 0 100 100" role="img">
        <polygon points="50,5 93,27 93,73 50,95 7,73 7,27" />
        <text x="50%" y="56%" textAnchor="middle" fontSize="38" fontWeight="700" dy=".1em">SD</text>
      </svg>
    </span>
  )
}
