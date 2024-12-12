import React from 'react';
import { footerData } from '../data';

const Footer: React.FC = () => {
    return (
        <footer className="text-black bg-footer-custom">
            <div className="max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8 mx-6 p-8">
                <div>
                    <div>
                    <h2 className="font-bold mb-4">{footerData.aboutUs.title}</h2>
                    <p className="text-sm">{footerData.aboutUs.description}</p>
                    </div>
                    <div className="flex justify-around mr-8 mt-10">
                        {footerData.aboutUs.socialLinks.map((link) => (
                            <img
                                key={link.url}
                                src={link.image}
                                className="w-10 h-10 hover:text-gray-300"
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="font-bold mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-sm">
                        {footerData.quickLinks.map((link) => (
                            <li key={link.url}>
                                <a href={link.url} className="text-black hover:text-blue-600 transition duration-200">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold mb-4">Service Locations</h2>
                    <ul className="space-y-2 text-sm">
                        {footerData.serviceLocations.map((location, index) => (
                            <li key={index}>{location}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold mb-4">Contact Info</h2>
                    <p className="text-sm flex items-center">
                        <img src={footerData.contactInfo.phone.image} alt="Phone" className="w-6 h-6 mr-2 mb-2 inline-block hover:scale-110 transition duration-200" />
                        <span className="hover:text-blue-600 font-semibold transition duration-200">{footerData.contactInfo.phone.value}</span>
                    </p>
                    <p className="text-sm flex items-center">
                        <img src={footerData.contactInfo.email.image} alt="Email" className="w-6 h-6 mr-2 mb-2 inline-block hover:scale-110 transition duration-200" />
                        <span className="hover:text-blue-600 font-semibold transition duration-200">{footerData.contactInfo.email.value}</span>
                    </p>
                    <p className="text-sm flex items-center">
                        <img src={footerData.contactInfo.hours.image} alt="Hours" className="w-6 h-6 mr-2 mb-2 inline-block hover:scale-110 transition duration-200" />
                        <span className="hover:text-blue-600 font-semibold transition duration-200">{footerData.contactInfo.hours.value}</span>
                    </p>
                    <h2 className="font-bold mt-4 mb-2">Offices</h2>
                    {footerData.contactInfo.offices.map((office, index) => {
                        const [key, value] = office.address.content.split(":");
                        return (
                            <p key={index} className="text-sm">
                                <strong>{key}:</strong> {value}
                            </p>
                        );
                    })}
                </div>
            </div>
            <div className="text-center text-xs border-t border-white pt-6 pb-2">
                {footerData.contactInfo.copyright}
            </div>
        </footer>
    );
};

export default Footer;