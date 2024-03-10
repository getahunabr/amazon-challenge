import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { width } from "@mui/system";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../Utility/action.type";
import { useContext } from "react";
// flex, renderDesc, renderAdd;
const ProductCard = ({ product, flex, renderDesc, renderAdd }) => {
  const { image, title, id, rating, price, description } = product;
  console.log(product);
  const [state, dispatch] = useContext(DataContext);
  console.log(state);
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };
  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="/" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && (
          <div
            className="productCard_description"
            style={{ maxwidth: "750px" }}
          >
            {description}
          </div>
        )}
        <div className={classes.rating}>
          <Rating value={rating?.rate} precision={0.1} />

          {/* count */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price */}

          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
