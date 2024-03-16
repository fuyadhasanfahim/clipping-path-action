export default function Banners() {
    return (
        <div className="flex justify-end items-center bg-gray-200 gap-x-6 overflow-hidden px-6 py-2.5 sm:px-3.5 select-none">
            <div className="flex justify-end items-center gap-x-4 gap-y-2 w-full max-w-7xl mx-auto">
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
                    Sign Up <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
        </div>
    );
}
