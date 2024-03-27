import {
    ChatBubbleLeftRightIcon,
    CheckCircleIcon,
    ChevronRightIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import React, { useRef, useState } from "react";
import Dialogue from "../shared/Dialogue";

export default function GiveATry() {
    const [open, setOpen] = useState(false);

    const cancelButtonRef = useRef(null);

    return (
        <div className="mx-10 h-auto my-20" id="give-a-try">
            <div className="mx-auto w-full max-w-7xl my-32">
                <div className="space-y-20">
                    <div className="mx-auto  w-full max-w-4xl grid place-items-center space-y-8">
                        <div className="flex items-center gap-2">
                            <ChevronRightIcon className="h-9 w-9" />
                            <div className="text-center text-3xl font-medium">
                                Give{" "}
                                <span className="font-semibold border-b-4 border-orange-400 hover:bg-orange-400 duration-500">
                                    Cut Out Image
                                </span>{" "}
                                A Try
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-200 rounded-xl shadow-xl">
                        <div className="p-20 text-center mx-auto w-full max-w-4xl space-y-6">
                            <div className="text-5xl flex justify-center gap-2 items-center">
                                <PaperAirplaneIcon className="h-14 w-14 border-slate-900 border-2 p-2 rounded-full shadow-lg" />
                                <h1>Free Trial</h1>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-3">
                                    <h3 className="text-3xl font-medium">
                                        No Credit Card Required!
                                    </h3>
                                    <p className="text-start text-slate-800 font-medium text-base">
                                        If you’re on the fence about our
                                        services, you can commit to a Free Trial
                                        at no cost to you. However, you should
                                        know that Free Trial comes with no
                                        limitation on the number of services you
                                        would like to give a try.
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-3xl font-medium">
                                        Number of Trial Images: 3-100*
                                    </h3>
                                    <p className="text-start text-slate-800 font-medium text-base">
                                        If you want to get a quote instantly,
                                        please click on the button below and
                                        submit your quote request or start
                                        chatting to discuss the project.
                                    </p>
                                </div>
                                <div className="gap-5 flex mx-auto justify-center items-center pt-10">
                                    <button className="border-slate-800 border-2 px-6 py-2 hover:bg-slate-800 hover:text-gray-50 duration-150">
                                        <a href="/login" className="flex ">
                                            <div className="flex items-center gap-2">
                                                <CheckCircleIcon className="h-5 w-5" />
                                                <h5>Get Quote Now</h5>
                                            </div>
                                        </a>
                                    </button>
                                    <button
                                        className="border-slate-800 border-2 px-6 py-2 hover:bg-slate-800 hover:text-gray-50 duration-150"
                                        onClick={() => setOpen(true)}
                                    >
                                        <a href="#give-a-try" className="flex">
                                            <div className="flex items-center gap-2">
                                                <ChatBubbleLeftRightIcon className="h-5 w-5" />
                                                <h5>Free Trial</h5>
                                            </div>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {open && (
                <Dialogue
                    open={open}
                    setOpen={setOpen}
                    cancelButtonRef={cancelButtonRef}
                />
            )}
        </div>
    );
}
