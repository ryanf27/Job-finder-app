import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <h1 className="logo">
        <strong>Job</strong>Finder
      </h1>

      <ul className="nav">
        <li>jobs</li>
        <li>Companies</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Login</li>
        <li>Register</li>
      </ul>
    </div>
  );
};

export default Navbar;
