import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
  const users: { isLogin: boolean }[] =
    JSON.parse(localStorage.getItem("user") as string) || [];
  const Auth: boolean = users.some((item) => item.isLogin === true);

  return Auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
