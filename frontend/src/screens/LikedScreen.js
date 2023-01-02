import "../styles/CartScreen.css";
// import { useEffect } from "react";
import { useAlert } from "react-alert";
import { FaHeart } from "react-icons/fa";
import LikeItem from "../components/LikeItems";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { addToLike, removeFromLike } from "../redux/actions/likeActions";

const LikedScreen = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const like = useSelector((state) => state.like);
  const { likeItems } = like;

  // useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToLike(id, qty));
  };

  const removeFromLikeHandler = (id) => {
    dispatch(removeFromLike(id));
    alert.success("Product removed.");
  };

  const getLikeCount = () => {
    return likeItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <div className="cartheading">
            <h2>
              {" "}
              <FaHeart /> Liked Items ({getLikeCount()}){" "}
            </h2>
          </div>

          {likeItems.length === 0 ? (
            <div className="empty">
              No liked items here <Link to="/">Go Back</Link>
            </div>
          ) : (
            likeItems.map((item) => (
              <LikeItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromLikeHandler}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default LikedScreen;
