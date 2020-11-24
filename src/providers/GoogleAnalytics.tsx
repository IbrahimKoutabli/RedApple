import React, { useEffect } from "react";
import ReactGA from "react-ga";
import changeLang from "Utils/changeLang";

// Initialize google analytics page view tracking
const trackingCode = process.env.GA_TRACKING_NUMBER
  ? process.env.GA_TRACKING_NUMBER
  : "";
ReactGA.initialize(trackingCode, {
  titleCase: false,
  gaOptions: {
    name: "WAtracker",
    siteSpeedSampleRate: 100, // send everything
  },
});
// Initial page will not be recorded yet hence..
ReactGA.pageview("/", ["WAtracker"]);

const GoogleAnalytics = ({ children, history }) => {
  useEffect(
    () =>
      history.listen((location: any) => {
        const url = location.pathname + location.search;
        if (url.includes("lang=")) {
          changeLang(url);
        }
        ReactGA.set({ page: location.pathname }, ["WAtracker"]);
        ReactGA.pageview(url, ["WAtracker"]);
      }),
    []
  );
  const url = history.location.pathname + history.location.search;
  if (url.includes("lang=")) {
    changeLang(url);
  }

  return <>{children}</>;
};

export default GoogleAnalytics;
