import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const services = [
    {
        id: 1,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/COI-Service-Dashborad.webp",
        title: "Clipping Path",
        description:
            "You can monitor your orders in real-time and notify our support if you require any changes. Sign Up Today!",
        foot: "Visit Client Dashboard",
    },
    {
        id: 2,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/COI-Help-Center-Module.webp",
        title: "Image Masking",
        description:
            "Our client service is always on hand to answer all your queries. Plus, our Help Center can walk you through every step of our processes.",
        foot: "Visit Help Center",
    },
    {
        id: 3,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/COI-E-commerce-Passport.webp",
        title: "Shadow Adding",
        description:
            "We can help you if you need hands-off image editing for your e-commerce and affiliate businesses. Keep Reading!",
        foot: "Read The Blog",
    },
];

export default function TakeMe() {
    return (
        <div className="mx-10 h-auto">
            <div className="mx-auto w-full max-w-7xl my-32">
                <div className="space-y-20">
                    <div className="mx-auto  w-full max-w-2xl grid place-items-center space-y-8">
                        <div className="text-center text-3xl font-medium">
                            Take Me{" "}
                            <span className="font-semibold border-b-4 border-orange-400 hover:bg-orange-400 duration-500">
                                Further!
                            </span>
                        </div>
                        <p className="text-center text-lg">
                            Do you want to know more about our image{" "}
                            <span className="font-semibold">
                                cut out services
                            </span>{" "}
                            and customer support?
                        </p>
                    </div>

                    <div className="mb-10">
                        <div className="grid grid-cold-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {services.map((service) => {
                                const { title, id, description, img, foot } =
                                    service || {};

                                return (
                                    <a href={`/services/${title}`}>
                                        <div
                                            className="border rounded-lg shadow-md hover:scale-105 duration-300 h-auto relative"
                                            key={id}
                                        >
                                            <div className="rounded-t-md">
                                                <img
                                                    src={img}
                                                    alt={title}
                                                    className="w-full"
                                                />
                                            </div>
                                            <div className="">
                                                <h3 className="text-2xl lg:text-3xl font-medium text-center p-4 border-b-2">
                                                    {title}
                                                </h3>
                                                <div className="h-42 p-6 grid place-content-center text-center">
                                                    <p>{description}</p>
                                                </div>
                                            </div>
                                            <div className="bg-gray-200 px-4 py-2 flex gap-2 relative h-auto">
                                                <div className="flex gap-2 items-center">
                                                    <p>{foot}</p>
                                                    <ChevronRightIcon className="w-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
