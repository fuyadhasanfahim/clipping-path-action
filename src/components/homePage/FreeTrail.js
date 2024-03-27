import React from "react";
import { Link } from "react-router-dom";

export default function FreeTrail() {
    return (
        <div className="w-full mx-auto max-w-7xl grid place-content-center my-32">
            <div className="bg-gray-200 rounded-2xl shadow-md hover:scale-105 hover:shadow-2xl duration-300 ring-1 ring-gray-900/5 px-10 py-6 flex items-center gap-10 flex-wrap mx-10">
                <div>
                    <img
                        src="https://www.cutoutimage.com/wp-content/uploads/2021/10/free-trial.png.webp"
                        alt="free trail"
                        className="w-auto max-w-24"
                    />
                </div>
                <div className="w-full max-w-xl space-y-2">
                    <h1 className="text-3xl font-semibold leading-10 text-gray-800">
                        Free Trial - Upto 100 Images.
                    </h1>
                    <p className="text-sm font-medium text-gray-600">
                        Are you seeking a simple process for professional
                        service? We bet you landed on the right place. Just give
                        us a try.
                    </p>
                </div>

                <div className="border-2">
                    <button className="w-full mx-auto px-6 py-2 rounded-md ring-1 ring-gray-900/5 bg-orange-600 text-base font-medium text-gray-100">
                        <Link to={"/free-trail"}>Free Trail</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
