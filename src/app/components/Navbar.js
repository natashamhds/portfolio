'use client'
import { useState, useEffect } from 'react';
import React from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const navLinks = [
    { title: 'About', path: '#about' },
    { title: 'Projects', path: '#projects' },
    { title: 'Contact', path: '#contact' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [navBarOpen, setNavBarOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0); // Set to true if scrolled
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-10 transition-colors duration-300 ${
                isScrolled ? 'bg-black/20 backdrop-blur-md' : 'bg-transparent'
            }`}
        >
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <Link href={'/'} className='text-2xl md:text-5xl text-white font-semibold'>Logo</Link>
                
                <div className='mobile-menu block md:hidden'>
                    {
                        !navBarOpen ? (
                            <button onClick={
                                () => setNavBarOpen(true)
                            } className='flex items-center px-3 py-2 border rounded-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <Bars3BottomRightIcon className='h-5 w-5' />
                            </button>
                        ) : (
                            <button onClick={
                                () => setNavBarOpen(false)
                            } className='flex items-center px-3 py-2 border rounded-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <XMarkIcon className='h-5 w-5' />
                            </button>
                        )
                    }
                </div>

                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;