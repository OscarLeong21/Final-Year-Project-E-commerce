import "../styles/ProductScreen.css";
import { useAlert } from "react-alert";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { addToCart } from "../redux/actions/cartActions.js";
import { addToLike } from "../redux/actions/likeActions.js";
import { getProductDetails } from "../redux/actions/productActions.js";

const ProductScreen = () => {
  const [qty, setQty] = useState(1);

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;
  const params = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();

  useEffect(() => {
    if (product && params.id !== product._id) {
      dispatch(getProductDetails(params.id));
    }
  }, [dispatch, product, params.id]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    alert.success("Add to cart successfully.");
  };

  const addToLikeHandler = () => {
    dispatch(addToLike(product._id, qty));
    alert.success("Product Liked.");
  };

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className="productscreen123">
          <div className="productscreen__top">
            <div className="top__image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="top__info">
              <p className="top__name">{product.name}</p>
              <p className="top__price">Price: ${product.price}</p>
              <p className="top__description">
                Description: {product.description}
              </p>
            </div>
          </div>
          <div className="productscreen__bottom">
            <div className="productscreen__3D">
              <iframe
                src="https://my.spline.design/macbookprocopy-50856ac319203fdf15172acceb65c435/"
                frameborder="0"
                width="100%"
                height="100%"
                title="3D"
              ></iframe>
            </div>
            <div className="bottom__info">
              <p>
                Price:
                <span>${product.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <div className="likecartbtn">
                <button
                  className="likebtn"
                  type="button"
                  onClick={addToLikeHandler}
                >
                  <span id="heart">
                    <i class="fa fa-heart-o"></i>
                  </span>
                </button>
                <button
                  className="cartbtn"
                  type="button"
                  onClick={addToCartHandler}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
