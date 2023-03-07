import "./Post.css";

const Post = ({title, content, author}) => {
    return (
        <div className="post-container">
            <h3>{title}</h3>
            <p>{content}</p>
            <p><em>by {author}</em></p>
        </div>
    );
};

export default Post;