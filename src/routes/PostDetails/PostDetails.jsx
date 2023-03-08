import {useParams} from "react-router-dom";
import useFetch from "../../common/hooks/useFetch";
import Post from "../../common/components/PostsList/Post/Post";

const PostDetails = () => {

    const {id} = useParams();

    const {data: post, isPending, error} = useFetch("http://localhost:8001/posts/" + id);

    return (
        <div className="container">
            <h2>Post Details - {id}</h2>
            <Post {...post} />
        </div>
    );
};

export default PostDetails;