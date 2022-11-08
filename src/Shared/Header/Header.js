import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100 container">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='ml-5'><Link to="/services">Services</Link></li>
                        <li className='ml-5'><Link to="/login">Login</Link></li>
                        <li className='ml-5'><a>Item 3</a></li>
                        <li className='ml-5'><a>Item 4</a></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-3xl">Viva-visa</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='ml-5'><Link to="/services">Services</Link></li>
                    <li className='ml-5'><Link to="/login">Login</Link></li>
                    <li className='ml-5'><a>Item 3</a></li>
                    <li className='ml-5'><a>Item 4</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;