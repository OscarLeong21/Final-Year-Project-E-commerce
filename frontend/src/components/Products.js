import "../styles/Products.css";
import { useState } from "react";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToLike } from "../redux/actions/likeActions.js";

const Products = ({ imageUrl, name, price, productId }) => {
  const [qty] = useState("1");
  const alert = useAlert();

  const addToLikeHandler = () => {
    dispatch(addToLike(productId, qty));
    alert.success("Product Liked");
  };

  const dispatch = useDispatch();

  return (
    <div className="product">
      <div className="like">
        <span id="heart" onClick={addToLikeHandler}>
          <i class="fa fa-heart-o"></i>
        </span>
      </div>
      <img src={imageUrl} alt={name} />

      <div className="product__info">
        <p className="info__name">{name}</p>

        <p className="info__price">${price}</p>

        <div>
          <Link to={`/product/${productId}`} className="info__button1">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
