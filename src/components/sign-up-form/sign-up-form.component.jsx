import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "utils/firebase/firebase.utils";

import FormInput from "components/form-input/form-input.component";
import Button from "components/button/button.component";

import { SignUpContainer } from "components/sign-up-form/sign-up-form.styles";

import { FORM_NAMES } from "utils/constants/constants.js";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      setFormFields(defaultFormFields);
      alert("Account successfully created");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      }
      console.log("User creation encountered an error", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          onChange={handleChange}
          name={FORM_NAMES.DISPLAY_NAME}
          value={displayName}
          required
        />
        <FormInput
          label="Email"
          type={FORM_NAMES.EMAIL}
          onChange={handleChange}
          name={FORM_NAMES.EMAIL}
          value={email}
          required
        />
        <FormInput
          label="Password"
          type={FORM_NAMES.PASSWORD}
          onChange={handleChange}
          name={FORM_NAMES.PASSWORD}
          value={password}
          required
        />
        <FormInput
          label="Confirm Password"
          type={FORM_NAMES.PASSWORD}
          onChange={handleChange}
          name={FORM_NAMES.CONFIRM_PASSWORD}
          value={confirmPassword}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
