import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "contexts/user.context";
import { CartContext } from "contexts/cart.context";
import { signOutUser } from "utils/firebase/firebase.utils";

import CartIcon from "components/cart-icon/cart-icon.component";
import { ReactComponent as CrwnLogo } from "assets/crown.svg";

import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "routes/navigation/navigation.styles";

import { NAVIGATION_LINKS } from "utils/constants/constants.js";
import CartDropdown from "components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">
            {NAVIGATION_LINKS.SHOP.toLocaleUpperCase()}
          </NavLink>
          {!currentUser ? (
            <NavLink to="/auth">
              {NAVIGATION_LINKS.SIGN_IN.toLocaleUpperCase()}
            </NavLink>
          ) : (
            <NavLink as="span" onClick={signOutUser}>
              {NAVIGATION_LINKS.SIGN_OUT.toLocaleUpperCase()}
            </NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
