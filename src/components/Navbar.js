import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import App from '../App';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h2 className="nav-brand">Contact Manager</h2>
        <div>
          <ul className="nav-option">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                <HomeIcon />
                <span className="nav-text">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact/add">
                <AddOutlinedIcon />
                <span className="nav-text">Add</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <InfoIcon />
                <span className="nav-text">About</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
































// import React from "react"
// import HomeIcon from '@mui/icons-material/Home';
// import InfoIcon from '@mui/icons-material/Info';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


// function Navbar() {
//     return(
//         <nav className="navbar">
//             <div className="container">
//                <h2 className="nav-brand">Contact Maneger</h2> 
//                {/* not linking anything to it  */}
//                 <div>
//                     <ul className="nav-option">
//                         <li className="nav-item">
//                             <a className="nav-link" href="/">
//                                 <HomeIcon/>
//                                 <span className="nav-text">Home</span>
//                             </a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="/contact/add">
//                                 <AddOutlinedIcon/>
//                                 <span className="nav-text">Add</span>
//                             </a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="/about">
//                                 <InfoIcon/>
//                                 <span className="nav-text">About</span>
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>

//     )
// }

// export default Navbar


