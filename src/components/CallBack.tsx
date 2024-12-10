"use client";

import { useState } from 'react';
import { initialData } from '../data';

const Home = () => {
    const [formData, setFormData] = useState(initialData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission logic here
    };

    return (
        <div style={{ backgroundImage: "url('../callback_background.svg')" }}>
            <div className="relative px-16 pt-16">
                <h1 className="text-3xl font-bold text-white mb-2">Request a Call Back</h1>
                <p className="text-white mb-8">Fill in Your Information And We'll Be In Touch As Soon As We Can</p>
            </div>
            <div className="relative px-16 pb-16 max-w-3xl overflow-hidden">
                <div className="bg-custom-gray-transparent p-8 rounded-3xl shadow-xl border-2 border-line-custom-gray-transparent">
                    <h2 className="text-xl font-bold text-white mb-4">Please fill the form.</h2>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                    <input
    type="text"
    name="firstName"
    placeholder="First Name"
    className="p-2 rounded-xl border border-gray-300 bg-transparent focus:outline-none cut transition-transform duration-200 transform peer-focus:translate-y-5 peer-placeholder-shown:translate-y-0"
    value={formData.firstName}
    onChange={handleChange}
/>
<input
    type="text"
    name="lastName"
    placeholder="Last Name"
    className="p-2 rounded-xl border border-gray-300 bg-transparent focus:outline-none"
    value={formData.lastName}
    onChange={handleChange}
/>
<input
    type="text"
    name="phoneNumber"
    placeholder="Phone Number"
    className="p-2 rounded-xl border border-gray-300 bg-transparent focus:outline-none" 
    value={formData.phoneNumber}
    onChange={handleChange}
/>
<input
    type="email"
    name="email"
    placeholder="Email Id"
    className="p-2 rounded-xl border border-gray-300 bg-transparent focus:outline-none" 
    value={formData.email}
    onChange={handleChange}
/>
<input
    type="text"
    name="subject"
    placeholder="Subject"
    className="p-2 rounded-xl border border-gray-300 bg-transparent focus:outline-none"
    value={formData.subject}
    onChange={handleChange}
/>
                        <button type="submit" className="col-span-1 md:col-span-2 bg-white text-gray-800 font-bold py-3 px-6 rounded-lg mt-4 flex items-center justify-center">
                            Submit Form <i className="fas fa-arrow-right ml-2"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;