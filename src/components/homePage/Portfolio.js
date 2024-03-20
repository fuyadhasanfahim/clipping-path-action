import React from "react";

const images = [
    {
        id: 1,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/sample_work_gellary-derss.webp",
    },
    {
        id: 2,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/home-gellary-plant.webp",
    },
    {
        id: 3,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/bangle-squre.webp",
    },
    {
        id: 4,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/color_pallate_box_service.webp",
    },
    {
        id: 5,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/sample_work_gellary-sunglass.webp",
    },
    {
        id: 6,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/service_gellary-lamp-1.webp",
    },
    {
        id: 7,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/sample_work_gellary-masking.webp",
    },
    {
        id: 8,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/sample_work_gellary-wine-glass.webp",
    },
    {
        id: 9,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/sample_work_gellary-bag.webp",
    },
    {
        id: 10,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/sample_work_gellary-dog.webp",
    },
    {
        id: 11,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/home-gellary-ring.webp",
    },
    {
        id: 12,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/sample_work_gellary-shoe.webp",
    },
];

export default function Portfolio() {
    return (
        <div className="my-20 mx-10">
            <div className="w-full max-w-7xl mx-auto">
                <div>
                    <div className="mx-auto  w-full max-w-2xl grid place-items-center space-y-8">
                        <button className="bg-orange-600 px-4 py-2 mx-auto text-center text-2xl font-semibold text-gray-50 rounded-md shadow-md">
                            Portfolio
                        </button>
                        <div className="text-center text-3xl font-medium">
                            <span className="font-semibold border-b-4 border-orange-400 hover:bg-orange-400 duration-500">
                                Sample
                            </span>{" "}
                            Work
                        </div>
                        <p className="text-center text-lg">
                            At{" "}
                            <span className="font-semibold">Cut Out Image</span>{" "}
                            Cut Out Image, we don't just talk the big talk; we
                            walk our talks too. Check out our portfolio to
                            attest to our expertise firsthand.
                        </p>
                    </div>

                    <div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10 mt-20">
                            {images.map((image) => {
                                const { id, img } = image || {};

                                return (
                                    <div key={id} className="w-full max-w-64">
                                        <img
                                            src={img}
                                            alt="img"
                                            className="rounded-md"
                                        />
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
