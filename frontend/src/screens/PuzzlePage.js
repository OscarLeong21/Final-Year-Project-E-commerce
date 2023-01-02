import "../styles/ProductsPage.css";
import { useAlert } from "react-alert";
import Products from "../components/Products";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts2 as listProducts2 } from "../redux/actions/productActions";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

function PuzzlePage() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [price, setPrice] = useState([0, 1500]);

  const getProducts = useSelector((state) => state.getProducts2);
  const { products, error } = getProducts;

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(listProducts2(price));
  }, [dispatch, error, alert, price]);

  const puzzleP = products.filter((search) =>
    search.category.includes("Puzzle")
  );

  return (
    <div className="productspagescreen">
      <div className="productspagescreen__title">
        <h2>Puzzle</h2>
      </div>
      <div className="productspagescreen__products">
        {puzzleP &&
          puzzleP.map((product) => (
            <Products
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))}
      </div>

      <div className="filterbar">
        <Typography>Price</Typography>
        <Slider
          value={price}
          onChange={priceHandler}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={0}
          max={1500}
        ></Slider>
      </div>
    </div>
  );
}

export default PuzzlePage;
