import React, { useContext, useState, useEffect } from "react";
import classes from "./Orders.module.css";
import LayOut from "../../Layout/Layout";
import { db } from "../../FireBase";
import { DataContext } from "../../DataProvider/DataProvider";
import ProductCard from "../../Product/ProductCard";
const Orders = () => {
  const [{ user }, dispatch] = useContext(DataContext);
  const [order, setOrder] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapShot) => {
          console.log(snapShot);
          setOrder(
            snapShot.docs.map((doc) => {
              return { id: doc.id, data: doc.data() };
            })
          );
        });
    } else {
      setOrder([]);
    }
  }, []);
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.Orders_container}>
          {" "}
          <h2>Your Orders</h2>
          {Orders?.length === 0 && (
            <div style={{ padding: "20px" }}>you don't have orders yet.</div>
          )}
          {/* ordered items */}
          <div>
            {order?.map((eachOrder, i) => {
              return (
                <div key={i}>
                  <hr />
                  <p>Order ID:(eachOrder?.id)</p>
                  {eachOrder?.data?.basket?.map((order) => {
                    return (
                      <ProductCard flex={true} product={order} key={order.id} />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </LayOut>
  );
};

export default Orders;
