import "./FiltersDropdown.css";

import {useDispatch, useSelector} from "react-redux";
import {getFilters, addFilter} from "../filtersSlice";

const FiltersDropdown = () => {

    const filters = useSelector(getFilters);

    const {author} = filters;

    // const hideFilterDropdown = () => {
    //     setIsDropdownVisible(false);
    // }
    //
    // const resetFilters = () => {
    //     setPostsToDisplay(allPosts);
    //     setTitleToDisplay("All Posts");
    // }
    //
    // const handleFilterChange = ({target}) => {
    //     const {name, value} = target;
    //
    //     setFilters(filters => {
    //         const updatedFilters = {...filters};
    //         updatedFilters[name] = value;
    //         return updatedFilters;
    //     });
    // }
    //
    // const handleApplyClicked = () => {
    //     if (author === defaultFilters.author) {
    //         resetFilters();
    //     } else {
    //         setPostsToDisplay(allPosts.filter(post => post.author === author));
    //         setTitleToDisplay(author + "'s Posts");
    //     }
    //
    //     hideFilterDropdown();
    // }
    //
    // const handleResetClicked = () => {
    //     resetFilters();
    //     hideFilterDropdown();
    // }

    return (
        <div className="filter-dropdown">
            <h3>
                Filters
                <div>
                    <button>Apply</button>
                    <button>Reset</button>
                </div>
            </h3>

            <div className="filters-container">
                <label className="filter">
                    Filter by author
                    <select name="author" value={author} onChange={() => console.log("change")}>
                        <option>All</option>
                        <option>Mario</option>
                        <option>Luigi</option>
                        <option>Yoshi</option>
                    </select>
                </label>
            </div>
        </div>
    );
};

export default FiltersDropdown;