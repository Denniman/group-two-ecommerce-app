import { useEffect, Fragment } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../components";

import { LoadingSpiner, ProductsList } from "../../components";

import { addToCart } from "../../providers/cart";

import { getProducts } from "../../providers/products";

export const Store = () => {
    const dispatch = useDispatch();
    const { isLoading, products, storeName } = useSelector(
        (state) => state.products
    );
    const { pathname } = useLocation();
    const enteredStoreName = pathname.split("/")[1];

    console.log("isLoading", isLoading);
    console.log("products", products);

    useEffect(() => {
        if (!products.length) {
            dispatch(getProducts({ storeName: enteredStoreName }));
        }
    }, [dispatch, products, enteredStoreName]);

    if (isLoading) {
        return <LoadingSpiner />;
    }

    return (
        <Fragment>
            {storeName && <Header storeName={storeName} />}

            <main>
                {products.length > 0 &&
                    products.map((productItems) => {
                        return (
                            <ProductsList
                                key={productItems.id}
                                {...productItems}
                                addToCart={(product) =>
                                    dispatch(addToCart(product))
                                }
                            />
                        );
                    })}
            </main>
        </Fragment>
    );
};
