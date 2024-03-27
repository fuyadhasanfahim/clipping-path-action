import React from "react";

export default function Skills() {
    return (
        <div className="mx-10 h-auto my-20">
            <div className="mx-auto w-full max-w-7xl my-32">
                <div className="space-y-20">
                    <div className="mx-auto  w-full max-w-4xl grid place-items-center space-y-8">
                        <button className="bg-orange-600 px-4 py-2 mx-auto text-center text-2xl font-semibold text-gray-50 rounded-md shadow-md">
                            True Numbers
                        </button>
                        <div className="text-center text-3xl font-medium">
                            The Evidence of{" "}
                            <span className="font-semibold border-b-4 border-orange-400 hover:bg-orange-400 duration-500">
                                Our Skills
                            </span>
                        </div>
                        <p className="text-center text-lg">
                            Beautifully, our numbers attest to the top-notch
                            quality of our{" "}
                            <span className="font-semibold">cut out photo</span>{" "}
                            work at Cut Out Image. That is why we have processed
                            around 1 million images for over 3K repeat clients
                            and completed over 15K orders.
                        </p>
                    </div>

                    <div>
                        <div className="grid lg:grid-cols-3 gap-10 grid-cols-1 mx-auto text-center">
                            <div className="space-y-2">
                                <h1 className="text-5xl lg:text-6xl font-semibold text-orange-500">
                                    4500+
                                </h1>
                                <p className="text-xl font-medium">
                                    Clients On-Boarded
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-5xl lg:text-6xl font-semibold text-orange-500">
                                    18000+
                                </h1>
                                <p className="text-xl font-medium">
                                    Orders Completed
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-5xl lg:text-6xl font-semibold text-orange-500">
                                    0.85M+
                                </h1>
                                <p className="text-xl font-medium">
                                    Images Processed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
