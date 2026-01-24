import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <footer className="w-full bg-linear-to-b from-[#7a32ff] to-[#2E0A6F] text-white font-playfair">
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-6">
                    <img alt="" className="h-11"
                        src={assets.logo}/>
                </div>
                <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
                    A better way to find your stay.
                    Because comfort should never be complicated.
                </p>
            </div>
            <div className="border-t border-[#3B1A7A]">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                    <a href="/">QuickStay</a> ©2025. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer