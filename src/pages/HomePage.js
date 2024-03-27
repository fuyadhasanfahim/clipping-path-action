import React from "react";
import Main from "../components/homePage/Main";
import Stats from "../components/homePage/Stats";
import BrandLogo from "../components/homePage/BrandLogo";
import Service from "../components/homePage/Service";
import Portfolio from "../components/homePage/Portfolio";
import Skills from "../components/homePage/Skills";
import GiveATry from "../components/homePage/GiveATry";
import WhyUs from "../components/homePage/WhyUs";
import Reviews from "../components/homePage/Reviews";
import FreeTrail from "../components/homePage/FreeTrail";
import TakeMe from "../components/homePage/TakeMe";

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
            <Reviews />
            <FreeTrail />
            <TakeMe />
        </>
    );
}
