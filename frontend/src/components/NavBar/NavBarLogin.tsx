import { BiInfoCircle, BiSearch } from "react-icons/bi";

const NavBarLogin = () => {
   return (
      <div className="navbar-edit d-flex flex-column flex-md-row align-items-center p-4 border-bottom shadow-sm">
            <div className="container-fluid">
               <nav className="my-2 my-md-0 mr-md-3">
                  <h4><i>FIND</i></h4>
               </nav>
            </div>
            <nav>
               <ul className="menu">
                  <li className="li1"><a className="a" href="##"><BiSearch /></a></li>

                  <li className="li1">

                     <a className="a collapse-avatar nav-link dropdown-toggle" href="/" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://avatars.githubusercontent.com/u/48697810?v=4"
                           alt="avatar" className="avatar-nav" />
                     </a>
                     <ul className="dropdown-edit dropdown-menu dropdown-menu-dark">
                        <li><a className="dropdown-item" href="/profile/cliente">Profile</a></li>
                        <li><a className="dropdown-item" href="/settings">Settings</a></li>
                        <li><hr className="dropdown-divider"></hr></li>
                        <li><a className="dropdown-item" href="/login">Sair</a></li>
                     </ul>

                  </li>
                  <li className="li1">
                     <a className="a avatar-nav" href="##"><BiInfoCircle /></a>
                  </li>
               </ul>
            </nav>
         </div>
   )
}

export default NavBarLogin;