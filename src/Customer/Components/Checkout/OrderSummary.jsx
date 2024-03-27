import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import Cartitem from "../Cart/Cartitem";
import { Button } from "@mui/material";

const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard />
      </div>
      <div>
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
          <div className="col-span-2">
            {[1, 1, 1, 1].map((item) => (
              <Cartitem />
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
                  <span>1241</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Discount</span>
                  <span className=" text-green-600">-100</span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span>Delivery charge</span>
                  <span className=" text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3  font-bold ">
                  <span>Total Amount</span>
                  <span className=" text-green-600">1141</span>
                </div>
              </div>
              <Button
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
