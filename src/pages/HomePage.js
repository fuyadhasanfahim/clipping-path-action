import React from "react";
import Main from "../components/homePage/Main";
import Stats from "../components/homePage/Stats";
import BrandLogo from "../components/homePage/BrandLogo";
import Service from "../components/homePage/Service";
import Portfolio from "../components/homePage/Portfolio";
import Skills from "../components/homePage/Skills";
import GiveATry from "../components/homePage/GiveATry";
import WhyUs from "../components/homePage/WhyUs";

export default function HomePage() {
    return (
        <>
            <Main />
            <Stats />
            <BrandLogo />
            <Service />
            <Portfolio />
            <Skills />
            <GiveATry />
            <WhyUs />
        </>
    );
}
