import React from "react";
import { useStore } from "react-redux";
import * as authClient from "./auth-client";
import client from "Connection/Auth";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const store = useStore();
  const firstName = window.localStorage.first_name;
  const lastName = window.localStorage.last_name;
  const { userID } = window.localStorage;
  store.dispatch({
    type: "SET_USER",
    payload: { firstName, lastName, userID },
  });
  const login = (data) => authClient.login(data);
  return <AuthContext.Provider value={{ login }} {...props} />;
}
function useAuth1() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}
const isAuthenticated = async () => {
  const token = window.localStorage.getItem("id_token");
  if (!token) return false;
  const { data, error } = await client("authenticate", token);
  if (data && data.data.message === "Token Valid") {
    return true;
  } else {
    // setValidToken(false);
    return false;
  }
};
function useAuth() {
  return { isAuthenticated: isAuthenticated };
}
export { AuthProvider, isAuthenticated };
