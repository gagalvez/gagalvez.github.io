import React from "react";
import { Menu, X, Code } from "lucide-react";
import { useNavbarLogic } from "./Navbar.logic";
import { styles } from "./Navbar.styles";

const Navbar = () => {
  const { isOpen, setIsOpen, scrolled, displayText, showCursor, navItems } = useNavbarLogic();

  return (
    <nav
      className={`${styles.nav.base} ${
        scrolled ? styles.nav.scrolled : styles.nav.transparent
      }`}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <a href="#home" className={styles.logo.link}>
            <Code className={styles.logo.icon} />
            <span className={styles.logo.text.base}>
              <span className={styles.logo.text.firstName}>
                {displayText.substring(0, 7)}
              </span>
              <span className={styles.logo.text.lastName}>
                {displayText.substring(7)}
              </span>
              {showCursor && <span className={styles.logo.text.cursor}>|</span>}
            </span>
          </a>

          <div className={styles.menu.desktop}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={styles.menu.link.desktop}
              >
                {item.name}
                <span className={styles.menu.link.underline}></span>
              </a>
            ))}
          </div>

          <button
            className={styles.toggleButton}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={styles.icon} />
            ) : (
              <Menu className={styles.icon} />
            )}
          </button>
        </div>

        {isOpen && (
          <div className={styles.menu.mobile}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={styles.menu.link.mobile}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
                <span className={styles.menu.link.underline}></span>
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
