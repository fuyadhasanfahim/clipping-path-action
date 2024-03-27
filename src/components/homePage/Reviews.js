import React from "react";

const reviews = [
    {
        id: 1,
        name: "Alina Holtmann",
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/03/alinaholtmann.webp",
        description:
            "I found the service of Cut Out Image excellent! They cut out some of the very complex images and saved me a lot of time. I would definitely recommend them to anyone. It was a really pleasant experience to work with them and I am looking forward to future projects. Thank you Cut Out Image!",
        location: "Germany",
    },
    {
        id: 2,
        name: "Mark Gjaltema",
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/03/Mark.webp",
        description:
            "I was very happy with the provided… I was very happy with the provided service. It was a job that would have taken me a lot of time to do it and I could not even have done it as perfectly as Atik did.Also I was very happy that Atik didn't mind making another change to the So yes: I would definitely recommend this service!",
        location: "Netherlands",
    },
    {
        id: 3,
        name: "Neil Stephenson",
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/03/Neil_Stephenson.webp",
        description:
            "I had a photoshoot that was held inside under extremely challenging lighting conditions. I needed accurate cutouts of clothing & hair so I could further edit in Photoshop's Camera Raw workspace. Cut Out Image was quick and their work was perfect for my purposes, coming in exactly as quoted cost-wise too.",
        location: "United Kingdom",
    },
];

export default function Reviews() {
    return (
        <>
            <div>
                <h2 className="text-2xl leading-6 text-gray-800 text-center px-4">
                    Testimonials
                </h2>
                <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10 text-gray-800 mt-6 text-center">
                    What our client says
                </h1>
                <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:px-20 px-10 py-20 gap-6">
                    {reviews.map((review) => {
                        const { id, img, name, description, location } =
                            review || {};

                        return (
                            <div key={id}>
                                <div className="group w-full bg-white relative flex flex-col items-center hover:bg-orange-600 cursor-pointer shadow-md md:p-12 p-6 duration-300 rounded-xl ring-1 ring-gray-900/5">
                                    <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                                        <svg
                                            width={26}
                                            height={27}
                                            viewBox="0 0 26 27"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0)">
                                                <path
                                                    d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z"
                                                    fill="currentColor"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect
                                                        width="24.5767"
                                                        height={27}
                                                        fill="white"
                                                        transform="translate(25.2578 27) rotate(-180)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p className="xl:w-80 text-base leading-normal text-center mt-4">
                                            {description}
                                        </p>
                                    </div>
                                    <div className="text-white group-hover:text-orange-600 absolute bottom-0 -mb-6 duration-300">
                                        <svg
                                            width={34}
                                            height={28}
                                            viewBox="0 0 34 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g filter="url(#filter0_dd)">
                                                <path
                                                    d="M17 19L28.2583 3.25H5.74167L17 19Z"
                                                    fill="currentColor"
                                                />
                                            </g>
                                            <defs>
                                                <filter
                                                    id="filter0_dd"
                                                    x="0.741699"
                                                    y="0.25"
                                                    width="32.5167"
                                                    height="27.75"
                                                    filterUnits="userSpaceOnUse"
                                                    colorInterpolationFilters="sRGB"
                                                >
                                                    <feFlood
                                                        floodOpacity={0}
                                                        result="BackgroundImageFix"
                                                    />
                                                    <feColorMatrix
                                                        in="SourceAlpha"
                                                        type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                    />
                                                    <feMorphology
                                                        radius={1}
                                                        operator="erode"
                                                        in="SourceAlpha"
                                                        result="effect1_dropShadow"
                                                    />
                                                    <feOffset dy={4} />
                                                    <feGaussianBlur
                                                        stdDeviation={3}
                                                    />
                                                    <feColorMatrix
                                                        type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                                    />
                                                    <feBlend
                                                        mode="normal"
                                                        in2="BackgroundImageFix"
                                                        result="effect1_dropShadow"
                                                    />
                                                    <feColorMatrix
                                                        in="SourceAlpha"
                                                        type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                    />
                                                    <feOffset dy={2} />
                                                    <feGaussianBlur stdDeviation="2.5" />
                                                    <feColorMatrix
                                                        type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                                                    />
                                                    <feBlend
                                                        mode="normal"
                                                        in2="effect1_dropShadow"
                                                        result="effect2_dropShadow"
                                                    />
                                                    <feBlend
                                                        mode="normal"
                                                        in="SourceGraphic"
                                                        in2="effect2_dropShadow"
                                                        result="shape"
                                                    />
                                                </filter>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center mt-10">
                                    <img
                                        src={img}
                                        alt="profile pictre"
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <p className="text-base font-semibold leading-4 my-2 text-gray-800">
                                        {name}
                                    </p>
                                    <p className="text-base leading-4 text-center text-gray-600">
                                        {location}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
