import React from "react";
import CarouselEffect from "../../Carsouel/CarouselEffect";
import Product from "../../Product/Product";
import Category from "../../Category/Category";
import Layout from "../../Layout/Layout";

const Landing = () => {
  return (
    <Layout>
      <CarouselEffect />
      <Category />
      <Product />
    </Layout>
  );
};

export default Landing;
