import { Link } from "react-router-dom";
import './style.scss';

function Navigate() {
  return (
    <div className="containerNavigate">
      <nav className="navigate">
        <Link to="/home " className="accueil">
          Accueil
        </Link>
        <Link to="/propos" className="apropos">
          Présentation
        </Link>
        <Link to="/portfolio" className="portfolio">
          Portfoliot
        </Link>
        <Link to="/references" className="references">
          Ils nous ont fait confiance !
        </Link>
      </nav>
    </div>
  );
}
export default Navigate;
