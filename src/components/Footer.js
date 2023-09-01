import "../blocks/Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__author">Developed by Cristopher Campos</div>
      <p className="footer__year">{new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
