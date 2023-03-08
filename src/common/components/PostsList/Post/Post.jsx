import "./Post.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

const Post = ({id, title, content, author, handleDelete}) => {

    const navigate = useNavigate();

    const navigateToPost = () => navigate("/posts/" + id);

    const handleDeleteClicked = (id) => {
        if (!handleDelete) return;
        handleDelete(id);
    }

    return (
        <div className="post-container" onClick={navigateToPost}>
            <h3>
                {title}
                <FontAwesomeIcon icon={faTrash} className="close-button icon" onClick={() => handleDeleteClicked(id)}/>
            </h3>
            <p>{content}</p>
            <p><em>by {author}</em></p>
        </div>
    );
};

export default Post;