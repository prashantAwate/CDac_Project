import React from "react"
import { Link } from "react-router-dom"
export default function CustomerHomeComp()
{
    return(
        <div className="">
            <h1>Welcome To Electro-Mart Customer Home</h1>

            <nav className='navbar navbar-expand-sm bg-secondary mb-3'>
        <div className='container-fluid right'  >
         <ul className="navbar-nav ms-auto" >
         <li className="nav-item">
             <Link to="/viewproduct" className='nav-link px-3 text-light'>View Products</Link>
          </li>
          <li className='nav-item'>
            <Link to="/logout" className='nav-link px-3 text-light'>Logout</Link>
          </li>
         </ul>
        </div>
      </nav>

        </div>
        
        
    )
}