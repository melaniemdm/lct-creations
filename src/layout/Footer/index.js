import './style.scss';
import logoFooter from '../../assets/logo.png';


function Footer() {
  const textContactFooter=[
    "Vous avez des questions, un projet?",
    <br key="1" />,
   " Contactez nous par email" ,
      <br key="2"/>,
    "Mail : blabla@gmail.com" ]
  return <footer >
    <div className="containerLogoFooter">
      <img src={logoFooter} className="logoFooter" alt="logoFooter"></img>
    </div>
    <div className="containerTxtFooter">
    <div className="titleFooter">Contact</div>
    <div className="textContactFooter"> 
{textContactFooter}
</div></div>
  </footer>;

}

export default Footer;