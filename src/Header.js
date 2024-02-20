import React, { useContext } from "react";
import "./Header.module.css";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHead from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "./DataProvider/DataProvider";
import { auth } from "./FireBase";
const Header = () => {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  console.log(basket.length);
  return (
    <section className={classes.fixed}>
      <div className={classes.header_container}>
        <Link to="/">
          <img
            className={classes.logo_container}
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon logo"
          />
        </Link>

        <div className={classes.delivery}>
          {/* delivery */}
          <span>
            <SlLocationPin />
          </span>
          <div>
            <p>Deliver to</p>
            <span>Ethiopia</span>
          </div>
        </div>

        <div className={classes.search}>
          {/* search */}
          <select name="" id="">
            <option value="">all</option>
          </select>
          <input type="text" name="" id="" placeholder="search Amazon" />
          <BsSearch size={35} />
        </div>

        <div>
          <div className={classes.order_container}>
            <Link to="/" className={classes.language}>
              <img
                src="https://www.shutterstock.com/shutterstock/photos/157626554/display_1500/stock-vector-vector-image-of-american-flag-157626554.jpg"
                alt=""
              />

              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>

            <Link to={user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello,{user?.email?.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>SignOut</span>
                  </>
                ) : (
                  <>
                    <p>Hello,Sign In </p>
                    <span>account&List</span>
                  </>
                )}
              </div>
              <div>{/* <span>account&List</span> */}</div>
            </Link>
            {/* order */}
            <Link to="/Orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/Cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </div>
      <LowerHead />
    </section>
  );
};

export default Header;

// git rm -r folder-name
