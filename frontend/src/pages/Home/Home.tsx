import { Link } from "react-router-dom";

const Home = () => {
   return (
      <div>
         <h1>a</h1>
         <Link className="btn btn-primary" to="/login">
            Logar
         </Link>
      </div>
   )

}

export default Home;