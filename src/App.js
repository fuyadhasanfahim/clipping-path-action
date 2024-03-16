import React from "react";
import "./App.css";
import Banners from "./components/shared/Banners";
import Navbar from "./components/shared/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
    return (
        <BrowserRouter>
            <Banners />
            <Navbar />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}
