import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router} from 'react-router-dom';
import '../src/styles/index.scss';
import Header from '../src/layout/Header';
import Footer from '../src/layout/Footer';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
      <Header />
    
      {/* <Routes>
        <Route exact path="/home" element={<Accueil />} />
        <Route path="*" element={<Error404 />} />
      </Routes> */}
     <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
