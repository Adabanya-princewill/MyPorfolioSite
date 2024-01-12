import React from "react";
import { motion } from "framer-motion";
import '../index.css';

export const BouncyCardsFeatures = () => {
    return (
        <section id="work" className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
            <div className="pl-4">
                <h1 className="uppercase text-indigo-500">MY WORK</h1>
                <h1 className="capitalize text-4xl my-2 font-extrabold tracking-wider text">Projects.</h1>
                <p className="text-lg mb-10">
                    Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
                </p>
            </div>
            <div className="mb-4 grid grid-cols-12 gap-4">
                <BounceCard className="id-4 col-span-12 md:col-span-4 bg-gray-200">
                    <a rel="noreferrer" href="https://countrymanager.netlify.app/" target="_blank" className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-red-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <span className="block text-center font-semibold text-indigo-50">
                        Click to view
                        </span>
                    </a>
                </BounceCard>
                <BounceCard className="id-2 col-span-12 md:col-span-8 bg-gray-200">
                    <a rel="noreferrer" href="https://yellowdots-4906d.web.app/home" target="_blank" className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <span className="block text-center font-semibold text-orange-50">
                            Click to view
                        </span>
                    </a>
                </BounceCard>
            </div>
            <div className="grid grid-cols-12 gap-4">
                <BounceCard className="id-1 col-span-12 md:col-span-8 bg-gray-200">
                    <a rel="noreferrer" href='https://japaanow.com/' target="_blank" className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <span className="block text-center font-semibold text-emerald-50">
                            Click to view
                        </span>
                    </a>
                </BounceCard>
                <BounceCard className="id-3 col-span-12 md:col-span-4 bg-gray-200">
                   
                    <a rel="noreferrer" href="https://www.cyberfleetng.com/" target="_blank" className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <span className="block text-center font-semibold text-red-50">
                        Click to view
                        </span>
                    </a>
                </BounceCard>
            </div>
        </section>
    );
};

const BounceCard = ({ className, children }) => {
    return (
        <motion.div
            whileHover={{ scale: 0.95, rotate: "-1deg" }}
            className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
        >
            {children}
        </motion.div>
    );
};