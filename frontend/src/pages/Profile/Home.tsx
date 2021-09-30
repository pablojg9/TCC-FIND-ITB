import 'assets/css/navbar.css';
import 'assets/css/cliente.css';
import Sidebar from 'components/SideBar/sidebar';
import NavBarLogin from 'components/NavBar/NavBarLogin';

const Home = () => {
   return (
      <>
         <NavBarLogin />
         <Sidebar />
        
      </>
   )

}

export default Home;
