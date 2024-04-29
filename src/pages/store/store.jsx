import { useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "../../components";
import { LoadingSpiner, ProductsList } from "../../components";

import { addToCart } from "../../providers/cart";

import { getProducts } from "../../providers/products";

export const Store = () => {
    const dispatch = useDispatch();
    const { isLoading, products, storeName, settings } = useSelector(
        (state) => state.products
    );

    const { storeName: store } = useParams();
    const productsCount = products.length < 1;

    useEffect(() => {
        if (productsCount) {
            dispatch(getProducts({ storeName: store }));
        }
    }, [dispatch, productsCount, store]);

    if (isLoading) {
        return <LoadingSpiner />;
    }

    return (
        <Fragment>
            {storeName && <Header storeName={storeName} />}

            <main
                className="mt-20"
                style={{
                    backgroundColor: `${settings?.backgroundColor}`,
                }}
            >
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
