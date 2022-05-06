import { NavLink } from "react-router-dom";

function Header() {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "red" : "#cccccc",
      texDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <nav>
      <h1>Mini Project - React Router V6</h1>
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/about">
        About
      </NavLink>
      <NavLink style={navLinkStyles} to="/products">
        Photos
      </NavLink>
    </nav>
  );
}

export default Header;
