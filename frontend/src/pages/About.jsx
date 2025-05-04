import React from "react";

const About = () => {
    return (
        <section className="bg-white py-10">
            <div className="max-w-[1200px]  mx-auto px-8">
                <h1 className="text-center text-5xl font-bold pb-10">About Us</h1>

                <div className="grid grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our passionate</h2>
                        <p className="text-gray-700 text-lg mb-6">
                            We're a passionate team dedicated to building intuitive and powerful tools that make work better.
                            Our mission is to help individuals and businesses thrive in the digital era.
                        </p>
                        <p className="text-gray-600">
                            Founded in 2020, we’ve grown from a small startup to a trusted brand used by thousands across the world.
                            We believe in innovation, transparency, and putting people first.
                        </p>
                    </div>
                    <div className="text-center">
                        <img
                            className="rounded-2xl shadow-lg mx-auto"
                            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                            alt="About us"
                        />
                    </div>
                </div>

                <div className="mt-20">
                    <h3 className="text-2xl font-semibold text-gray-900 text-center mb-10">Our Core Values</h3>

                    <div className="grid grid-cols-3 gap-8 text-center">
                        <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
                            <h4 className="font-bold text-lg text-gray-800 mb-2">Innovation</h4>
                            <p className="text-gray-600">
                                We embrace creativity and always look for ways to improve and evolve.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
                            <h4 className="font-bold text-lg text-gray-800 mb-2">Integrity</h4>
                            <p className="text-gray-600">
                                Honesty and transparency are at the heart of everything we do.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
                            <h4 className="font-bold text-lg text-gray-800 mb-2">User Focus</h4>
                            <p className="text-gray-600">
                                We put users first and design products that solve real problems.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default About;
