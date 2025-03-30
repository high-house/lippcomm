import React from 'react';

const blog = {
  title: "Understanding React Hooks",
  description: "A deep dive into React Hooks and how they improve state management in functional components.",
  slug: "understanding-react-hooks",
  date: "March 29, 2025",
  author: "John Doe",
  content: "<p>React Hooks allow you to use state and other React features without writing a class.</p><p>They simplify component logic and improve code readability.</p>"
};

function Page({ params }) {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-6xl font-bold text-white mb-4">{blog.title}</h1>
      <p className="text-[#9fdcff] mb-2 text-3xl">By {blog.author} • {blog.date}</p>
      <p className="text-[#9fdcff] mb-4">{blog.description}</p>
      <div className="prose max-w-full" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
    </div>
  );
}

export default Page;
