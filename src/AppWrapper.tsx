import React, { useState, useEffect, ReactElement } from "react";
import Media from "react-media";
import App from "./App";
import i18n from "./i18n";
import appRoutes from "Providers/appRoutes";

import ErrorBoundary from "Pages/ErrorBoundary";

// this component would normally wrap the entire app in consistent styles
// i.e header, nav, footer structure would be here
const AppWrapper = ({ store }: any) => {
  
  return (
      // <ThemeProvider theme={theme}>
            /* <Media query={{ minWidth: "200px" }}>
              {(isMatch) => renderSider(isMatch)}
            </Media> */
                <ErrorBoundary>
                  <App store={store} />
                </ErrorBoundary>
      // </ThemeProvider>
  );
};


export default AppWrapper;
