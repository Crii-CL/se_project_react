import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children, isLoggedIn, ...props }) => {
  return (
    <Route path="/profile" {...props}>
      {isLoggedIn ? children : <Redirect to={"/"} />}
    </Route>
  );
};
export default ProtectedRoute;
