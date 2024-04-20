// FAQSection.js
import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        { question: "How can I rent a car?", answer: "You can rent a car by visiting our website and booking online, or by calling our customer service number." },
        { question: "What documents are required for renting a car?", answer: "You will need a valid driver's license, an identification card, and a credit card for deposit." },
        { question: "Can I return the car at a different location?", answer: "Yes, you can return the car at any of our branches nationwide without additional charges." },
        { question: "Do you offer any insurance or protection plans?", answer: "Yes, we offer several insurance options to protect your rental experience." }
    ];

    const toggleFAQ = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="bg-orange-100 py-12">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-thin text-center text-gray-800 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-semibold text-lg cursor-pointer" onClick={() => toggleFAQ(index)}>
                                {faq.question}
                            </h3>
                            {activeIndex === index && (
                                <p className="text-gray-600 mt-2">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
