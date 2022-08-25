import { Outlet } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

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
import { selectUser } from "store/user/user.selector";
import { selectIsCartOpen } from "store/cart/cart.selector";

import { signOutStart } from "store/user/user.action";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

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
