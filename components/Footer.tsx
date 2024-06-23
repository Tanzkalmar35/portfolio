import React from "react";
import {MagicButton} from "@/components/ui/MagicButton";
import {FaLocationArrow} from "react-icons/fa6";
import {socialMedia} from "@/data";

export const Footer = () => {
    return (
        <footer className="w-full pb-10 mb-[100px] md:mb-10 mt-10" id="contact">
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Let&apos;s build something truly {' '}
                    <span className="text-purple">
                        amazing
                    </span>
                    {' '} together!
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me and let&apos;s collaborate.
                </p>
                <a href="mailto:fabianholler@protonmail.com">
                    <MagicButton
                    title="Let's get in touch"
                    icon={<FaLocationArrow />}
                    iconPosition="right" />
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2024 Fabian Holler</p>
                <div className="flex items-center md:gap-5 gap-6">
                    {socialMedia.map((profile) => (
                        <a
                            href={profile.link}
                            target={"_blank"}
                            key={profile.id}
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter
                            backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                            <img src={profile.img} alt={profile.id + ""} width={20} height={20} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
