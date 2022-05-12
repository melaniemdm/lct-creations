import references from '../../assets/ref.png'
import './style.scss';

function References() {
    return (
      <div className="containerReferences">
          <div className="containerReferencesTitle">Ils nous ont fait confiance</div>
         <img src={references} className="references" alt="references"></img>
      </div>
    );
  }
  export default References;
  