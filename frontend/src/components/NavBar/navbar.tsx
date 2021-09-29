import { BiSearch } from 'react-icons/bi';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { BiInfoCircle } from 'react-icons/bi';

import 'assets/css/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
   return (
      <>
         <header className="header">
            <Link to="/" style={{textDecoration: 'none'}}>
               <a id="logo" className="title" href="##">FIND</a>
            </Link>

            <nav>
               <ul className="menu">
                  <li className="li1"><a className="a" href="##"><BiSearch /></a></li>
                  <li className="li1"><a className="a" href="##"><IoPersonCircleOutline /></a></li>
                  <li className="li1"><a className="a" href="##"><BiInfoCircle /></a></li>
               </ul>
            </nav>
         </header>
      </>
   );
}

export default Navbar;