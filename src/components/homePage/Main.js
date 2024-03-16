import React from "react";
import Carousal from "./Carousal";

export default function Main() {
    return (
        <main className="mx-10 h-screen md:h-[70vh] grid place-items-center">
            <div className="w-full max-w-7xl mx-auto h-full grid place-items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 place-items-center items-center overflow-hidden">
                    <div className="w-auto max-w-[600px] space-y-4 p-4">
                        <div className="mb-6 space-y-2">
                            <h4 className="text-orange-600 text-2xl font-bold uppercase">
                                Clipping Path Action:
                            </h4>
                            <h2 className="text-3xl font-semibold">
                                Photo Clipping Path Service Provider
                            </h2>
                        </div>
                        <h5 className="text-xl">
                            High-End{" "}
                            <span className="font-semibold">
                                Retouching, Post Production,
                            </span>{" "}
                            &{" "}
                            <span className="font-semibold border-b-4 border-yellow-400 hover:bg-yellow-400 duration-500">
                                E-commerce Solution
                            </span>{" "}
                            - all from one source.
                        </h5>
                        <div className="text-lg font-normal mt-4">
                            <span className="font-semibold">
                                Clipping Path Service
                            </span>{" "}
                            is your one-stop location for superfast, incredibly
                            affordable, and 100% handmade image editing service!
                        </div>
                        <div className="text-lg font-normal mt-4">
                            Boost your online sales by employing our best
                            E-commerce Product photo editing and retouching
                            service.
                        </div>
                        <div className="mt-6 text-xl">
                            STARTING AT{" "}
                            <span className="text-3xl font-bold">50¢</span> PER
                            IMAGE
                        </div>

                        <div className="space-x-6">
                            <a href="/free-trail">
                                <button className="px-4 py-2 bg-orange-600 rounded-md shadow-md text-lg font-medium text-gray-100">
                                    Free Trail
                                </button>
                            </a>
                            <a href="/login">
                                <button className="px-4 py-2 bg-orange-600 rounded-md shadow-md text-lg font-medium text-gray-100">
                                    Get Quote
                                </button>
                            </a>
                        </div>
                    </div>
                    <div>
                        <Carousal />
                    </div>
                </div>
            </div>
        </main>
    );
}
