import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Main from "../Pages/Main";
import Registration from "../Pages/Registration";

function Routes() {
  const [isLogged, SetIsLogged] = useState(false);

  return (
    <Switch>
      <Route exact path={"/"}>
        <Home />
      </Route>
      {isLogged && (
        <Route path={"/main/:nome"}>
          <Main SetIsLogged={SetIsLogged} />
        </Route>
      )}
      <Route path={"/registration"}>
        <Registration SetIsLogged={SetIsLogged} />
      </Route>
    </Switch>
  );
}

export default Routes;
