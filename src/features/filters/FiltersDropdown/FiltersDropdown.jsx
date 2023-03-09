import "./FiltersDropdown.css";

import {useDispatch} from "react-redux";
import {applyFilters, resetFilters, hideDropdown} from "../filtersSlice";
import {useState} from "react";

const defaultFilters = {
    author: "All",
}

const FiltersDropdown = () => {

    const dispatch = useDispatch();

    const [filters, setFilters] = useState(defaultFilters);
    const {author} = filters;

    const handleFilterChange = ({target}) => {
        const {name, value} = target;

        setFilters(filters => {
            const updatedFilters = {...filters};
            updatedFilters[name] = value;
            return updatedFilters;
        });
    }

    const handleApplyClicked = () => {
        dispatch(applyFilters(filters));
        dispatch(hideDropdown());
    }

    const handleResetClicked = () => {
        dispatch(resetFilters());
        dispatch(hideDropdown());
    }

    return (
        <div className="filter-dropdown">
            <h3>
                Filters
                <div>
                    <button onClick={handleApplyClicked}>Apply</button>
                    <button onClick={handleResetClicked}>Reset</button>
                </div>
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
        </div>
    );
};

export default FiltersDropdown;