import "./PostsList.css";

import Post from "./Post/Post";

import {faSliders} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {useState} from "react";

const defaultFilters = {
    author: "All",
};

const PostsList = ({title, posts}) => {

    const [postsToDisplay, setPostsToDisplay] = useState(posts);
    const [titleToDisplay, setTitleToDisplay] = useState(title);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [filters, setFilters] = useState(defaultFilters);

    const {author} = filters;

    const handleFilterClicked = () => {
        setIsDropdownVisible(!isDropdownVisible);
    }

    const handleFilterChange = ({target}) => {
        const {name, value} = target;

        setFilters(filters => {
            const updatedFilters = {...filters};
            updatedFilters[name] = value;
            return updatedFilters;
        });
    }

    const handleApplyClicked = () => {
        if (author === defaultFilters.author) {
            setPostsToDisplay(posts);
            setTitleToDisplay(title);
        } else {
            setPostsToDisplay(posts.filter(post => post.author === author));
            setTitleToDisplay(author + "'s Posts");
        }

        handleFilterClicked();
    }

    return (
        <div className="posts-container">
            <div className="posts-header">
                <h2>
                    {titleToDisplay}
                    <FontAwesomeIcon icon={faSliders} className="close-button icon" onClick={handleFilterClicked} />
                </h2>

                {isDropdownVisible &&
                    <div className="filter-dropdown">
                        <h3>
                            Filters
                            <button onClick={handleApplyClicked}>Apply</button>
                        </h3>

                        <div className="filters-container">
                            <label className="filter">
                                Filter by author
                                <select name="author" value={author} onChange={handleFilterChange}>
                                    <option>All</option>
                                    <option>Mario</option>
                                    <option>Luigi</option>
                                    <option>Yoshi</option>
                                </select>
                            </label>
                        </div>
                    </div>}
            </div>

            {postsToDisplay.map(post => (
                <Post key={post.id} {...post} preview={true}/>
            ))}
        </div>
    );
};

export default PostsList;