import {useNavigate, useParams} from "react-router-dom";
import Post from "../../common/components/PostsList/Post/Post";

import {useSelector} from "react-redux";
import {selectAllPosts} from "../../features/posts/postsSlice";
import {useEffect} from "react";

const PostDetails = () => {

    const navigate = useNavigate();

    const {id} = useParams();

    const allPosts = useSelector(selectAllPosts);

    useEffect(() => {
        if (!allPosts.length) navigate("/");
    }, [allPosts, navigate]);

    const foundPost = allPosts.find(post => post.id === +id);

    return (
        <div className="container">
            <h2>Post Details - {id}</h2>

            <Post {...foundPost} />
        </div>
    );
};

export default PostDetails;