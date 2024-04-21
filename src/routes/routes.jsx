import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages";

export function RootRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/:subdirectory" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
