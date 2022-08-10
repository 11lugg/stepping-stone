import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "contexts/user.context";
import { CartContext } from "contexts/cart.context";
import { signOutUser } from "utils/firebase/firebase.utils";

import CartIcon from "components/cart-icon/cart-icon.component";
import { ReactComponent as CrwnLogo } from "assets/crown.svg";

import "routes/navigation/navigation.styles.scss";
import { NAVIGATION_LINKS } from "utils/constants/constants.js";
import CartDropdown from "components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            {NAVIGATION_LINKS.SHOP.toLocaleUpperCase()}
          </Link>
          {!currentUser ? (
            <Link className="nav-link" to="/auth">
              {NAVIGATION_LINKS.SIGN_IN.toLocaleUpperCase()}
            </Link>
          ) : (
            <span className="nav-link" onClick={signOutUser}>
              {NAVIGATION_LINKS.SIGN_OUT.toLocaleUpperCase()}
            </span>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
