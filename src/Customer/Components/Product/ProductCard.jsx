import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const {
    title,
    brand,
    imageUrl,
    price,
    discountedPrice,
    color,
    discountPercent,
  } = product;

  return (
    <div
      onClick={() => navigate(`/product/${5}`)}
      className="productCard w-[15rem] m-3 transition-all cursor-pointer"
    >
      <div className="h-[20rem]">
        <img
          className="w-full h-full  object-cover object-left-top "
          src={imageUrl}
          alt="tshirt"
        />
      </div>

      <div>
        <div className="textPart bg-white p-3">
          <p className="font-bold opacity-60">{brand}</p>
          <p>{title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">₹{discountedPrice}</p>
          <p className="line-through opacity-50">{price}</p>
          <p className="text-green-600 font-semibold">{discountPercent}% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
