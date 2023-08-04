import React from "react"
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


function Navbar() {
    return(
        <nav className="navbar">
            <div className="container">
               <h2 className="nav-brand">Contact Maneger</h2> 
               {/* not linking anything to it  */}
                <div>
                    <ul className="nav-option">
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                <HomeIcon/>
                                <span className="nav-text">Home</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact/add">
                                <AddOutlinedIcon/>
                                <span className="nav-text">Add</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">
                                <InfoIcon/>
                                <span className="nav-text">About</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar


{/* <div className="nav">
        <div className="div-container">
          <div className="link">
            <div className="text-wrapper">Contact Manager</div>
          </div>
          <ul className="list">
            <div className="item-link">
              {/* <AccessTimeFilledIcon/> */}
        //       <HomeIcon fontSize="small" background-color ="white" />
        //       <li className="home"> Home</li>
        //     </div>
        //     <div className="div">
        //        <AddOutlinedIcon/>
        //       <li className="add"> Add</li>
        //     </div>
        //     <div className="item-link-2">
        //       <InfoIcon />
        //       <li className="about"> About</li>
        //     </div>
        //   </ul>
        // </div>
    //  </div> */}