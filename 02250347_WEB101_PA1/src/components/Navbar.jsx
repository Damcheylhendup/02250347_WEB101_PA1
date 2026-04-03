function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Instagram</h1>

      <input type="text" placeholder="Search" className="search-bar" />

      <div className="nav-icons">
        <span className="nav-icon">🏠</span>
        <span className="nav-icon">💬</span>
        <span className="nav-icon">➕</span>
        <span className="nav-icon">❤️</span>
        <span className="nav-icon">👤</span>
      </div>
    </nav>
  );
}

export default Navbar;