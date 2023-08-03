import Reeact from 'react'
//import './App.css';
import './index';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import Button from '@mui/material/Button';




function App() {
  return (
    <div className="App">
      <div className="nav">
      <div className="div-container">
        <div className="link">
          <div className="text-wrapper">Contact Manager</div>
        </div>
        <div className="list">
          <div className="item-link">
            <HomeIcon fontSize="small" />
            <div className="home"> Home</div>
          </div>
          <div className="div">
            <div className="symbol"></div>
            <div className="add"> Add</div>
          </div>
          <div className="item-link-2">
            <div className="symbol"></div>
            <div className="about"> About</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
