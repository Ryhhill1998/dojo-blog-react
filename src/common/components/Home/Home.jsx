import {useState} from "react";

import "./Home.css";

import PostsList from "../PostsList/PostsList";

const Home = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: "My New Website", content: "Lorem ipsum...", author: "Mario"},
        {id: 2, title: "Welcome Party!", content: "Lorem ipsum...", author: "Yoshi"},
        {id: 3, title: "Web Dev Top Tips", content: "Lorem ipsum...", author: "Mario"}
    ]);

    return (
        <div className="container home">
            <PostsList title="All Posts" posts={posts} />
            <PostsList title="Mario's Posts" posts={posts.filter(post => post.author === "Mario")} />
        </div>
    );
}

export default Home;