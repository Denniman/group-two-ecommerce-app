import { useState } from "react";
import { ImBin } from "react-icons/im";
import { useSelector } from "react-redux";
import { Button, Drawer } from "flowbite-react";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlinePlusSm } from "react-icons/hi";
import { HiMiniMinusSmall } from "react-icons/hi2";

import { QuantityBtn } from "../Buttons";
import { formatPrice } from "../../helper";

export const Cart = () => {
    const { items } = useSelector((state) => state.cart);
    const [isOpen, setIsOpen] = useState(false);

    const isCartEmpty = true;

    console.log("items", items);
    const cartItemsCount = items?.length;
    const emptyCart = items.length < 1;

    const handleClose = () => setIsOpen(false);

    const totalPrice = items.reduce((accu, curr) => accu + curr.amount, 0);

    return (
        <div>
            <Button color="light" onClick={() => setIsOpen(true)}>
                <IoCartOutline className="h-4 w-4 mr-2 mt-0.5" /> Cart
                <div className="bg-red-600 text-sm ml-2 text-white rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                </div>
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
                        {emptyCart && (
                            <div
                                className={
                                    isCartEmpty
                                        ? "flex flex-col gap-2 md:w-3/5 m-auto mt-8"
                                        : "hidden"
                                }
                            >
                                <p className="text-center">
                                    Your Cart is currently empty
                                </p>
                            </div>
                        )}

                        <ul className="flex flex-col gap-5">
                            {items.length &&
                                items.map(
                                    ({ quantity, id, amount, productName }) => (
                                        <li
                                            className="text-sm w-full flex justify-between "
                                            key={id}
                                        >
                                            <div>
                                                <p>{productName}</p>

                                                <p className="font-semibold">
                                                    ₦{formatPrice(amount)}
                                                </p>
                                            </div>
                                            <div className="justify-self-end flex items-center justify-center gap-4">
                                                <Button className="rounded-full h-7 w-7 flex items-center justify-center border border-gray-400 bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800">
                                                    <HiMiniMinusSmall />
                                                </Button>
                                                <span className=" text-center">
                                                    {quantity}
                                                </span>

                                                <Button className="rounded-full h-7 w-7 flex items-center justify-center border border-gray-400 bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800">
                                                    <HiOutlinePlusSm />
                                                </Button>
                                            </div>
                                        </li>
                                    )
                                )}
                        </ul>
                        <div className={isCartEmpty ? "hidden" : "p-4"}>
                            <div className="flex justify-between">
                                <div className="flex flex-col gap-1">
                                    <p className="text-lg text-slate-800">
                                        {'Apple Pro Max 17"'}
                                    </p>
                                    <p className="text-slate-600">
                                        {"NGN" + " 1,250,000"}
                                    </p>
                                </div>
                                <QuantityBtn />
                            </div>
                            <div className="flex justify-end mt-2">
                                <Button size="sm" color="light" outline>
                                    <ImBin className="mr-2 mt-0.5" /> Empty Cart
                                </Button>
                            </div>
                        </div>
                        <div className="p-4 border-t-2 w-full">
                            <div className="text-sm text-slate-500 flex flex-col gap-8">
                                <div className="flex justify-between">
                                    <p>Items</p>
                                    <p>{cartItemsCount}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Total</p>
                                    <p>
                                        ₦
                                        {emptyCart
                                            ? 0
                                            : formatPrice(totalPrice)}
                                    </p>
                                </div>
                            </div>

                            <Button
                                className="w-full mt-5"
                                size="lg"
                                color="dark"
                                onClick={() => setIsOpen(false)}
                            >
                                COUNTINUE
                            </Button>
                        </div>
                    </div>
                </Drawer.Items>
            </Drawer>
        </div>
    );
};
