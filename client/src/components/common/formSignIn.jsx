import React from 'react';

export default function FormSignIn() {
    return (
        <form className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label
                        className="block text-gray-500 font-bold text-left mb-1 md:mb-0 pr-4"
                        htmlFor="inline-full-name"
                    >
                        Full Name
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-full-name"
                        type="text"
                        value="Jane Doe"
                    />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label
                        className="block text-gray-500 font-bold text-left mb-1 md:mb-0 pr-4"
                        htmlFor="inline-password"
                    >
                        Password
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-password"
                        type="password"
                        placeholder="******************"
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                >
                    Sign In
                </button>
            </div>
            <div className="text-center mt-4">Or sign in with</div>
            <div className="flex justify-center mt-2 space-x-4">
                <button
                    className="w-full shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                >
                    Sign in with Google
                </button>
            </div>
            <div className="flex justify-center mt-2 space-x-4">
                <button
                    className="w-full shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                >
                    Sign in with Facebook
                </button>
            </div>
        </form>
    );
}
