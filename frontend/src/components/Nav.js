import "../styles/Nav.css";
import { useAlert } from "react-alert";
import { FcSearch } from "react-icons/fc";
import { NavDropdown } from "react-bootstrap";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../redux/actions/userAction";

const Navbar = ({ click }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
    alert.success("Logout Successfully.");
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2>MudYeDisney</h2>
        </Link>
      </div>

      <ul className="navbar__links">
        <div className="searchicon">
          <li>
            <Link to="/search">
              <FcSearch />
            </Link>
          </li>
        </div>
        <li>
          <Link to="/cart" className="cart__link">
            <span>
              <FaShoppingCart /> &nbsp;Cart{" "}
              <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/like">
            <FaHeart />
            Liked
          </Link>
        </li>

        {userInfo ? (
          <NavDropdown title={userInfo?.user?.name} id="username">
            <LinkContainer to="/profile">
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
          </NavDropdown>
        ) : (
          <NavDropdown id="nav-dropdown" title="Sign In">
            <LinkContainer to="/login">
              <NavDropdown.Item>Login</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <LinkContainer to="/register">
              <NavDropdown.Item to="/register">Register</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        )}
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
