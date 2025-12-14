import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">© {currentYear} React Project. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
