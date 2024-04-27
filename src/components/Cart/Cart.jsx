import { Button, Drawer } from "flowbite-react";
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { ImBin } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import CartItems, { ItemsTotal } from "./CartItems";
import { clearCart } from "../../features/Cart/cartSlice";


export const Cart = () => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false);
  const isCartEmpty = useSelector((state)=>state.cart.isCartEmpty)
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <Button color="light" onClick={() => setIsOpen(true)}>
        <IoCartOutline className="h-4 w-4 mr-2 mt-0.5" /> Cart
      </Button>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        position="right"
        className="md:w-[500px]"
      >
        <Drawer.Header title="Cart" titleIcon={IoCartOutline} />
        <Drawer.Items>
          <div className="min-h-[80vh] flex flex-col justify-between">
            <div
              className={
                isCartEmpty
                  ? "flex flex-col gap-2 md:w-3/5 m-auto mt-8"
                  : "hidden"
              }
            >
              <p className="text-center"> Your Cart is currently empty </p>
              <Button size="lg" color="dark" onClick={() => setIsOpen(false)}>
                COUNTINUE SHOPPING
              </Button>
            </div>
            <div className={isCartEmpty ? "hidden" : "p-4"}>
             <CartItems />
              <div className="flex justify-end mt-2">
                <Button size="sm" color="light" outline onClick={()=> dispatch(clearCart())}>
                  <ImBin className="mr-2 mt-0.5" /> Empty Cart
                </Button>
              </div>
            </div>
            <div className="p-4 border-t-2">
              <div className={isCartEmpty? "text-sm text-slate-500 flex flex-col gap-8" : "hidden"}>
                <div className="flex justify-between">
                  <p>Items</p>
                  <p>{"0.00"}</p>
                </div>
                <div className="flex justify-between">
                  <p>Total</p>
                  <p>{"0.00"}</p>
                </div>
              </div>
              {!isCartEmpty && <ItemsTotal/>}
            </div>
          </div>
        </Drawer.Items>
      </Drawer>
    </div>
  );
};
