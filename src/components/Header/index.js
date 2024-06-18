import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">{`<Hello Programação />`}</div>
      <nav className="header-nav">
        <Link className="header-link" to={"/"}>
          <u>Trilha</u>
        </Link>
        <Link className="header-link" to={"/sobre"}>
          <u>Sobre o projeto</u>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
