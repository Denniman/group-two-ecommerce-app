import { useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
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

    const { storeName: store } = useParams();

    useEffect(() => {
        if (!products.length) {
            dispatch(getProducts({ storeName: store }));
        }
    }, [dispatch, products, store]);

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
