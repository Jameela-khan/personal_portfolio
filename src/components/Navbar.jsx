import logo from "../assets/logo.jpg";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <a href="#top">
        <img src={logo} alt="Logo" className="logo" />
      </a>

      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}

export default Navbar;
