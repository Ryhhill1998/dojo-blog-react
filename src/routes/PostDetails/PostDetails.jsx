import {useParams} from "react-router-dom";

const PostDetails = () => {

    const {id} = useParams();

    return (
        <div className="container">
            <h2>Post Details - {id}</h2>
        </div>
    );
};

export default PostDetails;