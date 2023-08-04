import Reeact from 'react'
//import './App.css';
import './index';
import Navbar from "./components/Navbar"
import Button from '@mui/material/Button';
import ADD from "./components/Add"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <h1 className="display">
          <span className="text-prim">Contact </span>
            List
        </h1>
      </div>
      {/* <ADD/> */}
    </div>
  );
}

export default App;
