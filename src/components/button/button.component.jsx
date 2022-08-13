import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "components/button/button.styles";
import { BUTTON_TYPE_CLASSES } from "utils/constants/constants";

const getButton = (buttonType = BUTTON_TYPE_CLASSES.BASE) => {
  return {
    [BUTTON_TYPE_CLASSES.BASE]: BaseButton,
    [BUTTON_TYPE_CLASSES.GOOGLE]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.INVERTED]: InvertedButton,
  }[buttonType];
};

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
