import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const ProductCard = ({ product: { image, name, price } }) => {
  return (
    <div>
      <Link to={`/product/${encodeURIComponent(name)}`}>
        <div className="product-card">
          <img
            src={image}
            width="250"
            height="250"
            className="product-image"
            alt={name}
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

const AllProducts = () => {
  const dummyProducts = [
    {
      name: "Speaker",
      image:
        "https://cdn.sanity.io/images/vfxfwnaw/production/9c6162564225f2fd12c9abd439ce80e5df0986d4-800x800.webp",
      price: 56,
    },
    {
      name: "SmartWatch",
      image:
        "https://cdn.sanity.io/images/vfxfwnaw/production/8aa3c4242c30718c8add3cd373c2945908356f4a-600x600.webp",
      price: 86,
    },
    {
      name: "Cool_In-ear_headphones",
      image:
        "https://cdn.sanity.io/images/vfxfwnaw/production/07fd4b12012f56f93ee9c5090a09754b4d8ee9dd-600x600.webp",
      price: 76,
    },
    {
      name: "HeadPhones",
      image:
        "https://cdn.sanity.io/images/vfxfwnaw/production/058225fc820fe15a1c63697367a905959a5f32a6-555x555.webp",
      price: 46,
    },
    {
      name: "EarthPot",
      image: "https://drive.google.com/uc?id=1n2qKjhGNoLyG0gq0RT2n1zhVf98Hn5Mb",
      price: 56,
    },
    {
      name: "EarthPot",
      image: "https://drive.google.com/uc?id=17MNUIKsHhKwzgpnbMa7W5X_tO74LJ5aE",
      price: 56,
    },
    {
      name: "EarthPot",
      image: "https://drive.google.com/uc?id=1z6MBkrdn_oY5XJ8RdBv7a3MMpkuJ4enE",
      price: 56,
    },
    {
      name: "EarthPot",
      image: "https://drive.google.com/uc?id=1MAAHsydFoaDUENIALzXffLNE6Qtn89Ae",
      price: 56,
    },
  ];

  return (
    <div>
      <div className="products-container">
        {dummyProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
