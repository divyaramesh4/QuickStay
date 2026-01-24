import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from '../assets/assets'

const ExclusiveOffers = () => {
    return (
        <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <Title align='left' title='Exclusive Offers' subTitle='Take advantage of our limited-time Offersand special packages to enance your stay and create unforgettable memories. ' />
                <button className='mr-5 ml-40 mt-1  pl-4 pr-4 mb-0 px-12 py-2 font-medium bg-purple-700 text-white border border-gray-300 rounded-xl hover:bg-black transition-all  cursor-pointer'>View All Offers
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12  '>
                {exclusiveOffers.map((item) => (<div key={item._id} className='group relative ml-2 mr-2 flex flex-col items-start justify-between gap-1 pt-25 md:pt-25 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center hover:scale-110' style={{ backgroundImage: `url(${item.image})` }}>
                    <p className='px-3 py-1 mb-4 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full'>{item.priceOff} %OFF</p>
                    <div>
                        <p className='text-2xl font-medium font-playfair '>{item.title}</p>
                        <p>{item.description}</p>
                        <p className='text-xs text-white/70 mt-3'>Expires {item.expiryDate}</p>
                    </div>
                    <button className='flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5'>
                        View Offers
                    </button>
                </div>
                ))}
            </div>
        </div>
    )
}

export default ExclusiveOffers