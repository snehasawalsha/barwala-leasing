import React from 'react';
import { privacyPolicyContent } from "../../data";

const PrivacyPolicy: React.FC = () => {
    const {
        title,
        introduction,
        consent,
        informationCollection,
        useOfInformation,
        cookies,
        advertisingPartners,
        thirdPartyPolicies,
    } = privacyPolicyContent;

    return (
        <div className="container mx-auto p-6 pt-8 mt-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-5xl font-bold text-center text-gray-800 mb-6">{title}</h1>
            <p className="text-lg text-gray-600 mb-8 text-center">{introduction}</p>

            <div className="space-y-8">
                <Section title="Consent" content={consent} />
                <Section title="Information Collection" content={informationCollection} />
                <Section title="Use of Information" content={useOfInformation} />
                <Section title="Cookies and Web Beacons" content={cookies} />
                <Section title="Advertising Partners Privacy Policies" content={advertisingPartners} />
                <Section title="Third Party Privacy Policies" content={thirdPartyPolicies} />
            </div>
        </div>
    );
};

const Section: React.FC<{ title: string; content: React.ReactNode }> = ({ title, content }) => (
    <div className="p-6 border-l-4 border-blue-500 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">{title}</h2>
        <div className="text-lg text-gray-700">{content}</div>
    </div>
);

export default PrivacyPolicy;