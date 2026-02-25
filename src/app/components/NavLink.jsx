"use client"
import React from "react"
import Link from "next/link"

const NavLink = ({href, title, onClick}) => {
    const handleClick = (e) => {
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const id = href.slice(1);
            const el = document.getElementById(id) || document.querySelector(href);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.pushState(null, '', href);
            } else {
                window.location.hash = href;
            }
            if (typeof onClick === 'function') onClick();
        }
    }

    const className = 'block py-2 pl-3 pr-4 text-[#adv7be] sm:text-xl rounded md:p-0 hover:text-white';

    if (href && href.startsWith('#')) {
        return (
            <a href={href} onClick={handleClick} className={className}>{title}</a>
        );
    }

    return (
        <Link href={href} onClick={onClick} className={className}>{title}</Link>
    );
}

export default NavLink;