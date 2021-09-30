import 'assets/css/sidebar.css';

import { AiOutlineHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';


const Sidebar = () => {
   return (
      <>
         <div className="container-fluid">
            <div className="row">
               <div className="col-3 px-1 position-fixed" id="sticky-sidebar">
                  <div className="siderbar-edit p-3 bg-light" style={{ width: 280 }} >
                     <a href="/" className="d-flex align-items-center link-dark text-decoration-none">
                        <img src={"https://avatars.githubusercontent.com/u/48697810?v=4"} alt="avatar" className="avatar" />
                        <span className="title-span">Pablo Junior</span>
                     </a>
                     <hr />
                     <ul className="nav nav-pills flex-column mb-auto " style={{ height: '72vh' }}>
                        <li className="nav-item">
                           <a href="/home" className="nav-link active" aria-current="page">
                              <AiOutlineHome style={{ marginBottom: 5 }} />
                              <span className="span-side">Home</span>
                           </a>
                        </li>
                        <li>
                           <a href="/profile/cliente" className="nav-link link-dark">
                              <CgProfile />
                              <span className="span-side">Profile</span>
                           </a>
                        </li>
                        <hr />
                        <span className="span-tec">Tecnologias mais utilizadas</span>
                        <li>
                           <a href="/" className="nav-link link-dark">
                              <img src={"https://www.datocms-assets.com/41512/1611833998-javascript.svg"} alt="Linguagem de programação Javascript"
                                 style={{ width: 26, borderRadius: 20 }} />
                              <span className="btn tags-feed">Javascript</span>
                           </a>
                        </li>
                        <li>
                           <a href="/" className="nav-link link-dark">
                              <img src={"https://www.datocms-assets.com/41512/1611833908-react2.svg"} style={{ width: 26, borderRadius: 20 }} alt="Framework React" />
                              <span className="btn tags-feed">React</span>
                           </a>
                        </li>
                        <li>
                           <a href="/" className="nav-link link-dark">
                              <img src={"https://www.datocms-assets.com/41512/1629087668-html.png"} style={{ width: 26, borderRadius: 20 }} alt="HTML" />
                              <span className="btn tags-feed">HTML</span>
                           </a>
                        </li>
                     </ul>
                     <hr />
                     <div className="dropdown">
                        <a href="/" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                           <img src="https://avatars.githubusercontent.com/u/48697810?v=4" alt="" width="32" height="32" className="rounded-circle me-2" />
                           <strong>Pablo Junior</strong>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser2">
                           <li><a className="dropdown-item" href="/">Home</a></li>
                           <li><a className="dropdown-item" href="/">Settings</a></li>
                           <li><a className="dropdown-item" href="/">Profile</a></li>
                           <li><hr className="dropdown-divider"></hr></li>
                           <li><a className="dropdown-item" href="/">Sair</a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Sidebar;