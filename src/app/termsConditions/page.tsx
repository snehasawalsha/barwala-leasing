import React from 'react';
import { termsOfUseContent } from "../../data";

const TermsOfUse: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-gray-800 text-white p-4">
                <h1 className="text-xl font-bold">Website Terms of Use</h1>
            </header>
            <main className="flex-grow max-w-4xl mx-auto p-6 bg-gray-100">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{termsOfUseContent.title}</h1>
                {termsOfUseContent.sections.map((section, index) => (
                    <div key={index} className="mt-6">
                        <h2 className="text-2xl font-semibold text-gray-700">{section.title}</h2>
                        <ol className="list-decimal list-inside mt-2 text-gray-600">
                            {section.paragraphs.map((paragraph, pIndex) => (
                                <li key={pIndex} className="mt-2">
                                    {paragraph}
                                    {section.title === "2. Customer Eligibility" && pIndex >= 7 && (
                                        <ul className="list-disc list-inside mt-1 text-gray-600">
                                            <li>{paragraph}</li>
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </div>
                ))}
            </main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default TermsOfUse;