"use client";
import React, { useEffect, useState } from "react";
import { TransitionLink } from "../Transition/TransitionLink";
import Image from "next/image";

function Blog({ blog }) {
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        const resizeWindow = () => setMobile(window.innerWidth <= 700);

        window.addEventListener("resize", resizeWindow);
        resizeWindow(); // Ensure it runs initially

        return () => window.removeEventListener("resize", resizeWindow); 
    }, []);

    if (!blog) {
        return (
            <div className="text-center py-10">
                <h1 className="text-2xl font-bold">Blog not found</h1>
                <TransitionLink href="/blog" className="text-blue-600 mt-4 inline-block">
                    ← Back to Blog List
                </TransitionLink>
            </div>
        );
    }

    return (
        <div className="w-full lg:w-3/4 lg:h-3/4 bg-[#9fdcff] lg:mt-0 mt-40 lg:mx-auto flex flex-col lg:flex-row justify-center items-center rounded-2xl overflow-hidden shadow-lg">
            {/* Blog Image (Only on Desktop) */}
            {isMobile && (
                <div className="w-full lg:w-1/2 p-2">
                    <Image
                        src={blog.mainImage}
                        alt={blog.title}
                        width={1000}
                        height={1000}
                        className="object-cover w-full h-[300px] md:h-[400px] lg:h-full rounded-none lg:rounded-r-2xl"
                        unoptimized
                    />
                </div>
            )}

            {/* Blog Content */}
            <div className="w-full  lg:w-1/2 p-6 lg:p-10 lg:h-full">
                <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white">{blog.title}</h1>
                <p className="text-[#292828] text-sm lg:text-base">
                    {new Date(blog._createdAt).toLocaleDateString()} - {blog.authorName || "Unknown Author"}
                </p>
                <p className="text-[#292828] text-sm lg:text-base font-medium mb-4">
                    Category: {blog.category || "Uncategorized"}
                </p>
                <TransitionLink href="/blog" className="text-blue-600 mt-4 inline-block">
                    ← Back to Blog List
                </TransitionLink>

                <div className="mt-4 lg:mt-6 space-y-4 max-h-[30rem] overflow-y-auto">
                    {blog.body.map((block, index) => (
                        <p key={index} className="text-[#292828] text-sm lg:text-base w-full">
                            {block.children.map((child) => child.text).join(" ")}
                        </p>
                    ))}
                </div>
            </div>
            {!isMobile && (
                <div className="w-full lg:w-1/2 p-2 lg:h-full">
                    <Image
                        src={blog.mainImage}
                        alt={blog.title}
                        width={1000}
                        height={1000}
                        className="object-cover w-full h-[300px] md:h-[400px] lg:h-full rounded-none lg:rounded-r-2xl"
                        unoptimized
                    />
                </div>
            )}
        </div>
    );
}

export default Blog;
