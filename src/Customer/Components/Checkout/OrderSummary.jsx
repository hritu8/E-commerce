import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/Cartitem";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../stateRedux/Order/Action";
import { useLocation } from "react-router-dom";
import { createPayment } from "../../../stateRedux/Payment/Action";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { order } = useSelector((store) => store);
  const searchParams = new URLSearchParams(location.search);
  console.log("order order", order);
  const orderId = searchParams.get("order_id");
  console.log("order id", orderId);
  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  const handleCheckout = () => {
    dispatch(createPayment(orderId));
  };
  console.log("order order", order);
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard address={order.order?.shippingAddress} />
      </div>
      <div>
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
          <div className="col-span-2">
            {order.order?.orderItems?.map((item) => (
              <>
                {console.log("item to cart", item)}
                <CartItem item={item} />
              </>
            ))}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border">
              <p className="uppercase font-bold opacity-60 pb-4">
                Price Details
              </p>
              <hr />
              <div className="space-y-3 font-semibold mb-10">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>{order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Discount</span>
                  <span className=" text-green-600">
                    -{order.order?.discount}
                  </span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span>Delivery charge</span>
                  <span className=" text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3  font-bold ">
                  <span>Total Amount</span>
                  <span className=" text-green-600">
                    {order.order?.totalDiscountedPrice}
                  </span>
                </div>
              </div>
              <Button
                onClick={handleCheckout}
                variant="contained"
                className="w-full mt-5"
                sx={{ px: "2.5rem", py: "1rem", bgcolor: "#9155fd" }}
              >
                CHECKOUT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
