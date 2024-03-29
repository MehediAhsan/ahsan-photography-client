import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import toast from 'react-hot-toast';
import logo from '../../assets/logo.png'

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
    .then( () => {
      toast.success('Logout Successfully');
    })
    .catch( error => {
        console.error(error);
    })
  }

    return (
        <div className="shadow-lg sticky inset-0 z-50 bg-rose-100 opacity-80">
        <div className='container mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-0 px-4 py-4 '>
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Ahsan Photography"
            title="Ahsan Photography"
            className="inline-flex items-center"
          >
            <img className='w-8 md:w-10' src={logo} alt="" />
            <span className="ml-2 text-xl md:text-2xl font-semibold tracking-wide text-orange-500 font-Berkshire ">
              Ahsan Photography
            </span>
          </Link>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/"
                aria-label="Home"
                title="Home"
                className="font-medium tracking-wide text-gray-900 uppercase transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                aria-label="Services"
                title="Services"
                className="font-medium tracking-wide text-gray-900 uppercase transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Services
              </Link>
            </li>
            
            <li>
              <Link
                to="/blog"
                aria-label="Blog"
                title="Blog"
                className="font-medium tracking-wide text-gray-900 uppercase transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Blog
              </Link>
            </li>
            <>
              {
                user ?
                <>
                  <li>
                    <Link
                      to="/reviews"
                      aria-label="My reviews"
                      title="My reviews"
                      className="font-medium tracking-wide text-gray-900 uppercase transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      My reviews
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/addservice"
                      aria-label="Add service"
                      title="Add service"
                      className="font-medium tracking-wide text-gray-900 uppercase transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      Add service
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogOut}
                      className="inline-flex items-center justify-center h-11 px-5 font-medium tracking-wide text-white transition duration-200 rounded-3xl shadow-md bg-orange-500 hover:bg-orange-600 focus:shadow-outline focus:outline-none uppercase"
                      aria-label="Login"
                      title="Login"
                    >
                      Logout
                    </button>
                  </li>
                  <li>
                    <Tooltip
                      title={user?.displayName}
                      position="bottom"
                      trigger="mouseenter"
                    >
                      <Link>
                        <img src={user?.photoURL ? user?.photoURL : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                      </Link>
                    </Tooltip>
                  </li>
                </> :
                <>
                  <li>
                    <Link
                      to="/login"
                      className="inline-flex items-center justify-center h-11 px-5 font-medium tracking-wide text-white transition duration-200 rounded-3xl shadow-md bg-orange-500 hover:bg-orange-600 focus:shadow-outline focus:outline-none uppercase"
                      aria-label="Login"
                      title="Login"
                    >
                      Login
                    </Link>
                  </li>
                </>
              }
            </>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute z-50 top-0 left-0 w-full">
                <div className="p-5 bg-gray-100 border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img className='w-8' src={logo} alt="" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-orange-500 font-Berkshire">
                          Ahsan Photography
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                    <li>
              <Link
                to="/"
                aria-label="Home"
                title="Home"
                className="font-medium tracking-wide text-gray-900 uppercase transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                aria-label="Services"
                title="Services"
                className="font-medium tracking-wide text-gray-900 uppercase transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Services
              </Link>
            </li>
            
            <li>
              <Link
                to="/blog"
                aria-label="Blog"
                title="Blog"
                className="font-medium tracking-wide text-gray-900 uppercase transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Blog
              </Link>
            </li>
            <>
              {
                user ?
                <>
                  <li>
                    <Link
                      to="/reviews"
                      aria-label="My reviews"
                      title="My reviews"
                      className="font-medium tracking-wide text-gray-900 uppercase transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      My reviews
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/addservice"
                      aria-label="Add service"
                      title="Add service"
                      className="font-medium tracking-wide text-gray-900 uppercase transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      Add service
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogOut}
                      className="inline-flex items-center justify-center h-11 px-5 font-medium tracking-wide text-white transition duration-200 rounded-3xl shadow-md bg-orange-500 hover:bg-orange-600 focus:shadow-outline focus:outline-none uppercase"
                      aria-label="Login"
                      title="Login"
                    >
                      Logout
                    </button>
                  </li>
                  <li>
                    <Tooltip
                      title={user?.displayName}
                      position="bottom"
                      trigger="mouseenter"
                    >
                      <Link>
                        <img src={user?.photoURL ? user?.photoURL : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                      </Link>
                    </Tooltip>
                  </li>
                </> :
                <>
                  <li>
                    <Link
                      to="/login"
                      className="inline-flex items-center justify-center h-11 px-5 font-medium tracking-wide text-white transition duration-200 rounded-3xl shadow-md bg-orange-500 hover:bg-orange-600 focus:shadow-outline focus:outline-none uppercase"
                      aria-label="Login"
                      title="Login"
                    >
                      Login
                    </Link>
                  </li>
                </>
              }
            </>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
        </div>
      </div>
    );
};

export default Header;