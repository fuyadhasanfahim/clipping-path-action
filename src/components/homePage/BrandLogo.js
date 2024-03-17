const links = [
    {
        id: 1,
        link: "https://www.cutoutimage.com/wp-content/uploads/2022/04/mckinsey-company-cutoutimage-client.svg",
    },
    {
        id: 2,
        link: "https://www.cutoutimage.com/wp-content/uploads/2022/04/pupsocks-cutoutimage-client.svg",
    },
    {
        id: 3,
        link: "https://www.cutoutimage.com/wp-content/uploads/2022/04/ao-cutoutimage-client.svg",
    },
    {
        id: 4,
        link: "https://www.cutoutimage.com/wp-content/uploads/2022/04/tde-cutoutimage-client.svg",
    },
    {
        id: 5,
        link: "https://www.cutoutimage.com/wp-content/uploads/2022/04/baro-cutoutimage-client.svg",
    },
    {
        id: 6,
        link: "https://www.cutoutimage.com/wp-content/uploads/2022/04/farfetch-cutoutimage-client.svg",
    },
    {
        id: 7,
        link: "https://www.cutoutimage.com/wp-content/uploads/2022/04/airbus-cutoutimage-client.svg",
    },
    {
        id: 8,
        link: "https://www.cutoutimage.com/wp-content/uploads/2022/04/boston-college-cutoutimage-client.svg",
    },
    {
        id: 9,
        link: "https://www.cutoutimage.com/wp-content/uploads/2022/04/image-works-cutoutimage-client.svg",
    },
    {
        id: 10,
        link: "https://www.cutoutimage.com/wp-content/uploads/2022/04/virgin-media-cutoutimage-client.svg",
    },
    {
        id: 11,
        link: "https://www.cutoutimage.com/wp-content/uploads/2022/04/hovding-cutoutimage-client.svg",
    },
    {
        id: 12,
        link: "https://www.cutoutimage.com/wp-content/uploads/2022/04/misko-cutoutimage-client.svg",
    },
];

export default function BrandLogo() {
    return (
        <div className="bg-white pb-24 relative h-auto mx-10 select-none">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
                    {links.map((link) => (
                        <img
                            key={link.id}
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={link.link}
                            alt="Transistor"
                            width={158}
                            height={48}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
