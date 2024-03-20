import React from "react";
import "./App.css";
import Banners from "./components/shared/Banners";
import Navbar from "./components/shared/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
    return (
        <BrowserRouter>
            <Banners />
            <Navbar />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/sign-up" element={<SignUpPage />} />
                <Route exact path="/contact-us" element={<ContactPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}
