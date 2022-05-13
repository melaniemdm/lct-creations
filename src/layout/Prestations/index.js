import './style.scss';


function Prestations(props){
   const titlePage = 'Votre projet de A à Z';
   const txtLeft='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque recusandae doloribus nulla dolorum, vitae ducimus tempore quisquam, maxime repellendus ipsam tenetur deleniti, odit quo consequatur deserunt commodi labore culpa repellat.';

    return (
     <div className="containerPrestation reveal">
  <div id="left">
    <h1 id= {"ancre"+ props.name} className="titlePageLeft" >{titlePage}</h1>
    <div className="containerTxtLeft">{txtLeft}</div>
  </div>
  <div id="right">
    <ul>
      <li> 
        <img src="https://img.icons8.com/cute-clipart/64/000000/create-new.png" alt="Ti pidr"/>
        <span>
          <div className="titlePrestation">Création de logo</div>
          <div className="txtPrestation">Satisfaction garantie !
          Recevez plus de 5 propositions de logos, accompagné d’autant de retouches que vous le souhaiterez.</div>
        </span>
      </li>
      <li> 
        <img src="https://img.icons8.com/color/48/000000/vision.png" alt="id visuelle"/>
        <span>
          <div className="titlePrestation">Identité visuelle</div>
          <div className="txtPrestation">Imaginons ensemble l’univers graphique qui va graviter autour de votre logo : carte de visite, papier en tête, plaquette, brochure, … tout y passe !</div>
        </span>
      </li>
      <li> 
        <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-internet-data-science-kiranshastry-lineal-color-kiranshastry.png" alt="create site vitrine"/>
        <span>
          <div className="titlePrestation">Création de votre site vitrine</div>
          <div className="txtPrestation">Rentrez en contact avec vos utilisateurs, création de sites web haut de gamme, pour garantir à l’utilisateur une expérience hors du commun.  </div>
        </span>
      </li>
    </ul>
  </div>

</div>   
          
    );
          
  }
  export default Prestations;