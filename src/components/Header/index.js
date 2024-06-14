import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">{`<Hello Programação />`}</div>
      <nav className="header-nav">
        <Link className="header-link" to={"/"}>
          Trilha
        </Link>
        <Link className="header-link" to={"/sobre"}>
          Sobre o projeto
        </Link>
      </nav>
    </div>
  );
};

export default Header;
