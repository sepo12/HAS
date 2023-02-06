import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  // <React.StrictMode>
    // <App />
    
  // </React.StrictMode>
//    <BrowserRouter>
//    <Header/>
//    <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/contact" component={Contact} />
//   </Switch>
// </BrowserRouter>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// ReactDOM.render(
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
    </Router>
  </React.StrictMode>
  // document.getElementById("root")
);
