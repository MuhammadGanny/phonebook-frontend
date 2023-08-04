
import Navbar from "./Navbar"
import React from "react"

function About(){
    return(
        <>
            <Navbar/> 
            <div className="container">
                <div>
                    <h1 className="display-4">About Contact maneger</h1>
                    <p className="lead">Simple app to manage contacts</p>
                    <p className="text-secondary">Version 1.0.0</p>
                </div>
            </div>       
        </>
    )

}
export default About