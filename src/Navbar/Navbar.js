import { ReactComponent as Logo } from "../assets/Logo.svg";
import styles from './Navbar.module.css'

const NavBar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <Logo />
        <ul>
          <li>
            <a href="/home">Homepage</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/menu">Blog</a>
          </li>
          <li>
            <a href="/reservation">orderonline</a>
          </li>
          <li>
            <a href="/orderonline">reservation</a>
          </li>
          <li>
            <a href="/login">login</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default NavBar;
