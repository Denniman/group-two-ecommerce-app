import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "sonner";
import { Card } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { HiOutlinePlusSm } from "react-icons/hi";

import { formatPrice } from "../../helper";

import { increaseQuantity } from "../../providers/cart";

export const ProductsList = ({
    id,
    amount,
    quantity,
    addToCart,
    category,
    description,
    productName,
    productImage,
}) => {
    const dispatch = useDispatch();
    const [productQuantity, setProductQuantity] = useState(1);
    const { settings } = useSelector((state) => state.products);

    const handleProductQuantity = () => {
        if (productQuantity >= quantity) {
            toast.error(
                "Sorry, you can't exceed the total units of the product"
            );
            return;
        } else {
            setProductQuantity((prev) => Math.min(prev + 1, quantity));
            dispatch(increaseQuantity({ id, quantity: productQuantity }));
        }
    };

    const handleDecreaseQuantity = () => {
        setProductQuantity((prev) => Math.max(prev - 1, 1));
    };

    return (
        <div
            style={{ color: `${settings.color}` }}
            className="flex justify-center items-center gap-5"
        >
            <div>
                <h1 className="text-base subpixel-antialiased uppercase font-semibold tracking-tight mt-5 ">
                    {category.categoryName} / {productName}
                </h1>
                <Card
                    className="max-w-md w-[30rem]"
                    imgAlt={productImage}
                    imgSrc={productImage}
                >
                    <h5 className="text-xl font-semibold tracking-tight dark:text-white">
                        {productName}
                    </h5>
                    <p>{description}</p>

                    <div className="mb-5 mt-2.5 flex justify-between items-center">
                        <div className="flex">
                            <svg
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                                5.0
                            </span>
                        </div>
                        <div>
                            <p className="text-sm text-center">Quantity </p>
                            <button onClick={handleDecreaseQuantity}>
                                <HiMiniMinusSmall />
                            </button>
                            <span className="mx-4">{productQuantity}</span>
                            <button onClick={handleProductQuantity}>
                                <HiOutlinePlusSm />
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-xl  font-bold  dark:text-white">
                            ₦{formatPrice(amount)}
                        </span>
                        <button
                            onClick={() =>
                                addToCart({
                                    id,
                                    amount,
                                    productName,
                                    quantity: productQuantity,
                                })
                            }
                            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                        >
                            Add to cart
                        </button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

ProductsList.propTypes = {
    id: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    addToCart: PropTypes.func.isRequired,
    category: PropTypes.object.isRequired,
    productImage: PropTypes.string.isRequired,
};
