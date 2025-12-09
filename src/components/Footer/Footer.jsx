import React from "react";
import { Code2 } from "lucide-react";
import { footerData } from "./Footer.logic";
import { styles } from "./Footer.styles";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.brand.container}>
            <Code2 className={styles.brand.icon} />
            <span className={styles.brand.text}>Portfolio</span>
          </div>

          <div className={styles.copyright}>
            © {footerData.year} · {footerData.description}
          </div>

          <div className={styles.links.container}>
            {footerData.links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className={styles.links.link}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
