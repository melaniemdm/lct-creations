
import "./style.scss";

function Navigate(props) {
  return (
    <div className="containerNavigate">
      <a href={"#ancre"+ props.name} className="menu">
        <h2 className="menu-title">{props.titleNav}</h2>
      </a>
      
     

    </div>
  );
}
export default Navigate;
