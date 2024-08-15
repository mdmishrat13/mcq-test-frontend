import { useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const PublicNavbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="w-full bg-gray-900 shadow">
        <div className="flex justify-between md:items-center px-4 mx-auto lg:max-w-7xl min-h-[70px] md:px-8 relative">

            <Link to='/'>
              <h2 className="text-2xl font-bold text-white mt-4 md:mt-0">Connects</h2>
          </Link>
          
          <div className="hidden md:flex md:space-x-8">
            <Link to='/' className="text-white px-4 py-2">
              Home
            </Link>
            <Link to='/about-us' className="text-white px-4 py-2">
              About
            </Link>
            <Link to='/contact-us' className="text-white px-4 py-2">
              Contact
            </Link>
            <Link to='/login' className="text-white px-4 py-2">
              Products
            </Link>
          </div>
          <div className="md:hidden absolute right-4 top-2 mt-2">
            <button
              className="p-2 text-white rounded-md outline-none"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <IoClose className='text-2xl text-white' />
              ) : (
                <IoMenu className='text-2xl text-white' />
              )}
            </button>
          </div>

          {navbar&&<div className="md:hidden pb-3 md:pb-0 md:mt-0 w-full mt-[70px]" >
            <ul className="justify-between w-full">
              {navbar && <div className="flex flex-col">
                <Link to='/login' className={`block text-white ${navbar && "hover:text-black hover:bg-white px-4 py-2"}`}>
                  Home
                </Link>
                <Link to='/about-us' className={`block text-white ${navbar && "hover:text-black hover:bg-white px-4 py-2"}`}>
                  About
                </Link>
                <Link to='/contact-us' className={`block text-white ${navbar && "hover:text-black hover:bg-white px-4 py-2"}`}>
                  Contact
                </Link>

                <Link to='/login' className={`w-full text-white ${navbar && "hover:text-black hover:bg-white px-4 py-2"}`}>
                  Login
                </Link>
                <Link to='/register' className={`w-full text-white ${navbar && "hover:text-black hover:bg-white px-4 py-2"}`}>
                  Register
                </Link>
              </div>}
            </ul>
          </div>}
          <div className="hidden md:flex justify-between md:space-x-4">
            <Link to='/login' className="text-white px-4 py-2">
              Login
            </Link>
            <Link to='/register' className="text-white  px-4 py-2">
              Register
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default PublicNavbar;