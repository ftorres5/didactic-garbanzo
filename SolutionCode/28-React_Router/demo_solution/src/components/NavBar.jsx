// 👉 STEP 4 - React Router imports (NavLink)
import { NavLink } from "react-router-dom";

function Navbar () {
  return (
    <div id="navbar" className="nav-links">
      {/* 👉 STEP 4b - Make NavLinks to navigate us Home (`/home`) and Shop (`/items`) */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/items">Shop</NavLink>
    </div>
  );
}

export default Navbar;
