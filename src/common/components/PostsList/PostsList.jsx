import "./PostsList.css";
import Post from "./Post/Post";

const PostsList = ({title, posts}) => {

    return (
        <div className="posts-container">
            <h2>{title}</h2>

            {posts.map(post => (
                <Post key={post.id} {...post} preview={true} />
            ))}
        </div>
    );
};

export default PostsList;