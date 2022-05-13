import './style.scss';
import logoHeader from '../../assets/logo.png';
import Navigate from '../Navigate';
import {navigate} from '../../datas/datasNavigate';



function Header(){
   
  return (
    <header>
      <div className="containerLogoHeader">
        <img src={logoHeader} className="logoHeader" alt="logoHeader"></img>
      </div>

      <div className="containerNav">{navigate.map(titleNav=><Navigate key={titleNav.id} titleNav={titleNav.titleNavigate} name={titleNav.name}/> )}  </div>

    </header>
  );
        
}
export default Header;