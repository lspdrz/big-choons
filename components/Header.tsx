import React, { ReactNode } from 'react'

const Header = () => (
    <nav className="p-4 mb-4 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b-2 border-gray-200">
        <div className="flex items-center justify-between">
            <a href="#" className="font-bold text-green-600">Big Choonz</a>
            <div className="flex">
            <a href="#" className="ml-4 text-green-600">+ Song</a>
            <a href="#" className="ml-4 text-black">Profile</a>
            <a href="#" className="ml-4 text-black">Logout</a>
            </div>
        </div>
    </nav>
)
export default Header