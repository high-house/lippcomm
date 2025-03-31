import { createClient } from 'next-sanity';

export async function getServerSideProps(context) {
    const client = createClient({
        projectId: 'ep1az9c9',
        dataset: 'production',
        apiVersion: '2021-08-31',
        useCdn: true,
    });
    const query = `*[_type == "blog"]`;
    const blogs = await client.fetch(query);

    return {
        props: { blogs },
    };
}

const Blogs = ({ blogs }) => { // Receive the blogs prop
    console.log(blogs); // Now you'll see the data
    return (
        <div>
            {/* Render your blogs here */}
        </div>
    );
};

export default Blogs;