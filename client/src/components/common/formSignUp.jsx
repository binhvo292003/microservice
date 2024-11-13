import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FormSignUp() {
    // const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Sign-in data:', formData);
        // navigate('/dashboard');
        setFormData({
            fullName: '',
            email: '',
            password: '',
        });
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-4 flex items-center">
                <label
                    className="w-1/3 block text-gray-700 text-left text-sm font-bold mb-2 mr-4"
                    htmlFor="fullName"
                >
                    Fullname
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300"
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4 flex items-center">
                <label
                    className="w-1/3 block text-gray-700 text-left text-sm font-bold mb-2 mr-4"
                    htmlFor="email"
                >
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-6 flex items-center">
                <label
                    className="w-1/3 block text-gray-700 text-left text-sm font-bold mb-2 mr-4"
                    htmlFor="password"
                >
                    Password
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-300"
                    id="password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>
            <div className="flex justify-center">
                <button
                    className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit"
                >
                    Sign In
                </button>
            </div>
        </form>
    );
}
