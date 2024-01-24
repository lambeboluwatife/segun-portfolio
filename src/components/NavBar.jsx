const NavBar = ({ backgroundColor }) => {
  const navbarStyle = {
    backgroundColor: backgroundColor,
  };
  return (
    <div className="nav" style={navbarStyle}>
      <div className="container">
        <header>
          <h3 className="logo">
            <span></span>
            Sobodu Segun
          </h3>
          <nav>
            <ul className="nav-links">
              <li className="nav-item">
                <a href="/">Home</a>
              </li>
              <li className="nav-item">
                <a href="/portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default NavBar;
