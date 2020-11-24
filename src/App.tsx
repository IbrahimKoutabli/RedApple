import React, { useContext } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import appRoutes from "Providers/appRoutes";
import Home from "Pages/Home";
import Montreal from "Pages/Montreal";
import Vancouver from "Pages/Vancouver";
import Toronto from "Pages/Toronto";
import PrivateRoute from "Providers/PrivateRoute";
import GoogleAnalytics from "Providers/GoogleAnalytics";
import "./scss/pages.scss";
import "./scss/home.scss";

const App = ({ history }: any) => {
  return (
      <GoogleAnalytics history={history}>
        <Switch>
          <Route
            path={appRoutes.toronto()}
            render={() => <Toronto />}
          />
          <Route
            path={appRoutes.vancouver()}
            render={() => <Vancouver />}
          />
          <Route
            path={appRoutes.montreal()}
            render={() => <Montreal />}
          />

          <Route
            path={appRoutes.home()}
            render={() => <Home />}
          />
        
          <Redirect from="/" to={appRoutes.home()} />
        </Switch>
      </GoogleAnalytics>
  );
};

export default withRouter(App);
