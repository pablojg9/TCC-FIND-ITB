import 'assets/css/cliente.css'
import NavBarLogin from 'components/NavBar/NavBarLogin';
import Sidebar from 'components/SideBar/sidebar';


const Cliente = () => {
   return (
      <>
         <NavBarLogin />
         <Sidebar />

         <div className="col offset-1">
            <div className="container d-flex justify-content-center align-items-center container-profile">
               <div className="card">
                  <div className="upper"> <img src={"https://images.unsplash.com/photo-1506765515384-028b60a970df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFubmVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"} alt="banner" className="img-fluid" />
                  </div>
                  <div className="user text-center">
                     <div className="profile"> <img src={"https://avatars.githubusercontent.com/u/48697810?v=4"} alt="avatar" className="rounded-circle" width="80" /> </div>
                  </div>
                  <div className="mt-5 text-center">
                     <h4 className="mb-0">Pablo Junior</h4> <span className="text-muted d-block mb-2">Cliente</span> <button className="btn btn-primary btn-sm follow">Compartilhar</button>
                     <div className="d-flex justify-content-between align-items-center mt-4 px-4">
                        
                        <div className="stats align-items-center">
                           <h6 className="mb-0 space-margin-span">Projetos Assinados</h6> <span className="margin-number">10</span>
                        </div>
                        
                     </div>
                  </div>
               </div>
            </div>
            <hr className="division"/>

         </div>
      </>
   );
}

export default Cliente;