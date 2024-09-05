import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import styles from "./Navbar.module.css";

const NavBar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <Logo />
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/menu">Blog</Link>
          </li>
          <li>
            <Link to="/orderonline">Order Online</Link>
          </li>
          <li>
            <Link to="/reservetable">Reservation</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
