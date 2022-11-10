import React from 'react';
import { FaRegEye, FaRegHandshake } from 'react-icons/fa';
import { GiCommercialAirplane } from "react-icons/gi";
import about from '../../../assets/images/About/Mithun.web.JPG'
const About = () => {
    return (
        <div className='container lg:flex'>
            <div className='w-50'>
                <div className='w-90'>
                    <p>ABOUT ME</p>
                    <h1 className="text-5xl font-bold my-7">Viva-visa Visa Consulting</h1>
                    <p className=''>The Viva-visa (Pvt) Limited is the largest visa consultancy and processing firm in Bangladesh. Initially opened for business as a partnership in 1999 and established as a company in 2002, The Visa Centre is based in Khulna 7 and comprises of a network of experienced visa consultants, lawyers, and processing staff.</p>
                    <div className='flex my-8'>
                        <FaRegHandshake className='text-7xl w-1/5' />
                        <div className='mx-5 pl-2'>
                            <h2 className='text-4xl mb-4'>My Mission</h2>
                            <p>To continuously exceed expectations of our trusted clients and deliver premier, personalised advisory experience that is simple and results in empowering our clients and their families.</p>
                        </div>
                    </div>
                    <div className='flex my-8'>
                        <FaRegEye className='text-7xl w-1/5' />
                        <div className='mx-5'>
                            <h2 className='text-4xl mb-4'>My Vision</h2>
                            <p>To be widely recognised as a premier advisory firm by rendering expert counsel to empower clients and their families in the entire process of being a global citizen.</p>
                        </div>
                    </div>
                    <div className='flex my-8'>
                        <GiCommercialAirplane className='text-7xl w-1/5' />
                        <div className='mx-5 pl-5'>
                            <h2 className='text-4xl mb-4'>My Strategy</h2>
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