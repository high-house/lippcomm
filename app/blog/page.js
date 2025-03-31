import Landing from '@/components/blog/Landing';
import { createClient } from 'next-sanity';
import Link from 'next/link';
import Image from 'next/image';
import NewsletterSignup from "@/components/blog/ContactUs"
import { Suspense } from 'react';
import useLippStore from '@/store/LippStore';

const client = createClient({
    projectId: 'ep1az9c9',
    dataset: 'production',
    apiVersion: '2021-08-31',
    useCdn: true,
});

async function getBlogs() {
    return await client.fetch(`*[_type == "post"]{
        _id, 
        title, 
        _createdAt, 
        slug, 
        "mainImage": mainImage.asset->url, 
        "authorName": author->name,
        "category": coalesce(category->title, "Uncategorized")
    }`);
}


export default async function Blogs() {
    const blogs = await getBlogs();
    return (
        <div className="w-screen">
            <Landing />

            <h1 className="text-6xl text-white font-bold text-center mb-20">Blog Posts</h1>
            <Suspense fallback={<div className='text-xl text-[#9fdcff]'>loading....</div>}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto lg:px-0 px-5">
                {blogs.map((blog) => (
                    <Link key={blog._id} href={`/blog/${blog.slug.current}`} passHref>
                        <div className="bg-white shadow-md flex flex-col items-center justify-between rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition h-[25rem]">
                            <div className='w-full h-1/2 p-2'>
                                {blog.mainImage ? (
                                    <Image
                                        src={blog.mainImage} // Now a direct URL
                                        alt={blog.title}
                                        width={200}
                                        height={200}
                                        className="object-cover w-full rounded-t-2xl"
                                        unoptimized // Debugging
                                    />
                                ) : (
                                    <div className="bg-gray-200 h-[500px] flex items-center justify-center">
                                        <span className="text-gray-500">No Image Available</span>
                                    </div>
                                )}
                            </div>
                            <div className="p-4 w-full h-1/3">
                                <h2 className="text-xl font-semibold">{blog.title}</h2>
                                <p className="text-gray-500 text-sm">
                                    {new Date(blog._createdAt).toLocaleDateString()} - {blog.authorName || 'Unknown Author'}
                                </p>
                                <p className="text-gray-600 text-sm font-medium">
                                    Category: {blog.category || 'Uncategorized'}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            </Suspense>
            <NewsletterSignup />
        </div>
    );
}






