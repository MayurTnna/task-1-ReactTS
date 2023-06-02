import React, { useState } from "react";
import { useFormik } from "formik";
import Button from "react-bootstrap/esm/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { decryption } from "../../utils/Utils";
import { forgotPasswordSchema } from "../../validation/Schema";
import "../../assets/scss/forgotPassword.scss";
import { messages } from "../../constants/Constants";

const ForgotPass = () => {
  const [showPassword, setShowPassword] = useState("false");
  const [showNewPassword, setShowNewPassword] = useState("false");
  const [showConPassword, setShowConPassword] = useState("false");
  const initialValues = {
    current_password: "",
    new_password: "",
    confirm_password: "",
  };
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user")) || [];
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: forgotPasswordSchema,

      onSubmit: (values) => {
        const activeUser = userData.find((user) => user.isLogin === true) || [];
        console.log(activeUser.password);

        const changedPassword = userData.map((item) => {
          if (item.isLogin === true) {
            if (decryption(activeUser.password) === values.current_password) {
              if (values.current_password !== values.new_password) {
                toast.success(messages.passwordSuccess);
                navigate("/userprofile");
                return {
                  ...item,
                  password: values.new_password,
                };
              } else {
                toast.error(messages.passwordSame);
              }
            } else {
              toast.error(messages.passwordNotUser);
            }
          } else {
            return item;
          }
          return item;
        });
        localStorage.setItem("user", JSON.stringify(changedPassword));
      },
    });
  return (
    <>
      <div className="forgot_container">
        <div className="modal">
          <div className="modal-container">
            <div className="modal-left">
              <h1 className="modal-title">Change Password</h1>
              <p className="modal-desc"></p>
              <form onSubmit={handleSubmit}>
                <div className="input-block">
                  <label htmlFor="current_password" className="input-label">
                    Current Password
                  </label>
                  <input
                    type={showPassword ? "password" : "text"}
                    autoComplete="off"
                    name="current_password"
                    id="current_password"
                    placeholder="enter your current password"
                    value={values.current_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className="float-end">
                    {errors.current_password && touched.current_password ? (
                      <p className="form-error float-center">
                        {errors.current_password}
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                  <Button
                    variant={"ghost"}
                    className=" text-center toggle-password  "
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </div>
                <div className="input-block">
                  <label htmlFor="new_password" className="input-label">
                    New Password
                  </label>
                  <input
                    type={showNewPassword ? "password" : "text"}
                    autoComplete="off"
                    name="new_password"
                    id="new_password"
                    placeholder="Set new password"
                    value={values.new_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className="float-end">
                    {errors.new_password && touched.new_password ? (
                      <p className="form-error float-center">
                        {errors.new_password}
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                  <Button
                    variant={"ghost"}
                    className=" text-center toggle-password  "
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </div>
                <div className="input-block">
                  <label htmlFor="confirm_password" className="input-label">
                    Confirm Password
                  </label>
                  <input
                    type={showConPassword ? "password" : "text"}
                    autoComplete="off"
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="Re-enter your new password"
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className="float-end">
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="form-error float-center">
                        {errors.confirm_password}
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                  <Button
                    variant={"ghost"}
                    className=" text-center toggle-password  "
                    onClick={() => setShowConPassword(!showConPassword)}
                  >
                    {showConPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </div>
                <div className="modal-buttons">
                  <button
                    className="input-button_forgot"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-right">
              <img
                src="https://images.unsplash.com/photo-1570288464059-9afc7a4e1e15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29uJTIwc2hvY2tlZHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgotPass;

// handleChange and handleBlur are used together to handle form validation and to update the state of the form in real-time as the user interacts with it.
