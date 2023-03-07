import "./Post.css";

const Post = ({title, content, author}) => {
    return (
        <div className="post-container">
            <h2>{title}</h2>
            <p>{content}</p>
            <p>by {author}</p>
        </div>
    );
};

export default Post;