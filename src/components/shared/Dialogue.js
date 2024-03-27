import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PhotoIcon } from "@heroicons/react/24/solid";

const categories = [
    {
        id: 1,
        name: "Clipping Path",
    },
    {
        id: 2,
        name: "Shadow Adding",
    },
    {
        id: 3,
        name: "Color Correction",
    },
    {
        id: 4,
        name: "Background Removal",
    },
    {
        id: 5,
        name: "Photo Retouching",
    },
    {
        id: 6,
        name: "Ecommerce Photo Editing",
    },
    {
        id: 7,
        name: "Image Masking",
    },
    {
        id: 8,
        name: "Packshot Retouching",
    },
    {
        id: 9,
        name: "Image Manipulation",
    },
];

export default function Dialogue({ open, setOpen, cancelButtonRef }) {
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={setOpen}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl m-10">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <form>
                                        <div className="space-y-12">
                                            <div className="border-b border-gray-900/10 pb-12">
                                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                    <div className="col-span-full">
                                                        <label
                                                            htmlFor="cover-photo"
                                                            className="block text-sm font-medium leading-6 text-gray-900"
                                                        >
                                                            Drop files to upload
                                                        </label>
                                                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                                            <div className="text-center">
                                                                <PhotoIcon
                                                                    className="mx-auto h-12 w-12 text-gray-300"
                                                                    aria-hidden="true"
                                                                />
                                                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                                    <label
                                                                        htmlFor="file-upload"
                                                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-orange-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-orange-600 focus-within:ring-offset-2 hover:text-orange-500"
                                                                    >
                                                                        <span>
                                                                            Upload
                                                                            a
                                                                            file
                                                                        </span>
                                                                        <input
                                                                            id="file-upload"
                                                                            name="file-upload"
                                                                            type="file"
                                                                            className="sr-only"
                                                                        />
                                                                    </label>
                                                                    <p className="pl-1">
                                                                        or drag
                                                                        and drop
                                                                    </p>
                                                                </div>
                                                                <p className="text-xs leading-5 text-gray-600">
                                                                    PNG, JPG,
                                                                    GIF
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border-b border-gray-900/10 pb-12">
                                                <div className="mt-10 space-y-10">
                                                    <fieldset>
                                                        <legend className="text-sm font-semibold leading-6 text-gray-900">
                                                            Provide Instructions
                                                            Below
                                                        </legend>
                                                        <div className="mt-6 grid grid-cols-3 gap-2">
                                                            {categories.map(
                                                                (category) => {
                                                                    return (
                                                                        <div
                                                                            className="relative flex gap-x-3"
                                                                            key={
                                                                                category?.id
                                                                            }
                                                                        >
                                                                            <div className="flex h-6 items-center">
                                                                                <input
                                                                                    id="comments"
                                                                                    name="comments"
                                                                                    type="checkbox"
                                                                                    className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600"
                                                                                />
                                                                            </div>
                                                                            <div className="text-sm leading-6">
                                                                                <label
                                                                                    htmlFor="comments"
                                                                                    className="font-medium text-gray-900"
                                                                                >
                                                                                    {
                                                                                        category?.name
                                                                                    }
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    );
                                                                }
                                                            )}
                                                        </div>
                                                    </fieldset>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-6 flex items-center justify-end gap-x-6">
                                            <button
                                                type="button"
                                                className="text-sm font-semibold leading-6 text-gray-900"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                                            >
                                                Submit
                                            </button>
                                        </div>

                                        <div className="col-span-full">
                                            <label
                                                htmlFor="about"
                                                className="block text-sm font-medium leading-6 text-gray-900"
                                            >
                                                Details Instructions
                                            </label>
                                            <div className="mt-2">
                                                <textarea
                                                    id="about"
                                                    name="about"
                                                    rows={3}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-6 flex items-center gap-2 mx-auto w-full">
                                            <div className="sm:col-span-3">
                                                <label
                                                    htmlFor="country"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Return File Format
                                                </label>
                                                <div className="mt-2">
                                                    <select
                                                        id="country"
                                                        name="country"
                                                        autoComplete="country-name"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                    >
                                                        <option>
                                                            Select one
                                                        </option>
                                                        <option>
                                                            JPG - White BG
                                                        </option>
                                                        <option>
                                                            PNG - Transparent BG
                                                        </option>
                                                        <option>
                                                            PSD - Layer Mask
                                                        </option>
                                                        <option>
                                                            PSD - Layered File
                                                        </option>
                                                        <option>
                                                            PSD - Original BG
                                                        </option>
                                                        <option>
                                                            TIFF - Original BG
                                                        </option>
                                                        <option>
                                                            TIFF - Transparent
                                                            BG
                                                        </option>
                                                        <option>
                                                            PDF Pages
                                                        </option>
                                                        <option>
                                                            Original Format BG
                                                        </option>
                                                        <option>
                                                            Other - Please
                                                            Specify
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="sm:col-span-3">
                                                <label
                                                    htmlFor="country"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Return File Format
                                                </label>
                                                <div className="mt-2">
                                                    <select
                                                        id="country"
                                                        name="country"
                                                        autoComplete="country-name"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                    >
                                                        <option>
                                                            Select one
                                                        </option>
                                                        <option>
                                                            JPG - White BG
                                                        </option>
                                                        <option>
                                                            PNG - Transparent BG
                                                        </option>
                                                        <option>
                                                            PSD - Layer Mask
                                                        </option>
                                                        <option>
                                                            PSD - Layered File
                                                        </option>
                                                        <option>
                                                            PSD - Original BG
                                                        </option>
                                                        <option>
                                                            TIFF - Original BG
                                                        </option>
                                                        <option>
                                                            TIFF - Transparent
                                                            BG
                                                        </option>
                                                        <option>
                                                            PDF Pages
                                                        </option>
                                                        <option>
                                                            Original Format BG
                                                        </option>
                                                        <option>
                                                            Other - Please
                                                            Specify
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="sm:col-span-3">
                                                <label
                                                    htmlFor="country"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Return File Format
                                                </label>
                                                <div className="mt-2">
                                                    <select
                                                        id="country"
                                                        name="country"
                                                        autoComplete="country-name"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                    >
                                                        <option>
                                                            Select one
                                                        </option>
                                                        <option>
                                                            JPG - White BG
                                                        </option>
                                                        <option>
                                                            PNG - Transparent BG
                                                        </option>
                                                        <option>
                                                            PSD - Layer Mask
                                                        </option>
                                                        <option>
                                                            PSD - Layered File
                                                        </option>
                                                        <option>
                                                            PSD - Original BG
                                                        </option>
                                                        <option>
                                                            TIFF - Original BG
                                                        </option>
                                                        <option>
                                                            TIFF - Transparent
                                                            BG
                                                        </option>
                                                        <option>
                                                            PDF Pages
                                                        </option>
                                                        <option>
                                                            Original Format BG
                                                        </option>
                                                        <option>
                                                            Other - Please
                                                            Specify
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-6 grid grid-cols-2 gap-2">
                                            <div class="flex flex-col">
                                                <label
                                                    for="name"
                                                    class="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Full Name
                                                </label>
                                                <div class="mt-2">
                                                    <input
                                                        id="name"
                                                        name="name"
                                                        type="text"
                                                        required
                                                        class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>
                                            <div class="flex flex-col">
                                                <label
                                                    for="email"
                                                    class="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Email
                                                </label>
                                                <div class="mt-2">
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        required
                                                        class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>
                                            <div class="flex flex-col">
                                                <label
                                                    for="company-name"
                                                    class="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Company Name
                                                </label>
                                                <div class="mt-2">
                                                    <input
                                                        id="company-name"
                                                        name="company-name"
                                                        type="text"
                                                        required
                                                        class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>
                                            <div class="flex flex-col">
                                                <label
                                                    for="phone"
                                                    class="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Phone Number
                                                </label>
                                                <div class="mt-2">
                                                    <input
                                                        id="phone"
                                                        name="phone"
                                                        type="phone"
                                                        required
                                                        class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="my-10">
                                            <button
                                                type="submit"
                                                class="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                                            >
                                                Sign in
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
