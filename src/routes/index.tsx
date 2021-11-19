import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import { useAuth } from "../Providers/Auth";

const Router = () => {
  const { token } = useAuth();
  return (
    <Switch>
      <Route exact path="/">
        {token ? <Home /> : <Login />}
      </Route>
      {/* <Route exact path="/login">
        <Login />
      </Route> */}
      <Route exact path="/register">
        <Register />
      </Route>
    </Switch>
  );
};

export default Router;
