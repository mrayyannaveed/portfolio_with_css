"use client"

import Link from "next/link"
import "./navbar.css"
const Navbar = () => {
    return(
        <div style={{marginBottom:50}}>
            <nav id="nav">
                <p id="left-cont">Rayyan Naveed</p>
                <div id="right-cont">
                    <li><Link href="/">Home</Link></li>         
                    <li><Link href="/about">About</Link></li>         
                    <li><Link href="/projects">Projects</Link></li>        
                    <li><Link href="/contacts">Contacts</Link></li>         
                </div>
            </nav>
        </div>
    )
    
}

export default Navbar;