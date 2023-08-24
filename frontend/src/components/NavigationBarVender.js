import { Link } from "react-router-dom"
export default function NavigationBarVendor()
{
    return(
      <div>
            <div>
            <nav className='navbar navbar-expand-sm bg-secondary mb-3'>
               
               <div className='container-fluid'  >
                   <ul className="navbar-nav " >
                   <Link to="/home" className='nav-link px-2'>
                       <b className='text-warning'>Electro-Mart</b>
                       </Link>
                       <li className="nav-item ">
                           <Link to="/home" className='nav-link px-3 text-light' >Home</Link>
                       </li>
                   <li className='nav-item'>
                       <Link to="addproduct" className='nav-link px-3 text-light'>Add Product</Link>
                   </li> 
                   <li className='nav-item'>
                       <Link to="deleteproduct" className='nav-link px-3 text-light'>Delete Product</Link>
                   </li>
                   <li className='nav-item'>
                       <Link to="updateproduct" className='nav-link px-3 text-light'>Update Product</Link>
                   </li>
                   <li className='nav-item'>
                       <Link to="viewproduct" className='nav-link px-3 text-light'>View Product</Link>
                   </li>
                   <li className='nav-item'>
                       <Link to="/viewwallet" className='nav-link px-3 text-light'>View Wallet</Link>
                   </li>
                   <li className='nav-item'>
                       <Link to="/logout" className='nav-link px-3 text-light'>Logout</Link>
                   </li>
                   </ul>
               </div>
           </nav>
              
            </div>
        </div>
        
    )
}