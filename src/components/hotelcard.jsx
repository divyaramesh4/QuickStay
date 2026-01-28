import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Hotelcard = ({ room, index }) => {
    if (!room) return null;
    return (
        <Link to={'/rooms/' + room._id} onClick={() => scrollTo(0, 0)} key={room?._id} className='relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.5)] mb-15 transition-transform duration-300 ease-out
    hover:scale-105' >
            <img src={room.images[0]} alt="" />
            {index % 2 === 0 && <p className='px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full'> Best Seller</p>}
            <div className='p-4 pt-5'>
                <div className='flex items-center justify-between'>
                    <p className='font playfair text-xl font-medium text-gray-800`'>
                        {room.hotel.name}
                    </p>
                    <div>
                        <img src={assets.starIconFilled} alt=""></img>
                    </div>
                </div>
                <div className='flex items-center gap-1 text-sm'>
                    <img src={assets.locationIcon} alt=""></img>
                    <span>{room.hotel.address}</span>
                </div>
                <div className='flex items-center justify-between mt-4'>
                    <p><span className='text-xl text-gray-800'>
                        ${room.pricePerNight}/night
                    </span>
                        <button className='px-4 py-2 ml-12 text-sm font-medium bg-blue-400 text-white border border-gray-300 rounded hover:bg-black transition-all  cursor-pointer'>Book Now</button>
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default Hotelcard