import "./Post.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

import {useNavigate} from "react-router-dom";

import {useDispatch} from "react-redux";
import {deletePost} from "../../../../features/posts/postsSlice";

const Post = ({id, title, content, author, preview}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const navigateToPost = () => navigate("/posts/" + id);

    const handlePostClicked = ({target}) => {
        if (!target.closest(".icon")) {
            navigateToPost();
        }
    }

    const handleDelete = (id) => {
        dispatch(deletePost(id));
        navigate("/");
    }

    const contentToDisplay = preview ? content.substring(0, 100) + "..." : content;

    return (
        <div className="post-container" onClick={handlePostClicked}>
            <h3>
                {title}
                <FontAwesomeIcon icon={faTrash} className="close-button icon" onClick={() => handleDelete(id)}/>
            </h3>
            <p>{contentToDisplay}</p>
            <p><em>by {author}</em></p>
        </div>
    );
};

export default Post;