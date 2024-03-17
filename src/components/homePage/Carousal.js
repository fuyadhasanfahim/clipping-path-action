import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

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

export default function Carousel() {
    return (
        <div className="mx-auto">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: ".swiper-pagination", clickable: true }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="h-auto w-auto py-8 relative"
            >
                {images.map((image) => (
                    <SwiperSlide key={image.id}>
                        <img
                            src={image.img}
                            alt="slide_image"
                            className="w-auto h-auto rounded-lg"
                        />
                    </SwiperSlide>
                ))}

                <div className="relative bottom-8 flex items-center justify-center">
                    <div className="relative w-auto bottom-4"></div>
                </div>
            </Swiper>
        </div>
    );
}
