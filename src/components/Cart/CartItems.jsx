import { Button } from "flowbite-react";
import { QuantityBtn } from "../Buttons";

const CartItems = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-1">
        <p className="text-lg text-slate-800">{'Apple Pro Max 17"'}</p>
        <p className="text-slate-600">{"NGN" + " 1,250,000"}</p>
      </div>
      <QuantityBtn />
    </div>
  );
};

export const ItemsTotal = () => {
    return(
  <div className="text-sm text-slate-500 flex flex-col gap-8">
    <div className="flex justify-between">
      <p>Items</p>
      <p>{"2,250,000.00"}</p>
    </div>
    <div className="flex justify-between">
      <p>Total</p>
      <p>{"2,250,000.00"}</p>
    </div>
    <Button color="dark">Proceed to Checkout</Button>
  </div>
    )
};

export default CartItems;
