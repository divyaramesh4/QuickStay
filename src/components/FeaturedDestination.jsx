import React from 'react'
import Hotelcard from './hotelcard'
import { roomsDummyData } from '../assets/assets'
import Title from './Title'
import { useNavigate } from 'react-router-dom'
const FeaturedDestination = () => {
    const navigate = useNavigate()
    return (
        
        <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 mt-8'>
            <Title title="Featured Destination" subTitle="Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences."/> 
            <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
                {roomsDummyData.slice(0, 4).map((room, index) => (<Hotelcard key={room._id} room={room} index={index} />))}
                <Hotelcard />
            </div>
            <button onClick={()=>{navigate('/rooms'); scrollTo(0,0)}} className='mt-1  mb-0 px-4 py-2 font-medium bg-purple-700 text-white border border-gray-300 rounded-xl hover:bg-black transition-all  cursor-pointer '>
                View All Destinations
            </button>
        </div>
    )
}

export default FeaturedDestination