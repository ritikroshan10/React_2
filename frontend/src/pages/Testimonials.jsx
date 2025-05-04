import React from "react";

import { testimonials } from "../assets/images";

const Testimonials = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className=" max-w-[1200px] mx-auto px-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-10">What Our Users Say</h2>

                <div className="grid gap-10 grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
                        >
                            <img
                                className="w-16 h-16 rounded-full mx-auto mb-4"
                                src={testimonial.image}
                                alt={testimonial.name}
                            />
                            <p className="text-gray-700  mb-4">“{testimonial.quote}”</p>
                            <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500">{testimonial.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
