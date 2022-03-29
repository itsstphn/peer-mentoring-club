import "./Footer.css";

const Footer = () => {
  console.log(window.location.pathname === "/");
  return (
    <div className="footer">
      <div className="copyright">
        <p>
          &copy; 2022 • College of Computer Studies, Central Philippines State
          University.
        </p>
        <p>Brgy. Camingawan, Kabankalan City, Negros Occidental</p>
        <p>
          Made with <span>♡</span> by Stephen Talorong.
        </p>
      </div>
    </div>
  );
};

export default Footer;
