
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
    <h1 className="titleFooter">Contact</h1>
    <div className="textContactFooter"> 
{textContactFooter}
</div>
  </footer>;

}

export default Footer;