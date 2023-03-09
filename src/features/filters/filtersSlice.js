import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    visible: false,
    filters: {
        author: "All",
    }
}

export const filtersSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        toggleDropdown: state => {
            state.visible = !state.visible;
        },
        hideDropdown: state => {
            state.visible = false;
        },
        addFilter: (state, action) => {
            const {name, value} = action.payload;
            state.filters[name] = value;
        },
    }
})


export const { toggleDropdown, hideDropdown, addFilter } = filtersSlice.actions
export const getFilters = state => state.filters.filters;
export const getVisibility = state => state.filters.visible;
export default filtersSlice.reducer