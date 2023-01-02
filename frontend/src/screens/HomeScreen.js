import "../styles/HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import Loading from "./Loading.js";
import AutoPlay from "../components/slider.js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import stitch from "../components/pics/stitch_baner1.jpg";
import winnie from "../components/pics/winniethepooh_light.jpg";
import figure from "../components/pics/figure.jpg";
import princess from "../components/pics/princess_puzzle.jpg";
import { FaStar, FaFire } from "react-icons/fa";

// Components
import Products from "../components/Products";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const getProducts = useSelector((state) => state.getProducts);
  const { loading, error } = getProducts;

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(listProducts());
  }, [dispatch, error, alert]);

  return (
    <div className="home">
      <div className="homescreen">
        {loading && <Loading />}
        <div className="slick">
          <AutoPlay />
        </div>
        <div className="catergorycontainer">
          <div className="catergory12">
            <div className="catergory1">
              <p>Winnie The Pooh</p>
              <Link to="/winnie">
                <img src={winnie} alt="" />
              </Link>
            </div>
            <div className="catergory2">
              <p>Figure</p>
              <Link to="/figure">
                <img src={figure} alt="" />
              </Link>
            </div>
          </div>
          <div className="catergory3">
            <p>Puzzle</p>
            <Link to="/puzzle">
              <img src={princess} alt="" />
            </Link>
          </div>
        </div>
        <h2 className="homescreen__title">
          <FaStar />
          Latest Products
          <FaStar />
        </h2>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={6000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable={true}
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3500,
                min: 1100,
              },
              items: 4,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 600,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={3}
          swipeable={false}
        >
          <div className="productcard">
            <Products
              key={"62497ea1160dc6845972e509"}
              name={"Rapunzel 1000pcs/ Canvas Style 2000pcs Puzzle"}
              price={"329"}
              imageUrl={
                "http://res.cloudinary.com/dhixidtbs/image/upload/v1648983612/y02oqugwm3vedelte9t4.jpg"
              }
              productId={"62497ea1160dc6845972e509"}
            />
          </div>
          <div className="productcard">
            <Products
              key={"62498543160dc6845972e60e"}
              name={"Winnie the pooh night light"}
              price={"259"}
              imageUrl={
                "http://res.cloudinary.com/dhixidtbs/image/upload/v1648985412/rd8r19aa3m0oqnutnloi.jpg"
              }
              productId={"62498543160dc6845972e60e"}
            />
          </div>
          <div className="productcard">
            <Products
              key={"62497d7b160dc6845972e4fd"}
              name={"Ariel 1000pcs Puzzle"}
              price={"295"}
              imageUrl={
                "http://res.cloudinary.com/dhixidtbs/image/upload/v1648983373/oxzdrdmlcalmyimxvk4s.jpg"
              }
              productId={"62497d7b160dc6845972e4fd"}
            />
          </div>
          <div className="productcard">
            <Products
              key={"624db3f870a35e9a96b6ac68"}
              name={"Monsters, Inc. Phone holder / Tape Dispenser"}
              price={"359"}
              imageUrl={
                "http://res.cloudinary.com/dhixidtbs/image/upload/v1649259501/lcmhkwklhhmjq4fwis70.jpg"
              }
              productId={"624db3f870a35e9a96b6ac68"}
            />
          </div>

          <div className="productcard">
            <Products
              key={"624e7d0d1ccad7d2890f822a"}
              name={"Stitch Tap dispenser"}
              price={"275"}
              imageUrl={
                "http://res.cloudinary.com/dhixidtbs/image/upload/v1649310937/bamxfpker2e9tdxtijcm.jpg"
              }
              productId={"624e7d0d1ccad7d2890f822a"}
            />
          </div>
          <div className="productcard">
            <Products
              key={"624983be160dc6845972e5ce"}
              name={"日本預訂🇯🇵 Maleficent Figure"}
              price={"699"}
              imageUrl={
                "http://res.cloudinary.com/dhixidtbs/image/upload/v1648984989/hk3uvo6i4lyd1v18hcbm.jpg"
              }
              productId={"624983be160dc6845972e5ce"}
            />
          </div>
          <div className="productcard">
            <Products
              key={"624e805d1ccad7d2890f8255"}
              name={"Hershey’s 曲奇朱古力 (Donald Duck)"}
              price={"47"}
              imageUrl={
                "http://res.cloudinary.com/dhixidtbs/image/upload/v1649311834/v8p9tk79vsp8c3xnfnfn.jpg"
              }
              productId={"624e805d1ccad7d2890f8255"}
            />
          </div>
        </Carousel>

        <div className="banner">
          <Link to="/stitch">
            <img src={stitch} alt="" />
          </Link>
        </div>

        <h2 className="homescreen__title">
          <FaFire />
          Popular Products
          <FaFire />
        </h2>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={6000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable={true}
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3500,
                min: 1100,
              },
              items: 4,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 600,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={3}
          swipeable={false}
        >
          <div className="productcard">
            <Products
              key={"62497ea1160dc6845972e509"}
              name={"Rapunzel 1000pcs/ Canvas Style 2000pcs Puzzle"}
              price={"329"}
              imageUrl={
                "http://res.cloudinary.com/dhixidtbs/image/upload/v1648983612/y02oqugwm3vedelte9t4.jpg"
              }
              productId={"62497ea1160dc6845972e509"}
            />
          </div>
          <div className="productcard">
            <Products
              key={"62498543160dc6845972e60e"}
              name={"Winnie the pooh night light"}
              price={"259"}
              imageUrl={
                "http://res.cloudinary.com/dhixidtbs/image/upload/v1648985412/rd8r19aa3m0oqnutnloi.jpg"
              }
              productId={"62498543160dc6845972e60e"}
            />
          </div>
          <div className="productcard">
            <Products
              key={"624e80021ccad7d2890f8251"}
              name={"[Hershey’s] Toy Story Cookies曲奇朱古力（109g)"}
              price={"47"}
              imageUrl={
                "http://res.cloudinary.com/dhixidtbs/image/upload/v1649311675/sjac9zz6oxj9ntexmv8p.jpg"
              }
              productId={"624e80021ccad7d2890f8251"}
            />
          </div>
        </Carousel>

        <div>
          <a
            className="whats-app"
            href="https://wa.me/85251166818"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i class="fa fa-whatsapp float"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
