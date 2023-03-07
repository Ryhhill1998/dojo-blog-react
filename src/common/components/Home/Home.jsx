import {useState} from "react";

import "./Home.css";

import PostsList from "../PostsList/PostsList";

const Home = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: "My New Website", content: "Lorem ipsum...", author: "Mario"},
        {id: 2, title: "Welcome Party!", content: "Lorem ipsum...", author: "Yoshi"},
        {id: 3, title: "Web Dev Top Tips", content: "Lorem ipsum...", author: "Mario"}
    ]);

    const handleBinClicked = (postId) => {
        setPosts(posts => posts.filter(post => post.id !== postId));
    }

    return (
        <div className="container home">
            <PostsList title="All Posts" posts={posts} handleBinClicked={handleBinClicked} />
            <PostsList
                title="Mario's Posts"
                posts={posts.filter(post => post.author === "Mario")}
                handleBinClicked={handleBinClicked}
            />
        </div>
    );
}

export default Home;