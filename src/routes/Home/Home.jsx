import PostsList from "../../features/posts/PostsList/PostsList";

import {useDispatch, useSelector} from "react-redux";
import {selectAllPosts, fetchPosts, getPostsStatus} from "../../features/posts/postsSlice";
import {useEffect} from "react";

const Home = () => {

    return (
        <div className="container home">
            <PostsList />
        </div>
    );
}

export default Home;