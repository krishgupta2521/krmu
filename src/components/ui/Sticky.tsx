"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "Navigation",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla exercitationem fugiat, libero sequi. Hello!!!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla exercitationem fugiat, libero sequi. Hello!!!",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="https://t4.ftcdn.net/jpg/09/59/46/07/360_F_959460756_r2QlQo41b8FMriFkRKHktmcRGIs4Aa4y.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Beaches",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla exercitationem fugiat, libero sequi. Hello!!!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla exercitationem fugiat, libero sequi. Hello!!!",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="https://thumbs.dreamstime.com/b/beach-sea-18378306.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Whales",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla exercitationem fugiat, libero sequi. Hello!!!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla exercitationem fugiat, libero sequi. Hello!!!",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="https://images.unsplash.com/photo-1568430462989-44163eb1752f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hhbGV8ZW58MHx8MHx8fDA%3D"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Cargo Ship Crashes",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla exercitationem fugiat, libero sequi. Hello!!!",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="https://media.licdn.com/dms/image/D5612AQFhD49opraaPw/article-cover_image-shrink_600_2000/0/1698110246413?e=2147483647&v=beta&t=Y7OKZ5tvLvm6OX1-tFiY7TExIeymkRgdB-qkjWhYKko"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
];
export function StickyScrollRevealDemo() {
    return (
        <div className="p-10">
            <StickyScroll content={content} />
        </div>
    );
}
