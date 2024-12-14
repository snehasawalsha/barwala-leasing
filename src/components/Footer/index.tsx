"use client";

import React from 'react';
import Image from 'next/image';
import { footerData } from '../../data';
import { scrollToSection } from '@/utils';

const Footer: React.FC = () => {
    return (
        <footer className="text-white bg-gradient-to-r from-[#814032] to-[#a16130]">
            <div className="max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8 mx-6 p-8">
                <div>
                    <div>
                        <h2 className="font-bold mb-4 text-lg">{footerData.aboutUs.title}</h2>
                        <p className="text-base">{footerData.aboutUs.description}</p>
                    </div>
                    <div className="flex justify-around mr-8 mt-10">
                        {footerData.aboutUs.socialLinks.map((link, index) => {
                            const imageUrl = link.image;
                            return (
                                <div key={index}>
                                    <Image
                                        src={imageUrl}
                                        alt={link.name}
                                        width={0}
                                        height={0}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <h2 className="font-bold mb-4 text-lg">Quick Links</h2>
                    <ul className="space-y-2 text-base">
                        {footerData.quickLinks.map((link) => (
                            <li key={link.url}>
                                <a
                                    href={link.url}
                                    className="text-white hover:text-gray-950 transition duration-200"
                                    onClick={(e) => {
                                        if (link.name === "Contact") {
                                            e.preventDefault();
                                            scrollToSection('request-callback');
                                        }
                                    }}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold mb-4 text-lg">Service Locations</h2>
                    <ul className="space-y-2 text-base">
                        {footerData.serviceLocations.map((location, index) => (
                            <li key={index} className="hover:text-gray-950 transition duration-200">{location}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold mb-4 text-lg">Contact Info</h2>
                    <p className="text-base flex items-center mb-2">
                        <Image src={footerData.contactInfo.phone.image} alt="Phone" className="w-6 h-6 mr-2 inline-block hover:scale-110 transition duration-200 hover:text-gray-950" width={0}
                            height={0} />
                        <span className="hover:text-gray-950 font-semibold transition duration-200">{footerData.contactInfo.phone.value}</span>
                    </p>
                    <p className="text-base flex items-center mb-2">
                        <Image src={footerData.contactInfo.email.image} alt="Email" className="w-6 h-6 mr-2 inline-block hover:scale-110 transition duration-200 hover:text-gray-950" width={0}
                            height={0} />
                        <span className="hover:text-gray-950 font-semibold transition duration-200">{footerData.contactInfo.email.value}</span>
                    </p>
                    <p className="text-base flex items-center mb-2">
                        <Image src={footerData.contactInfo.hours.image} alt="Hours" className="w-6 h-6 mr-2 inline-block hover:scale-110 transition duration-200 hover:text-gray-950" width={0}
                            height={0} />
                        <span className="hover:text-gray-950 font-semibold transition duration-200">{footerData.contactInfo.hours.value}</span>
                    </p>
                    <h2 className="font-bold mt-4 mb-2 text-lg">Offices</h2>
                    {footerData.contactInfo.offices.map((office, index) => {
                        const [key, value] = office.address.content.split(":");
                        return (
                            <p key={index} className="text-base">
                                <strong className="text-white">{key}:</strong> {value}
                            </p>
                        );
                    })}
                </div>
            </div>
            <div className="text-center text-xs border-t border-white pt-2 pb-2 shadow-xl bg-gradient-to-r from-[#814032] to-[#a16130] text-white">
                {footerData.contactInfo.copyright}
            </div>
        </footer>
    );
};

export default Footer;