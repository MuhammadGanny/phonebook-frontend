
import Navbar from "./Navbar"
import React from "react"
import App from '../App';

function Add(){
    return(
        <>
            <Navbar/>
            <div className="container">
                <div className="card">
                    <div className="card-header">Add Contact</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input name="name" placeholder="Enter Name" type="text" className="form-control form-control-lg"></input>
                            </div>
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input name="email" placeholder="Enter Email" type="email" className="form-control form-control-lg"></input>
                            </div>
                            <div className="form-group">
                                <label for="phone">Phone</label>
                                <input name="phone" placeholder="Enter Phone" type="text" className="form-control form-control-lg"></input>
                            </div>
                            <input type="submit" className="btn btn-block btn-primary" value="Add"></input>
                        </form>
                    </div>
                </div>
            
            </div>
        </>    
    )

}
export default Add