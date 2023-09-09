import { nanoid } from 'nanoid';
import Image from 'next/image'
import React from 'react'
import { IconType } from 'react-icons';
import { FaFacebook, FaInstagram, FaSnapchat, FaTwitter, FaYoutube } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb"

const Footer = () => {

    const FooterSocial = ({ name, Icon, link = "#!" }: { name: string, Icon: IconType, link: string }) => {
        return (
            <li>
                <a
                    href={link}
                    rel="noreferrer"
                    target="_blank"
                    className="text-tallow-900 transition duration-200 hover:opacity-75"
                >
                    <span className="sr-only">{name}</span>

                    <Icon className="h-6 w-6" />
                </a>
            </li>

        )
    }
    return (
        <footer className="bg-tallow-300 lg:grid lg:grid-cols-5 mt-20">
            <div className="relative lg:block hidden lg:col-span-2 lg:h-full">
                <Image
                    src="/images/categories/mirrors/mirror-02.jpg"
                    alt="Sydmouth Footer"
                    height={300}
                    width={300}
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            <div className="px-6 py-16 sm:px-6 lg:col-span-3 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                        <p>
                            <span className="text-xs uppercase tracking-wide text-tallow-800">
                                Call us
                            </span>

                            <a
                                href="tel:+91-9971722464"
                                className="block text-2xl font-bold text-neutral-950 hover:opacity-75 sm:text-3xl"
                            >
                                +91-9971722464
                            </a>
                        </p>


                        <ul className="mt-8 space-y-1 text-sm text-tallow-900">
                            <li>Monday to Friday: 10PM - 5PM</li>
                            <li>Weekend: 10PM - 3PM</li>
                        </ul>
                        <div className='mt-8 space-y-1 text-sm text-tallow-900'>
                            <span className="text-xs uppercase tracking-wide text-tallow-800">
                                Address
                            </span>
                            <address className="mt-8 not-italic space-y-1 text-sm text-tallow-900">


                                <a href='mailto:yaiphaba@sydmouth.com' className='inline-flex items-center gap-1 hover:text-tallow-700'>yaiphaba@sydmouth.com
                                    <TbExternalLink />
                                </a>
                                <br />
                                <a href='https://goo.gl/maps/a8DXVwbvT9G37YyVA'
                                    className='hover:text-tallow-700'
                                    rel="noreferrer"
                                    target="_blank">
                                    Love Road, Canchipur<br />near Heirangoithong, Imphal
                                </a>
                            </address>
                        </div>


                        <ul className="mt-8 flex gap-6">

                            <FooterSocial name='Facebook' link='#!' Icon={FaFacebook} />
                            <FooterSocial name='Instagram' link='#!' Icon={FaInstagram} />
                            <FooterSocial name='Twitter' link='#!' Icon={FaTwitter} />
                            <FooterSocial name='Snapchat' link='#!' Icon={FaSnapchat} />
                            <FooterSocial name='Youtube' link='#!' Icon={FaYoutube} />


                        </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <FooterLinksHeader title='Explore' />

                            <ul className="mt-6 space-y-4 text-sm">
                                {exploreFooterLinks.map((item) => (
                                    <FooterLink key={item.id} title={item.title} link={item.link} />
                                ))}


                            </ul>
                        </div>

                        <div>
                            <FooterLinksHeader title='Know More' />

                            <ul className="mt-6 space-y-4 text-sm">
                                {knowMoreFooterLinks.map((item) => (
                                    <FooterLink link={item.link} title={item.title} key={item.id} />
                                ))}

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-tallow-700 pt-12">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <ul className="flex flex-wrap gap-4 text-xs">
                            <li>
                                <a href="#" className="text-tallow-800 transition hover:opacity-75">
                                    Terms & Conditions
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-tallow-800 transition hover:opacity-75">
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-tallow-800 transition hover:opacity-75">
                                    Cookies
                                </a>
                            </li>
                        </ul>

                        <p className="mt-8 text-xs text-tallow-800 sm:mt-0">
                            &copy; 2023. Sydmouth House. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

const FooterLinksHeader = ({ title }: { title: string }) => {
    return (
        <p className="font-medium text-neutral-950">{title}</p>
    )
}

export const exploreFooterLinks = [
    {
        id: nanoid(),
        title: "Customizations",
        link: "/customizations"
    },
    {
        id: nanoid(),
        title: "Gifts",
        link: "/gifts"
    },
    {
        id: nanoid(),
        title: "Furniture Living",
        link: "/furniture-living"
    },
    {
        id: nanoid(),
        title: "Free Givaways",
        link: "/free givaways"
    },
]

export const knowMoreFooterLinks = [
    {
        id: nanoid(),
        title: "Our Journey",
        link: "/our-journey"
    },
    {
        id: nanoid(),
        title: "Our Team",
        link: "/our-team"
    },
    {
        id: nanoid(),
        title: "About Sydmouth",
        link: "/our-journey"
    },
    {
        id: nanoid(),
        title: "FAQs",
        link: "/faqs"
    },
]

const FooterLink = ({ title, link = "#!" }: { title: string, link: string }) => {
    return (
        <li>
            <a href={link} className="text-tallow-900 transition hover:opacity-75">
                {title}
            </a>
        </li>
    )
}

export default Footer