// Footer.tsx
import React from 'react';
import {headerData, footerData } from '../data';

const Footer: React.FC = () => {
    return (
        <footer className="text-black py-8 px-6 bg-footer-custom ">
            <div className="max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8  mx-6">
                <div>
                    <h2 className="font-bold mb-4">{footerData.aboutUs.title}</h2>
                    <p className="text-sm">{footerData.aboutUs.description}</p>
                    <div className="flex space-x-4 mt-4">
                        {footerData.aboutUs.socialLinks.map((link, index) => (
                            <a key={index} href={link.url} className="text-black">
                                <i className={link.icon}></i>
                            </a>
                        ))}
                         <div className="flex items-center">
          <img 
            src={headerData.logo.src}
            alt={headerData.logo.alt}
            className="mr-2 w-20 h-12 hover:text-gray-300"/>
        </div>
                    </div>
                </div>
                <div>
    <h2 className="font-bold mb-4">Quick Links</h2>
    <ul className="space-y-2 text-sm">
        {footerData.quickLinks.map((link, index) => (
            <li key={index}>
                <a href={link.url} className="text-black">{link.name}</a>
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
                    <p className="text-sm"><i className="fas fa-phone-alt"></i> {footerData.contactInfo.phone}</p>
                    <p className="text-sm"><i className="fas fa-envelope"></i> {footerData.contactInfo.email}</p>
                    <p className="text-sm">{footerData.contactInfo.hours}</p>
                    <h2 className="font-bold mt-4 mb-2">Offices</h2>
                    {footerData.contactInfo.offices.map((office, index) => (
                        <p key={index} className="text-sm">{office}</p>
                    ))}
                </div>
            </div>
            <div className="border-t border-black mt-8 pt-4 text-center text-sm">
                {footerData.copyright}
            </div>
        </footer>
    );
};

export default Footer;