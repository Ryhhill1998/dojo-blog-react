import "./PostsList.css";
import Post from "./Post/Post";
import {faSliders} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useSelector} from "react-redux";
import {useState} from "react";

const PostsList = ({title, posts}) => {

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const handleFilterClicked = () => {
        setIsDropdownVisible(!isDropdownVisible);
    }

    return (
        <div className="posts-container">
            <div className="posts-header">
                <h2>
                    {title}
                    <FontAwesomeIcon icon={faSliders} className="close-button icon" onClick={handleFilterClicked}/>
                </h2>

                {isDropdownVisible &&
                    <div className="filter-dropdown">
                        <h3>Filters</h3>

                        <div className="filters-container">
                            <label className="filter">
                                Filter by author
                                <select>
                                    <option>Mario</option>
                                    <option>Luigi</option>
                                    <option>Yoshi</option>
                                </select>
                            </label>
                        </div>
                    </div>}
            </div>

            {posts.map(post => (
                <Post key={post.id} {...post} preview={true}/>
            ))}
        </div>
    );
};

export default PostsList;