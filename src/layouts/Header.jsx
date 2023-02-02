import React from 'react';
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className="navbar flex w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                </div>
                <Link to='/'>
                    <img className='w-40' src={ logo } alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="flex items-center md:space-x-4">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="submit" title="Search" className="p-1 text-xl">
                                <BiSearchAlt2 />
                            </button>
                        </span>
                        <input type="search" name="Search" placeholder="Search for your favorite groups in ATG" className="py-2 pl-10 input input-bordered input-primary w-full focus:outline-none focus:border-none rounded-full" />
                    </div>
                </div>
            </div>
            <div className="navbar-end">
                <p>create Account. <strong>It's free!</strong></p>
            </div>
        </div>
    );
};

export default Header;
