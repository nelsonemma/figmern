import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';


const RoutesList = ( )=>{
  return(
    <Routes>
      <Route path= "/" element = {<Login/>} />
      <Route path= "/home" element = {<Home/>} />

    </Routes>
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <RoutesList/>
  </BrowserRouter>
</React.StrictMode>,
  
);







// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );


