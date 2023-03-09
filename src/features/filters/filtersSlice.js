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
        applyFilters: (state, action) => {
            state.filters = action.payload;
        },
        resetFilters: state => {
            state.filters = initialState.filters;
        }
    }
})


export const { toggleDropdown, hideDropdown, applyFilters, resetFilters } = filtersSlice.actions
export const getFilters = state => state.filters.filters;
export const getVisibility = state => state.filters.visible;
export default filtersSlice.reducer