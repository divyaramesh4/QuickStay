import React from 'react'
import { assets } from "../assets/assets";
const Hero = () => {
    return (
        <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center h-screen'>

            <p className='bg-[#49B9FF]/50 px-4 py-1.5 rounded-full mt-24 text-sm font-medium'>
                The ultimate Hotel Experience
            </p>

            <h1 className='font-display text-3xl md:text-5xl lg:text-6xl leading-tight font-bold max-w-2xl mt-6'>
                Discover your Perfect Gateway Destination
            </h1>

            <p className='max-w-md mt-4 text-base md:text-lg opacity-90'>
                Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start Your Journey Today.
            </p>

            <form className='bg-white text-gray-500 rounded-lg px-6 py-4  flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto mt-8'>

                <div className="flex flex-col">
                    <div className='flex items-center gap-2'>
                        <img src={assets.calenderIcon} alt="" className='h-4' />
                        <label htmlFor="destinationInput" className="text-sm font-medium text-gray-700">
                            Destination
                        </label>
                    </div>

                    <select
                        id="destinationInput"
                        className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none bg-white cursor-pointer hover:border-gray-400 transition-colors"
                        required
                        defaultValue=""
                    >
                        <option value="" disabled>Select a city</option>
                        <option value="singapore">Singapore</option>
                        <option value="dubai">Dubai</option>
                        <option value="ny">New York</option>
                        <option value="london">London</option>
                    </select>
                </div>

                <div>
                    <div className='flex items-center gap-2'>
                        <img src={assets.calenderIcon} alt="" className='h-4' />
                        <label htmlFor="checkIn">Check in</label>
                    </div>
                    <input id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
                </div>

                <div>
                    <div className='flex items-center gap-2'>
                        <img src={assets.calenderIcon} alt="" className='h-4' />
                        <label htmlFor="checkOut">Check out</label>
                    </div>
                    <input id="checkOut" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
                </div>

                <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                    <label htmlFor="guests">Guests</label>
                    <input min={1} max={4} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" />
                </div>

                <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
                    <img src={assets.searchIcon} alt="" className='h-8' />
                    <span>Search</span>
                </button>
            </form>
        </div>
    )
}

export default Hero