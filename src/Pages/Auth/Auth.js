import React, { useState, useContext } from "react";
import classes from "./SignUp.module.css";
import { Type } from "../../Utility/action.type";
import { auth } from "../../FireBase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { clipLoader } from "react-spinners";
import { DataContext } from "../../DataProvider/DataProvider";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);
  const [error, setError] = useState();

  const [loading, setLoading] = useState({
    signIn: false,
    signup: false,
  });
  const [{ user }, dispatch] = useContext(DataContext);
  console.log(user);
  const navigate = useNavigate();
  const navStateData = useLocation();

  console.log(navStateData);

  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);
    if (e.target.name === "signIn") {
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signup: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);

          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });

          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };

  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png"
          alt="Amazon_logo"
        />
      </Link>

      {/* form */}

      <div className={classes.login_container}>
        <h1>Sign In</h1>
        {navStateData?.state?.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}
          >
            {navStateData?.state?.msg}
          </small>
        )}
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            name="signIn"
            onClick={authHandler}
            className={classes.login_signInButton}
          >
            {loading.signIn ? (
              <clipLoaders color="#000" size={15} />
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        {/* agreements */}
        <p>
          BY REGISTERING FOR OR USING THE SERVICE DESCRIBED BELOW, YOU AGREE TO
          BE BOUND BY THE TERMS AND CONDITIONS OF THIS AGREEMENT (INCLUDING ALL
          POLICIES), EACH AS MAY BE MODIFIED FROM TIME TO TIME. IF YOU DO NOT
          AGREE TO THESE TERMS AND CONDITIONS, YOU MAY NOT USE OR ACCESS THE
          SERVICE.
        </p>
        {/* create account btn */}
        <button
          type="submit"
          name="signUp"
          onClick={authHandler}
          className={classes.login_registrationButton}
        >
          {loading.signup ? (
            <clipLoader color="#000" size={15} />
          ) : (
            "  Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
};

export default Auth;
