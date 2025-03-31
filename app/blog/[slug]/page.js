import Blog from '@/components/blog/Blog';
import { createClient } from 'next-sanity';


const client = createClient({
    projectId: 'ep1az9c9',
    dataset: 'production',
    apiVersion: '2021-08-31',
    useCdn: true,
});

async function getBlog(slug) {
    return await client.fetch(
        `*[_type == "post" && slug.current == $slug][0]{
            title, 
            _createdAt, 
            "mainImage": mainImage.asset->url, // Fetch direct image URL
            "authorName": author->name,
            "category": category->title,
            body
        }`,
        { slug }
    );
}

export default async function BlogPost({ params }) {
    const { slug } = await params;
    const blog = await getBlog(slug);

    if (!blog) {
        return (
            <div className="text-center py-10">
                <h1 className="text-2xl font-bold">Blog not found</h1>
                <Link href="/blog" className="text-blue-600 mt-4 inline-block">
                    Go back to Blogs
                </Link>
            </div>
        );
    }

    return (
        <div className="w-screen lg:h-screen h-[135vh]  flex justify-center items-center p-4 lg:p-0">
            <Blog blog={blog}/>
        </div>
    );
}
