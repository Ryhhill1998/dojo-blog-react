import "./PostsList.css";

import Post from "../../../common/components/Post/Post";

import {faSliders} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts, getPostsStatus, selectAllPosts} from "../postsSlice";
import FiltersDropdown from "../../filters/FiltersDropdown/FiltersDropdown";
import {getFilters, getVisibility, toggleDropdown} from "../../filters/filtersSlice";

const PostsList = () => {

    // get all posts
    const dispatch = useDispatch();

    const allPosts = useSelector(selectAllPosts);
    const postsStatus = useSelector(getPostsStatus);

    useEffect(() => {
        if (postsStatus === "idle") {
            dispatch(fetchPosts());
        }
    }, [dispatch, postsStatus]);

    // create state to hold updated posts and title to reflect filters
    const [postsToDisplay, setPostsToDisplay] = useState(null);
    const [titleToDisplay, setTitleToDisplay] = useState("All Posts");

    useEffect(() => setPostsToDisplay(allPosts), [allPosts]);

    // dropdown visibility
    const isDropdownVisible = useSelector(getVisibility);

    // dropdown filters
    const filters = useSelector(getFilters);

    const {author} = filters;

    useEffect(() => {
        if (!author || author === "All") return;
        setPostsToDisplay(allPosts.filter(post => post.author === author));
    }, [allPosts, author]);

    // filter dropdown function
    const handleFilterClicked = () => {
        dispatch(toggleDropdown());
    }

    return (
        <div className="posts-container">
            <div className="posts-header">
                <h2>
                    {titleToDisplay}
                    <FontAwesomeIcon icon={faSliders} className="icon" onClick={handleFilterClicked} />
                </h2>

                {isDropdownVisible && <FiltersDropdown />}
            </div>

            {postsToDisplay && postsToDisplay.map(post => (
                <Post key={post.id} {...post} preview={true} />
            ))}
        </div>
    );
};

export default PostsList;