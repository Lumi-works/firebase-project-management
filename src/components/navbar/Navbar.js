import { Link } from "react-router-dom";

import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

// styles & images
import "./Navbar.css";
import Temple from "../../assets/temple.svg";

function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="logo" />
          <span>FireGroup</span>
        </li>

        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}

        {user && (
          <li>
            {!isPending ? (
              <button className="btn" onClick={logout}>
                Logout
              </button>
            ) : (
              <button className="btn" disabled>
                Logging out...
              </button>
            )}
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navbar;

/*
 * Logo on the left      --------    Login/Signup + Logout (conditionally)
 */
