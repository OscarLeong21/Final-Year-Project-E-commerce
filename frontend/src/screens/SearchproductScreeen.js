import Loading from "./Loading.js";
import "../styles/SearchPScreen.css";
import { useAlert } from "react-alert";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";

// Components
import Products from "../components/Products";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const categories = [
  "Puzzle",
  "Figure",
  "Stitch",
  "Winnie_the_Pooh",
  "Donald_Duck",
];

const SearchproductScreeen = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { keyword } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 2000]);
  const [category, setCategory] = useState("");

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error, productsCount, resultPerPage } =
    getProducts;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    dispatch(listProducts(keyword, currentPage, price, category));
  }, [dispatch, error, alert, keyword, currentPage, price, category]);

  const filteredData = products.filter((search) =>
    search.name.includes(keyword)
  );

  return (
    <div className="searchscreen">
      <div className="searchscreen__header">Here's the result</div>
      <div className="searchscreen__products">
        {loading && <Loading />}

        {filteredData &&
          filteredData.map((product) => (
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
          max={2000}
        ></Slider>

        <Typography>Categories</Typography>
        <ul className="categoryBar">
          {categories.map((category) => (
            <li
              className="category-link"
              key={category}
              onClick={() => setCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {resultPerPage < productsCount && (
        <div className="pagebox">
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={resultPerPage}
            totalItemsCount={productsCount}
            onChange={setCurrentPageNo}
            nextPageText="Next"
            prevPageText="Prev"
            firstPageText="First"
            lastPageText="Last"
            itemClass="page-item"
            linkClass="page-link"
            activeClass="pageItemActive"
            activeLinkClass="pageLinkActive"
          />
        </div>
      )}
    </div>
  );
};

export default SearchproductScreeen;
