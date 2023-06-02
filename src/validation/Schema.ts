import * as Yup from "yup";
import { errorMessages } from "../constants/SchemaConstants";

export const SignUpSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, errorMessages.firstNameMinLength)
    .max(10, errorMessages.firstNameMaxLength)
    .required(errorMessages.firstNameRequired),
  last_name: Yup.string()
    .min(2, errorMessages.lastNameMinLength)
    .max(10, errorMessages.lastNameMaxLength)
    .required(errorMessages.lastNameRequired),
  mobile_no: Yup.number()
    .min(10, errorMessages.mobileNoMinLength)
    .required(errorMessages.mobileNoRequired),
  email: Yup.string()
    .email(errorMessages.emailInvalid)
    .required(errorMessages.emailRequired),
  password: Yup.string()
    .min(8, errorMessages.passwordMinLength)
    .required(errorMessages.passwordRequired)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      errorMessages.passwordCriteria
    ),
  confirm_password: Yup.string()
    .required(errorMessages.confirmPasswordRequired)
    .oneOf([Yup.ref("password")], errorMessages.confirmPasswordMatch),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email(errorMessages.emailInvalid)
    .required(errorMessages.emailRequired),
  password: Yup.string()
    .min(8, errorMessages.passwordMinLength)
    .required(errorMessages.passwordRequired)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      errorMessages.passwordCriteria
    ),
});

export const userProfileSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, errorMessages.firstNameMinLength)
    .max(10, errorMessages.firstNameMaxLength)
    .required(errorMessages.firstNameRequired),
  last_name: Yup.string()
    .min(2, errorMessages.lastNameMinLength)
    .max(10, errorMessages.lastNameMaxLength)
    .required(errorMessages.lastNameRequired),
  mobile_no: Yup.number()
    .min(10, errorMessages.mobileNoMinLength)
    .required(errorMessages.mobileNoRequired),
  email: Yup.string()
    .email(errorMessages.emailInvalid)
    .required(errorMessages.emailRequired),
});

export const forgotPasswordSchema = Yup.object().shape({
  current_password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Please enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  new_password: Yup.string()
    .min(8, errorMessages.emailInvalid)
    .required(errorMessages.emailRequired)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      errorMessages.currentPasswordCriteria
    ),
  confirm_password: Yup.string()
    .min(8, errorMessages.passwordMinLength)
    .required(errorMessages.confirmPasswordRequired)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      errorMessages.currentPasswordCriteria
    )
    .oneOf([Yup.ref("new_password")], errorMessages.confirmPasswordMatch),
});
