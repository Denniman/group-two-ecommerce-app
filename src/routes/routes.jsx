import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Store } from "../pages";

export function RootRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path="store/:storeName" element={<Store />} />
            </Routes>
        </BrowserRouter>
    );
}
