import {useState} from "react";

import "./Home.css";
import Post from "../Post/Post";

const Home = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: "My New Website", content: "Lorem ipsum...", author: "Mario"},
        {id: 2, title: "Welcome Party!", content: "Lorem ipsum...", author: "Yoshi"},
        {id: 3, title: "Web Dev Top Tips", content: "Lorem ipsum...", author: "Mario"}
    ]);

    return (
        <div className="container home">
            <div>
                {posts.map(post => (
                    <Post key={post.id} {...post} />
                ))}
            </div>
        </div>
    );
}

export default Home;