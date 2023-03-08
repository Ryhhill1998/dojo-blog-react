import PostsList from "../../common/components/PostsList/PostsList";

import {useDispatch, useSelector} from "react-redux";
import {selectAllPosts, fetchPosts, getPostsStatus, getPostsError} from "../../features/posts/postsSlice";
import {useEffect} from "react";

const Home = () => {

    const dispatch = useDispatch();

    const allPosts = useSelector(selectAllPosts);
    const postsStatus = useSelector(getPostsStatus);
    const postsError = useSelector(getPostsError);

    useEffect(() => {
        if (postsStatus === "idle") {
            dispatch(fetchPosts());
        }
    }, [dispatch, postsStatus]);

    // console.log(allPosts)

    return (
        <div className="container home">
            {/*{isPending && <p>Loading...</p>}*/}

            {allPosts &&
            <>
                <PostsList title="All Posts" posts={allPosts} />
                <PostsList title="Mario's Posts" posts={allPosts.filter(post => post.author === "Mario")}/>
            </>}

            {/*{error && <p>{error}</p>}*/}
        </div>
    );
}

export default Home;