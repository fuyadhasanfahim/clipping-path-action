import React from "react";
import { CheckIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const services = [
    {
        id: 1,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/Service-image-cycle.webp",
        title: "Clipping Path",
        lists: [
            {
                id: 1,
                list: "Deep Etching",
            },
            {
                id: 2,
                list: "Photoshop Clipping",
            },
            {
                id: 3,
                list: "Cut Out Image Online",
            },
            {
                id: 4,
                list: "Background Removal",
            },
        ],
        color: "#09cbcb",
    },
    {
        id: 2,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/Service-image-dog.webp",
        title: "Image Masking",
        lists: [
            {
                id: 1,
                list: "Layer Masking",
            },
            {
                id: 2,
                list: "Translucent Masking",
            },
            {
                id: 3,
                list: "Portrait Image Masking",
            },
            {
                id: 4,
                list: "Alpha-Channel Masking",
            },
        ],
        color: "#fdd7c8",
    },
    {
        id: 3,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/service-image-model.webp",
        title: "Shadow Adding",
        lists: [
            {
                id: 1,
                list: "Drop Shadow",
            },
            {
                id: 2,
                list: "Natural Shadow",
            },
            {
                id: 3,
                list: "Shadow Recapture",
            },
            {
                id: 4,
                list: "Cast & Long Shadow",
            },
        ],
        color: "#f5a9ff",
    },
    {
        id: 4,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/Service-image-color.webp",
        title: "Color Correction",
        lists: [
            {
                id: 1,
                list: "Color Matching",
            },
            {
                id: 2,
                list: "Exposure & HDR Fixing",
            },
            {
                id: 3,
                list: "Product Color Changing",
            },
            {
                id: 4,
                list: "Product/Skin Smoothing",
            },
        ],
        color: "#fed403",
    },
    {
        id: 5,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/Service-page-car.webp",
        title: "Photo Retouching",
        lists: [
            {
                id: 1,
                list: "Photo Touch-Up",
            },
            {
                id: 2,
                list: "Product Retouching",
            },
            {
                id: 3,
                list: "Model Photo Retouching",
            },
            {
                id: 4,
                list: "Unwanted Object Removal",
            },
        ],
        color: "#60626a",
    },
    {
        id: 6,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/Service-page-bottle.webp",
        title: "Ecommerce Photo Editing",
        lists: [
            {
                id: 1,
                list: "Neck-Joint",
            },
            {
                id: 2,
                list: "Shadow Adding",
            },
            {
                id: 3,
                list: "Cropping Resizing",
            },
            {
                id: 4,
                list: "Background Change",
            },
        ],
        color: "#8ee4a5",
    },
];

const additionalServices = [
    {
        id: 1,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/hairdresser.webp",
        title: "Imperfection Fixing",
        description:
            "We Correct All The Errors In Your Images To Bring It A Better Look.",
    },
    {
        id: 2,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/portrait.webp",
        title: "Portrait Editing",
        description:
            "We Are Equally Adept At Correcting And Tweaking Portrait Images.",
    },
    {
        id: 3,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/earings.webp",
        title: "Jewelry Editing",
        description:
            "Our Experts Can Help Make Your Jewelry Images More Attractive.",
    },
    {
        id: 4,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/3d-movie.webp",
        title: "3D & Video Editing",
        description:
            "We Have A Mastering Of The Required Several 3D & Video Editing Tools.",
    },
];

export default function Service() {
    return (
        <div className="mx-10 h-auto">
            <div className="mx-auto w-full max-w-7xl my-32">
                <div className="space-y-20">
                    <div className="mx-auto  w-full max-w-2xl grid place-items-center space-y-8">
                        <button className="bg-orange-600 px-4 py-2 mx-auto text-center text-2xl font-semibold text-gray-50 rounded-md shadow-md">
                            Service Avenue
                        </button>
                        <div className="text-center text-3xl font-medium">
                            <span className="font-semibold border-b-4 border-orange-400 hover:bg-orange-400 duration-500">
                                High Quality
                            </span>{" "}
                            <br />
                            <span className="relative top-4">
                                Services We Provide
                            </span>
                        </div>
                        <p className="text-center text-lg">
                            Words can't express our service attribute
                            appropriately. Therefore, here is a detail of
                            practical illustrations for you. Have a look at the{" "}
                            <span className="font-semibold">
                                image editing services
                            </span>{" "}
                            we offer and decide why you should use them.
                        </p>
                    </div>

                    <div className="mb-10">
                        <div className="grid grid-cold-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {services.map((service) => {
                                const { title, id, lists, img, color } =
                                    service || {};

                                return (
                                    <a href={`/services/${title}`}>
                                        <div
                                            className="border rounded-lg shadow-md hover:scale-105 duration-300 h-auto relative"
                                            key={id}
                                        >
                                            <div
                                                className="rounded-t-md"
                                                style={{
                                                    backgroundColor: color,
                                                }}
                                            >
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
                                                <ul className="p-4">
                                                    {lists.map((listItem) => {
                                                        const {
                                                            id: listId,
                                                            list,
                                                        } = listItem || {};
                                                        return (
                                                            <div className="flex gap-2 border-b-2 last:border-b-0">
                                                                <CheckIcon className="w-6 text-blue-500" />
                                                                <li
                                                                    key={listId}
                                                                    className="w-full p-2"
                                                                >
                                                                    {list}
                                                                </li>
                                                            </div>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                            <div className="bg-gray-200 px-4 py-2 flex gap-2 relative h-auto">
                                                <div className="flex gap-2 items-center">
                                                    <p>More About {title}</p>
                                                    <ChevronRightIcon className="w-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <div className="text-center text-3xl font-medium mt-20">
                            Checkout Additional <br />
                            <span className="font-semibold border-b-4 border-orange-400 hover:bg-orange-400 duration-500">
                                Services
                            </span>
                            <br />
                        </div>
                        <div className="mt-16">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                                {additionalServices.map((additionalService) => {
                                    const { title, id, description, img } =
                                        additionalService || {};

                                    return (
                                        <div
                                            key={id}
                                            className="px-10 py-6 h-auto rounded-md hover:shadow-md hover:-translate-y-4 duration-300 hover:bg-gradient-to-r from-cyan-500 to-blue-500"
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
                                                    <h3 className="text-center text-xl lg:text-2xl font-medium">
                                                        {title}
                                                    </h3>
                                                    <p className="text-start font-medium">
                                                        {description}
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
