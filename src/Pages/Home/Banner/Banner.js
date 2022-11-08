import React from 'react';
import banner1 from '../../../assets/images/Banner/banner2.jpg'
import banner2 from '../../../assets/images/Banner/ban2.jpg'
import banner3 from '../../../assets/images/Banner/ban3.jpg'
const Banner = () => {
    return (
        <div className='container mt-20'>
            <div className="carousel w-full">
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} alt="" className="w-full h-4/5 rounded-lg" />
                    <div className="absolute justify-start transform -translate-y-1/2 left-10 top-1/4">
                        <h1 className="text-5xl text-white font-bold w-5/6 my-8">Viva-Visa is Global Immigration Consultants Ltd.</h1>
                        <p className="lg:text-xl text-white font-semibold w-3/5">You are presumed to know the law or procedures system, but it is likely you will not be aware of every factor that may affect your case.</p>
                        <br />
                        <button className="btn btn-outline btn-warning">Contract Us</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                        <a href="#slide2" className="btn btn-circle h-2/4">❮</a>
                        <a href="#slide1" className="btn btn-circle h-2/4">❯</a>
                    </div>
                </div>
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full h-4/5 rounded-lg" alt="" />
                    <div className="absolute justify-start transform -translate-y-1/2 left-10 top-1/4">
                        <h1 className="text-5xl text-white font-bold w-5/6 my-8">Consultancy that empowers you...</h1>
                        <p className="lg:text-xl text-white font-semibold w-3/5">Viva-visa consultancy services have started its operation in 1999. </p>
                        <br />
                        <button className="btn btn-outline btn-warning">Our Solutions</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle h-2/4">❮</a>
                        <a href="#slide2" className="btn btn-circle h-2/4">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} alt="" className="w-full h-4/5 rounded-lg" />
                    <div className="absolute justify-start transform -translate-y-1/2 left-10 top-1/4">
                        <h1 className="text-5xl text-white font-bold w-4/6 my-8">Emergence of New Ideas.</h1>
                        <p className="lg:text-xl text-white font-semibold w-3/5">At present, out of five countries of most happy, affluent & economically solvent country around the world, Australia & Canada are main two.</p>
                        <br />
                        <button className="btn btn-outline btn-warning">Read More</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle h-2/4">❮</a>
                        <a href="#slide3" className="btn btn-circle h-2/4">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;