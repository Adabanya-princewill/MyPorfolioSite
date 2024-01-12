import React, { useEffect, useState } from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList({ isMobile }) {
    return (
        <ul className={`my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ${isMobile ? "bg-white p-4 rounded-md" : ""
            }`}>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-semibold"
            >
                <a href="#about" className="flex items-center hover:text-blue-500 transition-colors">
                    About
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-semibold"
            >
                <a href="#work" className="flex items-center hover:text-blue-500 transition-colors">
                    Work
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-semibold"
            >
                <a href="#contact" className="flex items-center hover:text-blue-500 transition-colors">
                    Contact
                </a>
            </Typography>
        </ul>
    );
}

export function NavBar() {
    const [openNav, setOpenNav] = useState(false);
    const [hasShadow, setHasShadow] = useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setHasShadow(scrollPosition > 0);
    };

    const ScrollToTop = () => {
        window.scrollTo(0, 0)
    }

    

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        window.addEventListener("scroll", handleScroll);
console.log(window)
        return () => {
            window.removeEventListener("resize", handleWindowResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Navbar id="top"
            className={`fixed top-1 z-40 mx-auto max-w-screen-xl shadow-none mt-4 px-6 py-3 bg-white ${hasShadow && "shadow-lg opacity-75 border border-indigo-500"}`}
        >
            <div className="flex items-center cursor-pointer justify-between text-blue-gray-900">
                <svg onClick={ScrollToTop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
                </svg>
                <Typography
                    as="a"
                    href=""
                    onClick={ScrollToTop}
                    variant="h6"
                    className="mr-4 cursor-pointer font-semibold py-1.5 tracking-widest"

                >

                    Adabanya <span className="text-indigo-500">Princewill.</span>
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}

                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList isMobile={true} />
            </Collapse>
        </Navbar>
    );
}