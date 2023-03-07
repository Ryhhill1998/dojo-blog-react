import {useEffect, useState} from "react";

import "./Home.css";

import PostsList from "../PostsList/PostsList";

const Home = () => {

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        fetch(" http://localhost:8000/posts").then(response => response.json()).then(data => setPosts(data));
    }, []);

    const handleDelete = (postId) => {
        setPosts(posts.filter(post => post.id !== postId));
    }

    return (
        <>
            {posts &&
            <div className="container home">
                <PostsList title="All Posts" posts={posts} handleDelete={handleDelete} />
                <PostsList
                    title="Mario's Posts"
                    posts={posts.filter(post => post.author === "Mario")}
                    handleDelete={handleDelete}
                />
            </div>}
        </>
    );
}

export default Home;