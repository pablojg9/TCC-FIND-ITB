import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import Cliente from "pages/Profile/Cliente";
import HomePage from "pages/Profile/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" exact  component={Home}>
            </Route>
         </Switch>

         <Switch>
            <Route path="/login" component={Login} /> 
         </Switch>

         <Switch>
            <Route path="/home" component={HomePage}/>
         </Switch>

         <Switch>
            <Route path="/profile/cliente" component={Cliente} />
         </Switch>
      </BrowserRouter>
   );
}

export default Routes;