// Set text filter
export const setTextFilter = (text='') => ({
    type: 'SET_TEXT_FILTER',
    text
});
// Set start Date
export const setStartDate = (date = undefined) => ({
    type: 'SET_START_DATE',
    date
});
// Set end Date
export const setEndDate = (date = undefined) => ({
    type: 'SET_END_DATE',
    date
});
// Sort By Date
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});