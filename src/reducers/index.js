import {combineReducers} from 'redux';

const songsReducer = () => {

    return [
        {title: 'No scrubs', duration: '4,05'},
        {title: 'Macarena', duration: '2,30'},
        {title: 'All Stars', duration: '3,15'},
        {title: 'I want it that way', duration: '1,45'}
    ]
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({//All things from inside are STATE/All Reducers Data
    songs: songsReducer,        //give name to reducer
    selectedSong: selectedSongReducer//give name to reducer
});
