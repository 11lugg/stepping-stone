import "components/button/button.styles.scss";

import { BUTTON_TYPE_CLASSES } from "constants/constants";

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`button-container ${buttonType}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
