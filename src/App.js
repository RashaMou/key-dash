import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";
import "./App.css";
import Profile from "./components/Profile";
import ExternalApi from "./views/ExternalApi";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>...loading</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Switch>
        <Route path="/" exact />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/external-api" component={ExternalApi} />
      </Switch>
    </div>
  );
}

export default App;
