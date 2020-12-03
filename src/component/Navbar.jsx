import React from "react";
import {Link} from "react-router-dom";
import "./style/navbar.css";


const Navbar = ()=>{
    return(
        <>
            <nav className="navbar">
                <ul>
                    <li><Link activeclassName="link" to="/" className="nav">Home</Link></li>
                    <li><Link activeclassName="link" to="/exercise" className="nav">Add Exercise</Link></li>
                    <li><Link activeclassName="link" to="/list" className="nav">List Exercise</Link></li>
                    <li><Link activeclassName="link" to="/about" className="nav">About us</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;