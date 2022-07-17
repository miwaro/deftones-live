import { createSlice } from "@reduxjs/toolkit";
import JSON from '../../json/deftones-songs.json';

const initialState = {
    songs: JSON.map((showObj),
    columnData: [
        { dataField: 'name', text: 'Song Name', sort: true, headerStyle: { color: '#FFF', backgroundColor: 'rgba(128, 128, 128, 0.636)' } },
        { dataField: 'album', text: 'Album', headerStyle: { color: '#FFF', backgroundColor: 'rgba(128, 128, 128, 0.636)' } }, }
    ],
}
