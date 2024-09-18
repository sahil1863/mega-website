import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
    return (
        <footer className="  bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] w-full relative z-10">
            <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
                <div className="flex flex-wrap justify-between items-center space-y-6 md:space-y-0">
                    <div className="flex items-center space-x-4">
                        <Logo width="100px" />
                        <p className="text-base text-gray-100">
                            Designed and Developed by Team Shield<br />&copy; Copyright 2023-24 | All Rights Reserved
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="https://www.instagram.com/sahil__1901__/" className="text-indigo-400 hover:text-indigo-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
                                <radialGradient id="instagram-gradient" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="#fd5" />
                                    <stop offset=".328" stopColor="#ff543f" />
                                    <stop offset=".348" stopColor="#fc5245" />
                                    <stop offset=".504" stopColor="#e64771" />
                                    <stop offset=".643" stopColor="#d53e91" />
                                    <stop offset=".761" stopColor="#cc39a4" />
                                    <stop offset=".841" stopColor="#c837ab" />
                                </radialGradient>
                                <path fill="url(#instagram-gradient)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z" />
                                <radialGradient id="instagram-gradient-overlay" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="#4168c9" />
                                    <stop offset=".999" stopColor="#4168c9" stopOpacity="0" />
                                </radialGradient>
                                <path fill="url(#instagram-gradient-overlay)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z" />
                                <path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5 s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z" />
                                <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
                                <path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12 C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/sahil-chhabra-08b789231" className="text-indigo-400 hover:text-indigo-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
                                <path fill="#0078D4" d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM9.5 18H7V10h2.5v8zm-1.25-9.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM18 18h-2.5v-4.75c0-1.281-.656-2.25-1.938-2.25s-2.188.969-2.188 2.25V18H9V10h2.375v1.188c.625-.969 1.75-1.812 3.625-1.812 2.625 0 4.625 1.75 4.625 5.25V18z"/>
                            </svg>
                        </a>
                        <a href="https://github.com/sahil1863" className="text-indigo-400 hover:text-indigo-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
                                <path fill="#000000" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.491.5.091.682-.217.682-.482 0-.238-.009-.866-.014-1.7-2.782.603-3.37-1.338-3.37-1.338-.455-1.155-1.112-1.463-1.112-1.463-.908-.62.069-.606.069-.606 1.004.072 1.531 1.032 1.531 1.032.891 1.528 2.342 1.087 2.913.831.091-.644.35-1.085.636-1.334-2.22-.252-4.555-1.113-4.555-4.943 0-1.092.39-1.984 1.032-2.683-.104-.252-.448-1.268.099-2.644 0 0 .84-.268 2.75 1.025.8-.223 1.656-.334 2.506-.337.85.003 1.706.114 2.506.337 1.909-1.293 2.747-1.025 2.747-1.025.549 1.376.204 2.392.1 2.644.642.7 1.03 1.591 1.03 2.683 0 3.839-2.339 4.688-4.567 4.936.36.309.678.919.678 1.853 0 1.337-.012 2.414-.012 2.74 0 .267.18.578.688.48A10.007 10.007 0 0022 12c0-5.523-4.477-10-10-10z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <hr className="border-gray-700" />

                <div className="flex flex-wrap justify-between items-start gap-8">
                    <div>
                        <h3 className="mb-2 text-xs font-semibold uppercase text-gray-500">Company</h3>
                        <ul className="text-sm text-gray-400 space-y-2">
                            <li>
                                <Link className="text-base font-medium text-gray-300 hover:text-gray-100" to="/about">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium text-gray-300 hover:text-gray-100" to="/features">
                                    Features
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-2 text-xs font-semibold uppercase text-gray-500">Support</h3>
                        <ul className="text-sm text-gray-400 space-y-2">
                            <li>
                                <Link className="text-base font-medium text-gray-300 hover:text-gray-100" to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className="text-base font-medium text-gray-300 hover:text-gray-100" to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-full text-center">
                    <form className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                        <input 
                            type="email" 
                            className="w-full md:w-auto px-4 py-2 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            placeholder="Subscribe to our newsletter" 
                        />
                        <button 
                            type="submit" 
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
