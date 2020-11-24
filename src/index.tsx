import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
// import { ApolloProvider } from "@apollo/react-hooks";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import { createStore } from "redux";

import "babel-polyfill";
import AppWrapper from "./AppWrapper";
import reducer from "./state/reducers";
import { createBrowserHistory } from "history";
import { Router, Switch, Route, Redirect } from "react-router-dom";
// import AuthProvider from "./AuthProvider";
import PrivateRoute from "Providers/PrivateRoute";
import appRoutes from "Providers/appRoutes";

const client = new ApolloClient({
  uri: process.env.APP_GATEWAY,
  request: (operation) => {
    const token = localStorage.getItem("id_token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
});

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    {/* <AuthProvider> */}
      <I18nextProvider i18n={i18n}>
        {/* <ApolloProvider client={client}> */}
          <Switch>
            {/* <Route exact={true} path="/login">
              <Login />
            </Route> */}
            <PrivateRoute path="/">
              <AppWrapper />
            </PrivateRoute>
          </Switch>
        {/* </ApolloProvider> */}
      </I18nextProvider>
    {/* </AuthProvider> */}
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
