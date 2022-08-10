import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "assets/crown.svg";

import "routes/navigation/navigation.styles.scss";
import { NAVIGATION_LINKS } from "constants/constants";

const Navigation = () => {
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
          <Link className="nav-link" to="/auth">
            {NAVIGATION_LINKS.SIGN_IN.toLocaleUpperCase()}
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
