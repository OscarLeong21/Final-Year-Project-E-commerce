import "../styles/CartScreen.css";
// import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { FaShoppingCart } from "react-icons/fa";

// Components
import CartItem from "../components/CartItems";

// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  // useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const checkoutHandler = () => {
    if (userInfo) {
      navigate("/shipping");
    } else {
      navigate("/login");
      alert.error("Please LOGIN to access this resource.");
    }
  };

  return (
      <div className="cartscreen">
        <div className="cartscreen__left">
          <div className="cartheading">
            <h2>
              <FaShoppingCart /> Shopping Cart ({getCartCount()})
            </h2>
          </div>

          {cartItems.length === 0 ? (
            <div className="empty">
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}

          {cartItems.length === 0 ? (
            <div />
          ) : (
            <div className="cartscreen__info">
              <p>Total ${getCartSubTotal()}</p>
              <button onClick={checkoutHandler}>Proceed To Checkout</button>
            </div>
          )}
        </div>
      </div>
  );
};

export default CartScreen;
