import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'; // Import Route
//import Navbar from './components/Navbar';

import About from './components/About'; // Update the import
import Add from './components/Add'; // Update the import
import ContactList from './components/ContactList'

function App() {
  return (
    <Router>
      <div className="App">
      
        <Routes>
          <Route path="/" element={<ContactList/>} /> 
          <Route path="/home" element={<ContactList/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact/add" element={<Add />}/>
        </Routes>
      </div>
    </Router>
  );
}



export default App;







// import Reeact from 'react'
// import './index';
// import Navbar from "./components/Navbar"
// import Button from '@mui/material/Button';
// import ADD from "./components/Add"
// import About from "./components/About"


// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <div className="container">
//         <h1 className="display">
//           <span className="text-prim">Contact </span>
//             List
//         </h1>
//       </div> 
//        <ADD/>
//       <About/>
//     </div>
//   );
// }

// export default App;
