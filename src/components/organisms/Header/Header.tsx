import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <h1 className={styles.logo}>React Project</h1>
          <nav className={styles.nav}>
            <a href="#" className={styles.navLink}>
              Home
            </a>
            <a href="#" className={styles.navLink}>
              About
            </a>
            <a href="#" className={styles.navLink}>
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
