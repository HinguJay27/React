import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>StudentHub</h2>

      <div className={styles.links}>
        <a href="#home">Home</a>
        <a href="#profile">Profile</a>
      </div>
    </nav>
  );
}

export default Navbar;