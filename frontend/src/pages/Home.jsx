import React from 'react'
import { Link } from 'react-router-dom';
import Slider from '../components/Slider';

export default function Home() {
    return (
        <>
            <Slider />
            <div className="mx-auto w-full max-w-[1200px]">
                <section className='flex'>
                    <div>
                        <img className='w-[60%]' src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-20164.jpg?semt=ais_hybrid&w=740" alt="image" />
                    </div>
                    <div className='mt-[130px]'>
                        <h2 className="font-bold text-5xl">
                            Download Now
                            <span className="block text-4xl">Lorem Ipsum</span>
                        </h2>
                        <Link
                            className="inline-flex text-white items-center px-6 py-3 mt-6 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link>
                    </div>
                </section>

                <section className="py-12">
                    <h2 className="text-center text-4xl font-bold mb-8">Our Features</h2>
                    <div className="grid grid-cols-3 gap-8 text-center">
                        <div className="p-6 rounded-lg shadow hover:shadow-lg transition bg-white">
                            <h3 className="text-xl font-semibold mb-2 text-grey-700">Fast Performance</h3>
                            <p className="text-gray-600">Optimized for speed with cutting-edge technologies.</p>
                        </div>
                        <div className="p-6 rounded-lg shadow hover:shadow-lg transition bg-white">
                            <h3 className="text-xl font-semibold mb-2  text-grey-700">Responsive Design</h3>
                            <p className="text-gray-600">Works flawlessly across all devices and screen sizes.</p>
                        </div>
                        <div className="p-6 rounded-lg shadow hover:shadow-lg transition bg-white">
                            <h3 className="text-xl font-semibold mb-2  text-grey-700">User Friendly</h3>
                            <p className="text-gray-600">Clean, intuitive interfaces designed for real people.</p>
                        </div>
                    </div>
                </section>

                <div className="flex justify-center mt-15">
                    <img className="w-[40%]" src="https://img.freepik.com/free-vector/communication-flat-icon_1262-18771.jpg?semt=ais_hybrid&w=740" alt="image2" />
                </div>

                <h1 className="text-center text-2xl pb-10 pt-4 font-medium">Seamless Communication for Modern Teams</h1>
            </div>
        </>
    );
}