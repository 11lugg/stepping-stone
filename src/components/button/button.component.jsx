import { BUTTON_TYPE_CLASSES } from "constants/constants";

import "components/button/button.styles.scss";

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${
        buttonType ? BUTTON_TYPE_CLASSES[buttonType] : ""
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
