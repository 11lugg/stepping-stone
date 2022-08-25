import { useState } from "react";
import { useDispatch } from "react-redux";
import { signInAuthUserWithEmailAndPassword } from "utils/firebase/firebase.utils";

import FormInput from "components/form-input/form-input.component";
import Button from "components/button/button.component";

import {
  SignInContainer,
  ButtonsContainer,
} from "components/sign-in-form/sign-in-form.styles";

import { BUTTON_TYPE_CLASSES, FORM_NAMES } from "utils/constants/constants.js";
import { googleSignInStart, emailSignInStart } from "store/user/user.action";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const logGoogleUser = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      setFormFields(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("User not found");
          break;
        default:
          console.log("User login error", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.GOOGLE}
            onClick={logGoogleUser}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
