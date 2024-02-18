import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import classes from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductUrl } from "../../Api/endPoint";
import ProductCard from "../../Product/ProductCard";
import Loader from "../../Loader/Loader";

const ProductDetail = () => {
  const { ProductId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  console.log(ProductId);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${ProductUrl}/products/${ProductId}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </Layout>
  );
};

export default ProductDetail;
