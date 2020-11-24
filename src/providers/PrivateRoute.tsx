import React, { useContext, useCallback } from "react";
import { Route, Redirect } from "react-router-dom";
// import { AuthCtx } from "Contexts/";
import { withRouter } from "react-router";

const PrivateRoute = ({ render: Component, match, history, ...rest }: any) => {
  // const { validToken } = useContext(AuthCtx);
  const validToken = true;
  const { pathname } = history.location;
  const index = pathname.indexOf("/", pathname.indexOf("/") + 1);
  const pathName = pathname.slice(0, index);

  const renderComponent = useCallback(
    (props) => {
      return <Component {...props} />;
    },
    [pathName]
  );

  return (
    <>
      <Route
        render={(props) => {
          if (validToken) {
            return renderComponent(props);
          } else {
            return <Redirect to="/login" />;
          }
        }}
        {...rest}
      />
    </>
  );
};
export default withRouter(PrivateRoute);
