import Image from 'next/image';
import Link from 'next/link';



export default function Blog() {
  return (
        <div className='w-screen h-auto bg-[#292828] text-[#9fdcff]'>
                <Blogs/>
        </div>
  );
}


const Blogs=()=>{
    return(
        <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10">Latest Blogs</h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <Image src={blog.image} alt={blog.title} width={400} height={250} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
                <div className="text-gray-500 text-sm mb-3">By {blog.author} • {blog.date}</div>
                <Link href={`/blog/${blog.slug}`}>
                  <span className="text-blue-600 font-semibold hover:underline">Read More →</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}



const blogs = [
    {
      title: "Understanding React Hooks",
      description: "A deep dive into React Hooks and how they improve state management in functional components.",
      slug: "understanding-react-hooks",
      date: "March 29, 2025",
      author: "John Doe",
      image: "/home/abc2.jpg"
    },
    {
      title: "Next.js for Beginners",
      description: "Learn the basics of Next.js and how it simplifies React development.",
      slug: "nextjs-for-beginners",
      date: "March 28, 2025",
      author: "Jane Smith",
      image: "/home/abc3.jpg"
    },
    {
      title: "Mastering Tailwind CSS",
      description: "A complete guide to using Tailwind CSS for modern web development.",
      slug: "mastering-tailwind-css",
      date: "March 27, 2025",
      author: "Alice Johnson",
      image: "/home/img1.jpg"
    }
  ];