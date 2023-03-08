import PostsList from "../../common/components/PostsList/PostsList";

import useFetch from "../../common/hooks/useFetch";

const Home = () => {

    const {data: posts, isPending, error} = useFetch("http://localhost:8001/posts");

    return (
        <div className="container home">
            {isPending && <p>Loading...</p>}

            {posts &&
            <>
                <PostsList title="All Posts" posts={posts} />
                <PostsList title="Mario's Posts" posts={posts.filter(post => post.author === "Mario")}/>
            </>}

            {error && <p>{error}</p>}
        </div>
    );
}

export default Home;