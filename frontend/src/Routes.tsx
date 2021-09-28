import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" exact>
               <Home />
            </Route>
         </Switch>

         <Switch>
            <Route path="/login">
               <Login />
            </Route>
         </Switch>
      </BrowserRouter>
   );
}

export default Routes;