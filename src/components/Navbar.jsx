import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <h2>KRISH</h2>
      </div>

      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </div>

      <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
        <ul>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#mission" onClick={closeMenu}>Mission</a></li>
          <li><a href="#commitments" onClick={closeMenu}>Commitments</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;