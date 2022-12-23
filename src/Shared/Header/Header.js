import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Header = () => {
    const { logOut, user } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then()
            .catch(err => console.err(err))
    }
    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu font-semibold menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='ml-5'><Link to="/services">Services</Link></li>
                        <li className='ml-5'><Link to="/blogs">Blogs</Link></li>
                        {
                            user?.email ?
                                <>
                                    <li className='ml-5'><Link to="/myReview">My Review</Link></li>
                                    <li className='ml-5'><Link to="/addService">Add Service</Link></li>
                                    <li className='ml-5'><button onClick={handleSignOut}>logout</button></li>
                                </>
                                :
                                <li className='ml-5'><Link to="/login">Login</Link></li>
                        }
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case font-bold text-3xl">Visa-Corner</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu font-semibold menu-horizontal p-0">
                    <li className='ml-5'><Link to="/services">Services</Link></li>
                    <li className='ml-5'><Link to="/blogs">Blogs</Link></li>
                    {
                        user?.email ?
                            <>
                                <li className='ml-5'><Link to="/myReview">My Review</Link></li>
                                <li className='ml-5'><Link to="/addService">Add Service</Link></li>
                                <li className='ml-5'><button onClick={handleSignOut}>logout</button></li>
                            </>
                            :
                            <li className='ml-5'><Link to="/login">Login</Link></li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;