import "./Home.css";

import PostsList from "../PostsList/PostsList";

import useFetch from "../../hooks/useFetch";

const Home = () => {

    const {data: posts, isPending, error} = useFetch("http://localhost:8001/posts");

    const handleDelete = (postId) => {
        console.log("delete clicked");
    }

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