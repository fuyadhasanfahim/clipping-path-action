import React from "react";

const additionalServices = [
    {
        id: 1,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/quality.webp",
        title: "Professional Quality",
        description:
            "Our team comprises of professional retouchers & image editors.",
    },
    {
        id: 2,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/back-in-time.webp",
        title: "Assured Turnaround Time",
        description:
            "To track progress, your account has a countdown timer for all orders.",
    },
    {
        id: 3,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/countdown.webp",
        title: "Simple Ordering System",
        description:
            "It's easy like 1-2-3. Signup, Upload, & Download. Done Be Happy!",
    },
    {
        id: 4,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/paypal.webp",
        title: "25+ Payment Methods",
        description:
            "No stress on you! We accept virtually all known payment channels.",
    },
];

const paymentMethods = [
    {
        id: 1,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/Credit-Card.svg",
    },
    {
        id: 2,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/paypal.webp",
    },
    {
        id: 3,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/ideal-Mark.svg",
    },
    {
        id: 4,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/SEPA-Mark.svg",
    },
    {
        id: 5,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/GiroPay-Mark.svg",
    },
    {
        id: 6,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/Cartes-Bancaires.svg",
    },
    {
        id: 7,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/Apple-Pay-Mark.svg",
    },
    {
        id: 8,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/Google-Pay-Mark.svg",
    },
    {
        id: 9,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/Bank-Transfer-Mark.svg",
    },
];

export default function WhyUs() {
    return (
        <div className="mx-10 h-auto my-20">
            <div className="mx-auto w-full max-w-7xl my-32">
                <div className="space-y-20">
                    <div className="mx-auto  w-full max-w-4xl grid place-items-center space-y-8">
                        <button className="bg-orange-600 px-4 py-2 mx-auto text-center text-2xl font-semibold text-gray-50 rounded-md shadow-md">
                            Strength
                        </button>
                        <div className="text-center text-3xl font-medium">
                            <span className="font-semibold border-b-4 border-orange-400 hover:bg-orange-400 duration-500">
                                Why Cut Out Image?
                            </span>
                        </div>
                        <p className="text-center text-lg">
                            <span className="font-semibold">Photo Cut Out</span>{" "}
                            is one of the preconditions for winning the online
                            market competition. We have many years of working
                            experience under our belt, providing the service
                            with 100% accuracy. Shape your business with our
                            service. Learn more of our strong points here.
                        </p>
                    </div>

                    <div>
                        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                            {additionalServices.map((additionalService) => {
                                const { title, id, description, img } =
                                    additionalService || {};

                                return (
                                    <div
                                        key={id}
                                        className="px-10 py-6 h-auto w-full rounded-md hover:shadow-md hover:-translate-y-4 duration-300 hover:bg-gradient-to-r from-cyan-500 to-blue-500"
                                    >
                                        <a
                                            href={`/services/${title}`}
                                            className="space-y-4"
                                        >
                                            <div className="w-14 mx-auto">
                                                <img
                                                    src={img}
                                                    alt={title}
                                                    className="w-20"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="text-center text-lg font-semibold inline-block w-full">
                                                    {title}
                                                </h3>
                                                <p className="text-center font-medium">
                                                    {description}
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="my-16 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 place-content-center gap-5 mx-auto w-auto">
                            {paymentMethods.map((payment) => {
                                const { id, img } = payment || {};

                                return (
                                    <div
                                        key={id}
                                        className="p-6 ring-1 ring-gray-900/5 h-auto w-full max-w-36 rounded-md shadow-md hover:-translate-y-4 duration-300 bg-white mx-auto"
                                    >
                                        <div className="mx-auto">
                                            <img
                                                src={img}
                                                alt="payment method"
                                                className="w-full min-w-10 h-auto"
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
