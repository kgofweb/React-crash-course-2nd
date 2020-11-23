import React from 'react';
import { Link } from 'react-router-dom';

export default function NavMenu(props) {
   return (
      <div>
         <div className="font-semibold">
            AppName
         </div>
         <ul>
            <li>
               <Link
                  to="/" 
                  className="text-blue-500 py-3 border-b block"
                  onClick={props.closeMenu}
               >
                  Home
               </Link>
            </li>
            <li>
               <Link
                  to="/services" 
                  className="text-blue-500 py-3 border-b block"
                  onClick={props.closeMenu}
               >
                  Services
               </Link>
            </li>
            <li>
               <Link 
                  to="/about" 
                  className="text-blue-500 py-3 border-b block"
                  onClick={props.closeMenu}
               >
                  About
               </Link>
            </li>
         </ul>
      </div>
   )
}