import "../styles/SideDrawer.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { logout } from "../redux/actions/userAction";
import { useAlert } from "react-alert";

const SideDrawer = ({ show, click }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const sideDrawerClass = ["sidedrawer"];

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logout Successfully.");
  };

  if (show) {
    sideDrawerClass.push("show");
  }

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link to="/cart">
            <FaShoppingCart />
            <span>
              Cart{" "}
              <span className="sidedrawer__cartbadge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/" onClick={logoutHandler}>Logout</Link>
        </li>

      </ul>
    </div>
  );
};

export default SideDrawer;
