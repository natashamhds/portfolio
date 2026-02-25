'use client'
import { useState, useEffect } from 'react';
import React from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';

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
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed mx-auto top-0 left-0 right-0 z-10 transition-colors duration-300 ${
                (isScrolled || navBarOpen) ? 'bg-black/20 backdrop-blur-md' : 'bg-transparent'
            }`}
        >
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href="/" className="flex items-center">
                    <Image 
                        src='/images/logo.png' 
                        alt="Logo" 
                        width={100} 
                        height={40}
                        priority
                    />
                </Link>

                {/* Mobile Menu Toggle */}
                <div className="mobile-menu block md:hidden">
                    {!navBarOpen ? (
                        <button
                            onClick={() => setNavBarOpen(true)}
                            className="flex items-center px-3 py-2 text-slate-200 hover:text-white"
                        >
                            <Bars3BottomRightIcon className="h-6 w-6" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavBarOpen(false)}
                            className="flex items-center px-3 py-2 text-slate-200 hover:text-white"
                        >
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    )}
                </div>

                {/* Desktop Links */}
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Mobile Overlay */}
            {navBarOpen && <MenuOverlay links={navLinks} onClose={() => setNavBarOpen(false)} />}
        </nav>
    );
};

export default Navbar;
