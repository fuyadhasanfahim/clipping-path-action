import React from "react";
import Banners from "./components/shared/Banners";
import Navbar from "./components/shared/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Banners />
            <Navbar />
            <Routes>
                <Route />
            </Routes>
        </BrowserRouter>
    );
}
