import {useEffect, useState} from "react";

import "./Home.css";

import PostsList from "../PostsList/PostsList";

const Home = () => {

    const [posts, setPosts] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const handleDelete = (postId) => {
        setPosts(posts.filter(post => post.id !== postId));
    }

    useEffect(() => {
        fetch(" http://localhost:8001/posts")
            .then(response => {
                if (!response.ok) {
                    throw Error("Could not fetch the requested resource.");
                }
                return response.json();
            })
            .then(data => {
                setPosts(data);
                setIsPending(false);
                setError(null);
            })
            .catch(error => {
                setError(error.message);
                setIsPending(false);
            });
    }, []);

    return (
        <div className="container home">
            {isPending && <p>Loading...</p>}

            {posts && <>
                <PostsList title="All Posts" posts={posts} handleDelete={handleDelete}/>
                <PostsList
                    title="Mario's Posts"
                    posts={posts.filter(post => post.author === "Mario")}
                    handleDelete={handleDelete}
                />
            </>}

            {error && <p>{error}</p>}
        </div>
    );
}

export default Home;