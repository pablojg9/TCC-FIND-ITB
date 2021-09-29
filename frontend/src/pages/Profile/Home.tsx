import 'assets/css/navbar.css';
import 'assets/css/cliente.css';
import { BiInfoCircle, BiSearch } from 'react-icons/bi';
import Sidebar from 'components/SideBar/sidebar';

const Home = () => {
   return (
      <>
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
         <Sidebar />
         
        

         <div className="container-fluid main">
            <div className="tags">
               <p className="tags-title">Tags em alta</p>
               <span className="btn tags-feed">#reactjs</span><br />
               <span className="btn tags-feed">#javascript</span><br />
               <span className="btn tags-feed">#React Native</span><br />
               <span className="btn tags-feed">#Java</span><br />
               <span className="btn tags-feed">#c#</span><br />
               <span className="btn tags-feed">#flutter</span><br />
               <span className="btn tags-feed exibir-result">Exibir mais resultados...</span>
            </div>

            <div className="feed">
               <div className="text-feed">
                  <span>
                     <img src={'https://avatars.githubusercontent.com/u/48697810?v=4'} alt="avatar" className="avatar" />
                  </span>
                  <span className="title-post-feed">ESTOU A PROCURA DE UM TRABALHO, DESENVOLVENDO EM JAVA E REACT </span>
                  <span className="escrito">escrito por <strong> pablojg9</strong></span>
               </div>

               <div className="post">


               </div>
            </div>
         </div>
         
      </>
   )

}

export default Home;
