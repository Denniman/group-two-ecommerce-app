import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    FLUSH,
    PURGE,
    PERSIST,
    REHYDRATE,
    persistStore,
    persistReducer,
} from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import { CACHE_VERSION, __ROOT_REDUX_STATE_KEY__ } from "../../constants";

import productsSlice from "../products";
import cartSlice from "../cart";

const persistConfig = {
    timeout: 10000,
    version: CACHE_VERSION,
    storage: sessionStorage,
    key: __ROOT_REDUX_STATE_KEY__,
};

const rootReducer = combineReducers({
    products: productsSlice,
    cart: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PERSIST, PURGE],
            },
        }),
});

const persistor = persistStore(store);
export { persistor, store };
