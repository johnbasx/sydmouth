import React from 'react'
import Collection from './collections/Collection'
import { nanoid } from 'nanoid'

export const collectionImagesData = [
    {
        id: nanoid(),
        imageSrc: '/images/collections/collection-12.jpg',
        category: 'Best Sellers'
    },
    {
        id: nanoid(),
        imageSrc: '/images/collections/collection-3.jpg',
        category: 'Summer Vibe'
    },
    {
        id: nanoid(),
        imageSrc: '/images/collections/collection-4.jpg',
        category: 'Mirror Magic'
    },
    {
        id: nanoid(),
        imageSrc: '/images/collections/collection-5.jpg',
        category: 'Love Wood'
    },
    {
        id: nanoid(),
        imageSrc: '/images/collections/collection-6.jpg',
        category: 'Minimalistic'
    },
    {
        id: nanoid(),
        imageSrc: '/images/collections/collection-7.jpg',
        category: 'Black & White'
    },
    {
        id: nanoid(),
        imageSrc: '/images/collections/collection-8.jpg',
        category: 'Classical'
    },

]

const HorizontalCollection = () => {
    return (
        <div className="my-4 mx-auto">
            <div
                id="scrollContainer"
                className="flex flex-no-wrap overflow-x-scroll no-scrollbar scrolling-touch items-start mb-8"
            >{collectionImagesData.map((item) => (
                <div key={"Collection-" + item.id}
                    className="flex-none w-2/3 md:w-auto mr-6"
                >
                    <a href="#!" className="space-y-4">
                        <div className='group relative overflow-hidden'>
                            <div className='bg-tallow-700/50 backdrop-blur-lg w-full h-full translate-y-[60%] md:translate-y-[100%] md:group-hover:translate-y-[60%] duration-300 z-10 inset-0 absolute p-4 text-tallow-100'>
                                <h3 className='font-semibold text-lg md:text-xl'>{item.category}</h3>
                                <p className='text-sm line-clamp-3 text-ellipsis'>Create a rustic modern haven with our timeless products.</p>
                            </div>
                            <Collection imageSrc={item.imageSrc} title={item.category} />
                        </div>
                        <h5 className='text-lg font-medium tracking-widest text-center uppercase'>{item.category}</h5>
                    </a>
                </div>
            ))}
            </div>
        </div>
    )
}

export default HorizontalCollection