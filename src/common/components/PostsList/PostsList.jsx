import "./PostsList.css";
import Post from "./Post/Post";

const PostsList = ({title, posts, handleDelete}) => {
    return (
        <div className="posts-container">
            <h2>{title}</h2>

            {posts.map(post => (
                <Post key={post.id} {...post} handleDelete={handleDelete} />
            ))}
        </div>
    );
};

export default PostsList;