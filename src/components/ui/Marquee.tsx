import { nanoid } from 'nanoid'
import React from 'react'

export const marqueeTexts = [
    {
        id: nanoid(),
        title: "Shop luxury furniture for your home!",

    },
    {
        id: nanoid(),
        title: "Custom built just for you 🤍 !!",

    },
    {
        id: nanoid(),
        title: "Ultra fast delivery.",

    },
    {
        id: nanoid(),
        title: "Bringing your dream furniture to life."

    },
    {
        id: nanoid(),
        title: "With love, wood & care."
    }
]

const Marquee = () => {
    return (
        <div className="relative text-sm flex uppercase tracking-wider bg-tallow-500 text-tallow-50 overflow-x-hidden">
            <div className="py-4 animate-marquee whitespace-nowrap">
                {marqueeTexts.map((item) => (
                    <span
                        key={"marquee-1-" + item.id}
                        className="mx-10 md:mx-20">{item.title}</span>
                ))}
            </div>

            <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap">
                {marqueeTexts.map((item) => (
                    <span
                        key={"marquee-2-" + item.id}
                        className="mx-10 md:mx-20">{item.title}</span>
                ))}
            </div>
        </div>
    )
}

export default Marquee