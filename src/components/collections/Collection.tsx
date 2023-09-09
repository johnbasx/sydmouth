import Image, { ImageProps } from 'next/image'
import React from 'react'

export interface CollectionProps {
    imageSrc: string
    title: string
    link?: string
}

const Collection = ({ imageSrc, title, link }: CollectionProps) => {
    return (
        <div className="relative sm:max-w-xs overflow-hidden bg-cover bg-no-repeat">
            <Image
                src={imageSrc}
                className="sm:max-w-xs h-[20rem] sm:h-[30rem] w-full object-cover transition duration-500 ease-in-out hover:scale-110"
                height={400}
                width={200}
                unoptimized
                alt={title}
            />
        </div>
    )
}

export default Collection