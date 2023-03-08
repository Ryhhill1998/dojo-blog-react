import "./Post.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

import {useNavigate} from "react-router-dom";

const Post = ({id, title, content, author}) => {

    const navigate = useNavigate();

    const navigateToPost = () => navigate("/posts/" + id);

    const handlePostClicked = ({target}) => {
        if (!target.closest(".icon")) {
            navigateToPost();
        }
    }

    const handleDelete = (id) => {
        fetch("http://localhost:8001/posts/" + id, {
            method: "DELETE",
        }).then(() => window.location.reload());
    }

    return (
        <div className="post-container" onClick={handlePostClicked}>
            <h3>
                {title}
                <FontAwesomeIcon icon={faTrash} className="close-button icon" onClick={() => handleDelete(id)}/>
            </h3>
            <p>{content}</p>
            <p><em>by {author}</em></p>
        </div>
    );
};

export default Post;