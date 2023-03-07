import "./Post.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

const Post = ({id, title, content, author, handleDelete}) => {
    return (
        <div className="post-container">
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