import Image from 'next/image';

export default function SmallScreenPopup({ blog, onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md relative">
                <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>
                    ✖
                </button>
                {blog.mainImage && (
                    <Image
                        src={blog.mainImage}
                        alt={blog.title}
                        width={300}
                        height={200}
                        className="object-cover w-full rounded-lg"
                        unoptimized
                    />
                )}
                <h2 className="text-xl font-bold mt-4">{blog.title}</h2>
                <p className="text-gray-500 text-sm">{new Date(blog._createdAt).toLocaleDateString()} - {blog.authorName || 'Unknown Author'}</p>
                <p className="text-gray-600 text-sm font-medium">Category: {blog.category || 'Uncategorized'}</p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg" onClick={() => window.location.href=`/blog/${blog.slug.current}`}>
                    Read More
                </button>
            </div>
        </div>
    );
}
