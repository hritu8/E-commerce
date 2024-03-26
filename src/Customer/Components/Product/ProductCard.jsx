import React from "react";
import "./ProductCard.css";
const ProductCard = ({ data }) => (
  <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
    <div className="h-[20rem]">
      <img
        className="w-full h-full  object-cover object-left-top "
        src={data.imageUrl}
        alt="tshirt"
      />
    </div>

    <div>
      <div className="textPart bg-white p-3">
        <p className="font-bold opacity-60">{data.brand}</p>
        <p>{data.title}</p>
      </div>
      <div className="flex items-center space-x-2">
        <p className="font-semibold">₹{data.discountedPrice}</p>
        <p className="line-through opacity-50">{data.price}</p>
        <p className="text-green-600 font-semibold">
          {data.discountpercent}% off
        </p>
      </div>
    </div>
  </div>
);

export default ProductCard;
