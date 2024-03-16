import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Dropdown from "./Dropdown";

const services = [
    {
        name: "Clipping Path",
        href: "/clipping-path",
    },
    {
        name: "Image Masking",
        href: "/image-masking",
    },
    {
        name: "Shadow Adding",
        href: "/shadow-adding",
    },
    {
        name: "Color Correction",
        href: "/colorCorrection",
    },
    {
        name: "Photo Retouching",
        href: ".photo-retouching",
    },
    {
        name: "E-commerce Photo Editing",
        href: "e-commerce-photo-editing",
    },
    {
        name: "Packshot Retouching",
        href: "/packshot-retouching",
    },
    {
        name: "Jewelry Photo Editing",
        href: "jewelry-photo-editing",
    },
    {
        name: "Image Manipulation",
        href: "/image-manipulation",
    },
];

const helps = [
    {
        name: "Help Center",
        href: "/help-center",
    },
    {
        name: "FAQ",
        href: "/faq",
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md select-none">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <img
                            className="h-12 w-auto"
                            src="https://clippingpathaction.com/wp-content/uploads/2023/05/logo_origin.png"
                            alt="logo"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Bars3Icon className="h-8 w-8" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Dropdown name={"Services"} data={services} />
                    <a
                        href="/pricing"
                        className="text-lg font-semibold leading-6 text-gray-900"
                    >
                        Pricing
                    </a>
                    <a
                        href="/contact-us"
                        className="text-lg font-semibold leading-6 text-gray-900"
                    >
                        Contact Us
                    </a>
                    <Dropdown name={"Help"} data={helps} />
                    <a
                        href="/blog"
                        className="text-lg font-semibold leading-6 text-gray-900"
                    >
                        Blog
                    </a>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a
                        href="/free-trail"
                        className="text-lg font-semibold leading-6 text-gray-900"
                    >
                        Free Trial <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    {/* <div className="flex items-center justify-between"> */}
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <div className="flex items-center justify-end">
                                    <button
                                        type="button"
                                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        <XMarkIcon
                                            className="h-8 w-8"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                                <a
                                    href="/"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Home
                                </a>
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Services
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open
                                                            ? "rotate-180"
                                                            : "",
                                                        "h-5 w-5 flex-none"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {services.map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <a
                                    href="/pricing"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Pricing
                                </a>
                                <a
                                    href="/contact-us"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Contact Us
                                </a>
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Help
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open
                                                            ? "rotate-180"
                                                            : "",
                                                        "h-5 w-5 flex-none"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {helps.map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <a
                                    href="/blog"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Blog
                                </a>
                            </div>
                            <div className="py-6">
                                <a
                                    href="/free-trail"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Free Trail
                                </a>
                            </div>
                            <div className="py-6 space-x-4">
                                <a
                                    href="/login"
                                    className="rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                                >
                                    Login <span aria-hidden="true">&rarr;</span>
                                </a>
                                <a
                                    href="/sign-up"
                                    className="rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                                >
                                    Sign Up{" "}
                                    <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
