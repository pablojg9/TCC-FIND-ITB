import { BiSearch } from 'react-icons/bi';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { BiInfoCircle } from 'react-icons/bi';

import 'assets/css/navbar.css';

const Navbar = () => {
   return (
      <header className="header">
         <a id="logo" className="title" href="tcc_index.html">FIND</a>
         <nav>
            <ul className="menu">
               <li className="li1"><a className="a" href="##"><BiSearch /></a></li>
               <li className="li1"><a className="a" href="##"><IoPersonCircleOutline /></a></li>
               <li className="li1"><a className="a" href="##"><BiInfoCircle /></a></li>
            </ul>
         </nav>
      </header>
   );
}

export default Navbar;