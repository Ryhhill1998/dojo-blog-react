import PostsList from "../../common/components/PostsList/PostsList";

import {useDispatch, useSelector} from "react-redux";
import {selectAllPosts, fetchPosts, getPostsStatus} from "../../features/posts/postsSlice";
import {useEffect} from "react";

const Home = () => {

    const dispatch = useDispatch();

    const allPosts = useSelector(selectAllPosts);
    const postsStatus = useSelector(getPostsStatus);

    useEffect(() => {
        if (postsStatus === "idle") dispatch(fetchPosts());
    }, [dispatch, postsStatus]);

    return (
        <div className="container home">
            {postsStatus === "loading" && <p>Loading...</p>}

            {allPosts.length > 0 &&
                <>
                    <PostsList title="All Posts" posts={allPosts} />
                    <PostsList title="Mario's Posts" posts={allPosts.filter(post => post.author === "Mario")}/>
                </>}
        </div>
    );
}

export default Home;