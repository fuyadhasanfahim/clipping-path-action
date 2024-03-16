import React from "react";

const images = [
    {
        id: 0,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/Home_Slider_Human-01.webp",
    },
    {
        id: 1,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/Home_Slider_Dress-02.webp",
    },
    {
        id: 2,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/Home_Slider_flower-03.webp",
    },
    {
        id: 3,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/Home_slider_Bag-04.webp",
    },
    {
        id: 4,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/Home_Slider_Lipstick-05.webp",
    },
    {
        id: 5,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/Home_Slider_sofa-06.webp",
    },
    {
        id: 6,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/Home_Slider_Shoe-07.webp",
    },
    {
        id: 7,
        img: "https://www.cutoutimage.com/wp-content/uploads/2022/04/Home_Slider_Coat-08.webp",
    },
];

export default function Carousal() {
    return (
        <div className="h-full overflow-x-auto hidden sm:block">
            <section className="flex gallery">
                {images.map((image) => (
                    <article className="card" key={image?.id}>
                        <figure>
                            <img src={image?.img} alt="img" className="w-auto h-full" />
                        </figure>
                    </article>
                ))}
            </section>
        </div>
    );
}
