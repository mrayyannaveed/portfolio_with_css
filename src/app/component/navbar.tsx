"use client"

import Link from "next/link"
const Navbar = () => {
    function display(){
        let project = document.getElementById("project")
        if(project){
            project.classList.toggle("hidden")
        }
    }
    return(
        <div>
            <nav className="flex  justify-between bg-black">
                <p className="text-xl bg-green-20 w-1/4 p-1 text-center text-white">Rayyan Naveed</p>
                <div className="w-1/3 bg-green-20 text-lg  justify-center text-white flex gap-5">
                    <li className="list-none hover:bg-white hover:text-blue-500 p-1 rounded-md"><Link href="/">Home</Link></li>         
                    <li className="list-none hover:bg-white hover:text-blue-500 p-1 rounded-md"><Link href="/about">About</Link></li>         
                    <li className="list-none hover:bg-white hover:text-blue-500 p-1 rounded-md"><Link href="/projects" onClick={display}>Projects</Link></li>        
                    <li className="list-none hover:bg-white hover:text-blue-500 p-1 rounded-md"><Link href="/contacts">Contacts</Link></li>         
                </div>
            </nav>
        </div>
    )
    
}

export default Navbar;