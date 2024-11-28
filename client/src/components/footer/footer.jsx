import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footerContainer}>
      <div style={styles.logoSection}>
        <h2 style={styles.logo}>EasyRent</h2>
        <p style={styles.tagline}>
          Your trusted platform for renting and buying apartments.
        </p>
      </div>
      <div style={styles.linksSection}>
        <div style={styles.column}>
          <h3 style={styles.columnTitle}>Explore</h3>
          <ul style={styles.linkList}>
            <li><a href="/rent" style={styles.link}>Rent</a></li>
            <li><a href="/buy" style={styles.link}>Buy</a></li>
            <li><a href="/agents" style={styles.link}>Find Agents</a></li>
            <li><a href="/about" style={styles.link}>About Us</a></li>
          </ul>
        </div>
        <div style={styles.column}>
          <h3 style={styles.columnTitle}>Support</h3>
          <ul style={styles.linkList}>
            <li><a href="/faq" style={styles.link}>FAQ</a></li>
            <li><a href="/contact" style={styles.link}>Contact</a></li>
            <li><a href="/privacy-policy" style={styles.link}>Privacy Policy</a></li>
            <li><a href="/terms" style={styles.link}>Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div style={styles.socialSection}>
        <h3 style={styles.columnTitle}>Follow Us</h3>
        <div style={styles.socialIcons}>
          <a href="https://facebook.com" style={styles.socialIcon}>Facebook</a>
          <a href="https://twitter.com" style={styles.socialIcon}>Twitter</a>
          <a href="https://instagram.com" style={styles.socialIcon}>Instagram</a>
          <a href="https://linkedin.com" style={styles.socialIcon}>LinkedIn</a>
        </div>
      </div>
      <div style={styles.footerBottom}>
        <p style={styles.copyRight}>
          &copy; {new Date().getFullYear()} EasyRent. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footerContainer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logoSection: {
    textAlign: "center",
    marginBottom: "1.5rem",
  },
  logo: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  tagline: {
    fontSize: "1rem",
    color: "#bbb",
  },
  linksSection: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    maxWidth: "800px",
    marginBottom: "1.5rem",
  },
  column: {
    textAlign: "center",
  },
  columnTitle: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
  },
  linkList: {
    listStyleType: "none",
    padding: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    marginBottom: "0.5rem",
    display: "block",
  },
  socialSection: {
    textAlign: "center",
    marginBottom: "1.5rem",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
  },
  socialIcon: {
    color: "#fff",
    textDecoration: "none",
  },
  footerBottom: {
    borderTop: "1px solid #444",
    paddingTop: "1rem",
    textAlign: "center",
    width: "100%",
  },
  copyRight: {
    fontSize: "0.9rem",
    color: "#bbb",
  },
};

export default Footer;
