import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";

import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51OiYY2DpGroln9ynzXCdxvT95h1i9gMuUoJtZ7RdSc5foA2Fi0MiDaXNyZALYcRg99zm3KZYQLvCcmqe2ynbliW500Jxxa1BCK"
);
// s;
const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payment"
          element={
            <ProtectedRoute
              msg={"you must log in to pay"}
              redirect={"/payment"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/Orders"
          element={
            <ProtectedRoute
              msg={"you must log in to access your orders"}
              redirect={"/payment"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Category/:categoryName" element={<Results />} />
        <Route path="/Products/:ProductId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default Routing;
