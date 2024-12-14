"use client";

import { useState } from 'react';

interface FormData {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    subject: string;
}

const CallBack = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        subject: '',
    });

    const [error, setError] = useState<string>('');

    const inputFields = [
        { name: 'firstName', label: 'First Name' },
        { name: 'lastName', label: 'Last Name' },
        { name: 'phoneNumber', label: 'Phone Number' },
        { name: 'email', label: 'Email Id' },
        { name: 'subject', label: 'Subject' },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name as keyof FormData]: value });
        setError(''); 
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!formData.firstName || !formData.email) {
            setError('First Name and Email are required.');
            return;
        }
        
        
        setFormData({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            subject: '',
        });
    };

    return (
        <div style={{ backgroundImage: "url('../callback_background.svg')" }}>
            <section id="request-callback">
                <div className="relative px-4 md:px-16 pt-16">
                    <h1 className="text-4xl font-bold text-white mb-2">Request a Call Back</h1>
                    <p className="text-lg text-white mb-8">Fill in Your Information And We'll Be In Touch As Soon As We Can</p>
                </div>
                <div className="relative px-4 md:px-16 pb-16 max-w-3xl overflow-hidden">
                    <div className="bg-gray-800 bg-opacity-80 p-10 rounded-3xl shadow-2xl border-2 border-gray-600">
                        <h2 className="text-2xl font-bold text-white mb-4">Please fill the form.</h2>
                        {error && <p className="text-red-500 mb-4">{error}</p>}
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                            {inputFields.map((field) => (
                                <div className="relative" key={field.name}>
                                    <input
                                        type="text"
                                        name={field.name}
                                        className={`p-4 rounded-lg border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 text-white transition duration-200 shadow-lg hover:shadow-xl focus:shadow-xl ${formData[field.name as keyof FormData] ? 'has-value' : ''}`}
                                        value={formData[field.name as keyof FormData]}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label className={`absolute left-4 top-3 transition-all duration-200 ${formData[field.name as keyof FormData] ? 'text-xs text-blue-400' : 'text-gray-400'}`}>
                                        {field.label}
                                    </label>
                                </div>
                            ))}
                            <button type="submit" className="col-span-1 md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mt-4 flex items-center justify-center transition duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                Submit Form <i className="fas fa-arrow-right ml-2"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CallBack;