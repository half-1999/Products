import React from "react";
import "./Products.css";
import HeroBanner from "./HeroBanner";
import AllProducts from "./AllProducts";
import FooterBanner from "./FooterBanner";
const Products = () => {
  return (
    <>
      <div className="navbar-container">
        <HeroBanner />
        <div class="products-heading">
          <span>Best Seller Products</span>
          <p>speaker There are many variations passages</p>
        </div>
        <AllProducts />
        <FooterBanner />
      </div>
    </>
  );
};

export default Products;
