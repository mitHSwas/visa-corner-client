import React from 'react';
import { FaGlobe, FaMedal, FaUniversity, FaUserGraduate } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";

const Overview = () => {
    return (
        <div className='flex w-full lg:flex-row md:flex-row flex-col bg-slate-50 my-20 rounded-lg'>
            <div className='text-center lg:w-1/5 w-full my-12 mx-auto'>
                <BsPersonCircle className='text-6xl mx-auto'></BsPersonCircle>
                <h1 className='text-5xl font-bold'>1000+</h1>
                <p className='text-2xl font-semibold'>Happy Client</p>
            </div>
            <div className='text-center lg:w-1/5 w-full my-12 mx-auto'>
                <FaMedal className='text-6xl mx-auto'></FaMedal>
                <h1 className='text-5xl font-bold'>100%</h1>
                <p className='text-2xl font-semibold'>Satisfaction</p>
            </div>
            <div className='text-center lg:w-1/5 w-full my-12 mx-auto'>
                <FaGlobe className='text-6xl mx-auto'></FaGlobe>
                <h1 className='text-5xl font-bold'>55+</h1>
                <p className='text-2xl font-semibold'>Countries</p>
            </div>
            <div className='text-center lg:w-1/5 w-full my-12 mx-auto'>
                <FaUserGraduate className='text-6xl mx-auto'></FaUserGraduate>
                <h1 className='text-5xl font-bold'>700+</h1>
                <p className='text-2xl font-semibold'>Students</p>
            </div>
            <div className='text-center lg:w-1/5 w-full my-12 mx-auto'>
                <FaUniversity className='text-6xl mx-auto'></FaUniversity>
                <h1 className='text-5xl font-bold'>180+</h1>
                <p className='text-2xl font-semibold'>Universities</p>
            </div>
        </div>
    );
};

export default Overview;