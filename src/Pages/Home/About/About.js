import React from 'react';
import { FaRegEye, FaRegHandshake } from 'react-icons/fa';
import { GiCommercialAirplane } from "react-icons/gi";
import about from '../../../assets/images/About/Mithun.web.JPG'
const About = () => {
    return (
        <div className='lg:flex'>
            <div className='w-50'>
                <div className='w-90'>
                    <p>ABOUT ME</p>
                    <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold my-7">Visa-Corner Consulting</h1>
                    <p className=''>The Visa-corner (Pvt) Limited is the largest visa consultancy and processing firm in Bangladesh. Initially opened for business as a partnership in 1999 and established as a company in 2002, The Visa Centre is based in Khulna 7 and comprises of a network of experienced visa consultants, lawyers, and processing staff.</p>
                    <div className='lg:flex md:flex my-8'>
                        <FaRegHandshake className='text-7xl w-3/5 lg:w-1/5 md:w-2/5 mx-auto' />
                        <div className='mx-5 pl-2'>
                            <h2 className='lg:text-4xl md:text-4xl text-2xl font-semibold mb-4'>My Mission</h2>
                            <p>To continuously exceed expectations of our trusted clients and deliver premier, personalised advisory experience that is simple and results in empowering our clients and their families.</p>
                        </div>
                    </div>
                    <div className='lg:flex md:flex my-8'>
                        <FaRegEye className='text-7xl w-3/5 lg:w-1/5 md:w-2/5 mx-auto' />
                        <div className='mx-5'>
                            <h2 className='lg:text-4xl md:text-4xl text-2xl font-semibold mb-4'>My Vision</h2>
                            <p>To be widely recognize as a premier advisory firm by rendering expert counsel to empower clients and their families in the entire process of being a global citizen.</p>
                        </div>
                    </div>
                    <div className='lg:flex md:flex my-8'>
                        <GiCommercialAirplane className='text-7xl w-3/5 lg:w-1/5 md:w-2/5 mx-auto' />
                        <div className='mx-5'>
                            <h2 className='lg:text-4xl md:text-4xl text-2xl font-semibold mb-4'>My Strategy</h2>
                            <p>We help clients formulate payments strategies to drive growth and profitability, compete in the digital economy and address key topics such as crypto, open banking, real-time payments and emerging third-party platforms</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-50 mx-8'>
                <img src={about} alt="" />
                <div className='w-full'>
                    <div className="transform -translate-y-1/2 w-50 text-center text-white bg-slate-600">
                        <h1 className='text-4xl font-bold'>24+ YEARS</h1>
                        <p >Experience Immigration Services</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;