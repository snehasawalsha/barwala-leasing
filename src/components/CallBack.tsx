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
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
       
        <div style={{ backgroundImage: "url('../callback_background.svg')" }}>        
         <section   id="request-callback">  
                <div className="relative px-16 pt-16">
                
                    <h1 className="text-3xl font-bold text-white mb-2">Request a Call Back</h1>
                    <p className="text-white mb-8">Fill in Your Information And We'll Be In Touch As Soon As We Can</p>
                             </div>
                <div className="relative px-16 pb-16 max-w-3xl overflow-hidden">
                    <div className="bg-custom-gray-transparent p-8 rounded-3xl shadow-xl border-2 border-line-custom-gray-transparent">
                        <h2 className="text-xl font-bold text-white mb-4">Please fill the form.</h2>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                            {inputFields.map((field) => (
                                <div className="relative" key={field.name}>
                                    <input
                                        type="text"
                                        name={field.name}
                                        className={`p-2 rounded-xl border border-gray-300 bg-transparent focus:outline-none text-white ${formData[field.name as keyof FormData] ? 'has-value' : ''}`}
                                        value={formData[field.name as keyof FormData]}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label className={`absolute left-2 top-2 transition-all duration-200 ${formData[field.name as keyof FormData] ? 'text-xs text-White' : 'text-white'}`}>
                                        {field.label}
                                    </label>
                                </div>
                            ))}
                            <button type="submit" className="col-span-1 md:col-span-2 bg-white text-gray-800 font-bold py-3 px-6 rounded-lg mt-4 flex items-center justify-center">
                                Submit Form <i className="fas fa-arrow-right ml-2 bg-slate-950"></i>
                            </button>
                        </form>
                    </div>
                </div>       
                </section>     
        </div>
        
    );
};

export default CallBack;