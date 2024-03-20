import React from "react";
import Main from "../components/homePage/Main";
import Stats from "../components/homePage/Stats";
import BrandLogo from "../components/homePage/BrandLogo";
import Service from "../components/homePage/Service";
import Portfolio from "../components/homePage/Portfolio";

export default function HomePage() {
    return (
        <>
            <Main />
            <Stats />
            <BrandLogo />
            <Service />
            <Portfolio />
        </>
    );
}
