import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router} from 'react-router-dom';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
import Slide from 'react-reveal/Slide';
import '../src/styles/index.scss';
import Header from '../src/layout/Header';
import Footer from '../src/layout/Footer';
import Banner from '../src/layout/Banner';
import Prestations from '../src/layout/Prestations';
import Portfolio from './layout/Portfolio';
import References from './layout/References';
import ScrollToTop from "react-scroll-to-top";

//import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
  
      <Header />
      <Zoom>{/*Using Zoom Effect*/}
      <Banner/>
     </Zoom> 
    
      <Prestations name="NosPrestations" /> 
      <Slide right>
      <Portfolio name="portfolio"/>   </Slide> 
      <Slide left>
      <References name="nosReferences"/>
      </Slide>
      {/* <Routes>
        <Route exact path="/home" element={<Accueil />} />
        <Route path="*" element={<Error404 />} />
      </Routes> */}
      <ScrollToTop color="red"/>
     <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
