import { useEffect, useState } from 'react';

type Post = {
    id: number;
    title: string;
    body: string;
};

function Posts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data: Post[] = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    if (posts.length === 0) {
        return <p>Loading posts...</p>;
    }

    const post = posts[count];

    return (
        <div>
            <h1>Posts</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button
                onClick={() => setCount(count - 1)}
                disabled={count === 0}
            >
                Previous Post
            </button>
            <button
                onClick={() => setCount(count + 1)}
                disabled={count === posts.length - 1}
            >
                Next Post
            </button>
        </div>
    );
}

export default Posts;
