import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../views/signup/Signup";
import Login from "../views/login/Login";
import ProductDisplay from "../views/productDisplay/ProductDisplay";
import ProductDetail from "../productDisplay/ProductDetail";
import UserProfile from "../components/userProfile/UserProfile";
import ProtectedRoute from "./ProtectedRoute";
import ForgotPass from "../components/forgotPassword/ForgotPass";

const RouterPath: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
            <Route path="/product" element={<ProductDisplay />} />
            <Route path="/forgotpassword" element={<ForgotPass />} />
          </Route>
          <Route path="/*" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterPath;
