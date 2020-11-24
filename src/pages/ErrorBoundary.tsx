import React from "react";
import { withRouter } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // log the error to an error reporting service
    //   logErrorToMyService(error, errorInfo);
    console.log("ERROR IS;", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <h1>Something went wrong.</h1>
          <button
            onClick={() => {
              this.setState({ hasError: false });
              this.props.history.push("/home");
            }}
          >
            Go to home page
          </button>
        </>
      );
    }

    return this.props.children;
  }
}
export default withRouter(ErrorBoundary);
