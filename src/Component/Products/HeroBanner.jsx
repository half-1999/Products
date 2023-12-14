import React from "react";
import { Link } from "react-router-dom";

import { urlFor } from "./urlFor.jsx";
import "./HeroBanner.css";

const HeroBanner = () => {
  const heroBanner = {
    buttonText: "Shop Now",
    desc: "Best headphones on the market",
    discount: "20% OFF",
    // image: {
    //   _type: "image",
    //   asset: {
    //     _ref: "image-a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555-webp",
    //     _type: "reference",
    //   },
    // },
    largeText1: "FINE",
    largeText2: "SMILE",
    midText: "Summer Sale",
    product: "headphones",
    saleTime: "15 Nov to 7 Dec",
    smallText: "Beats Solo Air",
    _createdAt: "2022-04-09T14:45:31Z",
    _id: "3cc34e70-94d3-4e90-946e-e014f3e263fb",
    _rev: "BM1A6k1ZxVmyLJbhBzZjkw",
    _type: "banner",
    _updatedAt: "2022-04-09T14:45:31Z",
  };

  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img
          src="https://cdn.sanity.io/images/vfxfwnaw/production/058225fc820fe15a1c63697367a905959a5f32a6-555x555.webp"
          alt="mic"
          className="hero-banner-image"
        />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
