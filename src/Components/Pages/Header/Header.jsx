import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="flex justify-between items-center py-6 px-10 bg-white shadow-md">

            <div>
                <h1 className="text-4xl font-bold text-gray-800">Recipe Calories</h1>
            </div>

            <div className="flex-1 px-10">
                <ul className="flex justify-center items-center text-lg gap-8">
                    {['Home', 'Recipes', 'About', 'Search'].map((item, index) => (
                        <li key={index} className="relative group">
                            <a href="#" className="hover:text-red-400 transition-colors duration-300 ease-in-out">
                                {item}
                            </a>
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex items-center gap-4">
                <input type="text" placeholder="Search" className="p-3 rounded-lg shadow-md outline-none border border-gray-300 focus:border-red-400 transition-all" />
                <button className="px-4 py-2 rounded-full bg-red-400 text-white font-semibold hover:bg-red-500 transition-colors duration-300 border-2 border-transparent hover:border-red-400">
                <FaRegUserCircle />
                </button>
            </div>
        </div>
    );
}

export default Header;
