import React from 'react';
import { Link } from 'react-router-dom';
import ai_svg from '../../assets/visualLearning.svg';
import vl_svg from '../../assets/coding.svg';
import oc_svg from '../../assets/simulator.svg';

export default function VIRTUAL_LAB() {
    return (
        <div className="mx-auto w-full max-w-7xl min-h-screen flex flex-col justify-center p-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Virtual Labs
            </h1>

            {/* Hero Section */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:mt-8 p-4">
                
                {/* VISUAL LEARNING */}
                <div className="bg-red-100 rounded-lg p-5 flex flex-col text-center justify-between min-h-[240px]">
                    <div>
                        <img
                            src={ai_svg}
                            alt="VISUAL LEARNING ICON"
                            className="w-full h-auto mb-4"
                        />
                        <h3 className="text-lg font-bold text-black">VISUAL LEARNING</h3>
                        <p className="text-black">Interactive visuals and animations for enhanced concept understanding</p>
                    </div>
                    <Link to="/udcourse" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
                        DIVE IN
                    </Link>
                </div>

                {/* CODING PLATFORM */}
                <div className="bg-red-100 rounded-lg p-5 flex flex-col text-center justify-between min-h-[240px]">
                    <div>
                        <img
                            src={vl_svg}
                            alt="Coding platform Icon"
                            className="w-full h-auto mb-4"
                        />
                        <h3 className="text-lg font-bold text-black">CODING PLATFORM</h3>
                        <p className="text-black">Interactive platform for coding practice with real-time feedback</p>
                    </div>
                    <Link to="/udcourse" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
                        DIVE IN
                    </Link>
                </div>

                {/* SIMULATOR */}
                <div className="bg-red-100 rounded-lg p-5 flex flex-col text-center justify-between min-h-[240px]">
                    <div>
                        <img
                            src={oc_svg}
                            alt="SIMULATOR Icon"
                            className="w-full h-auto mb-4"
                        />
                        <h3 className="text-lg font-bold text-black">SIMULATOR</h3>
                        <p className="text-black">Interactive platform for exploring and manipulating geometric shapes</p>
                    </div>
                    <Link to="/udcourse" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
                        DIVE IN
                    </Link>
                </div>

            </div>
        </div>
    );
}
