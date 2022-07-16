import { createSlice } from "@reduxjs/toolkit";
import JSON from '../../json/deftones-setlists.json';

const showsWithReformattedDate = JSON.map((showObj) => {
    let date = showObj.eventDate;
    let result = date.split('-').reverse().join('-');
    return {
        ...showObj,
        eventDate: result
    };
})

const initialState = {
    shows: showsWithReformattedDate,
    columnData: [
        { dataField: 'eventDate', text: 'Date', sort: true, headerStyle: { color: '#FFF', backgroundColor: 'rgba(128, 128, 128, 0.636)' } },
        { dataField: 'venue.name', text: 'Venue', headerStyle: { color: '#FFF', backgroundColor: 'rgba(128, 128, 128, 0.636)' } },
        { dataField: 'venue.city.name', text: 'City', headerStyle: { color: '#FFF', backgroundColor: 'rgba(128, 128, 128, 0.636)' } },
        { dataField: 'venue.city.state', text: 'State', headerStyle: { color: '#FFF', backgroundColor: 'rgba(128, 128, 128, 0.636)' } },
        { dataField: 'venue.city.country.name', text: 'Country', headerStyle: { color: '#FFF', backgroundColor: 'rgba(128, 128, 128, 0.636)' } }
    ],
}

const showSlice = createSlice({
    name: 'shows',
    initialState,
    // Not being used yet 
    reducers: {
        addShows: (state, { payload }) => {
            state.shows = payload
        },
    },
})

// export const { addShows } = showSlice.actions;
export const allShows = (state) => state.shows;
// TODO: create separate slice for columnData and other table related data
export const columnData = (state) => state.columnData;
export default showSlice.reducer;


