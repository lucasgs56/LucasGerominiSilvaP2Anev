import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Listas from "./listas";
import Login from "./login";
import Sair from "./sair";
import Cadastrar from "./cadastrar";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sair">
          <Sair />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/registrar">
          <Cadastrar />
        </Route>
        <Route path="/">
          <Listas />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
export default Router;